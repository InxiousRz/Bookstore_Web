import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { throwError, Observable, BehaviorSubject, of, finalize } from "rxjs";
import { catchError, filter, take, switchMap, map, tap} from "rxjs/operators";
import { ApiUtilitiesService } from '../services/api-utilities.service';
import { ApiService } from '../services/api.service';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {


  refresh_token_inprogress: boolean = false;
  private refresh_token_subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private api_utilities: ApiUtilitiesService,
    private api: ApiService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(

      // TRANSLATE RESULT
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const modEvent = event.clone({ 
            body: this.api_utilities.translateResult(
              event,
              request.method,
              request.url
            )
          });
          
          return modEvent;
        }

        return event;
      }),

      // CATCH ERR
      catchError((error: HttpErrorResponse, caught: Observable<HttpEvent<unknown>>) => {

        // UNAUTHORIZED
        if (error && error.status === 401) {
          // 401 errors are most likely going to be because we have an expired token that we need to refresh.
          if (this.refresh_token_inprogress) {
            // If refresh_token_inprogress is true, we will wait until refresh_token_subject has a non-null value
            // which means the new token is ready and we can retry the request again
            return this.refresh_token_subject.pipe(
              filter(result => result !== null),
              take(1),
              switchMap(() => next.handle(request))
            );

          } else {
            this.refresh_token_inprogress = true;

            // Set the refresh_token_subject to null so that subsequent API calls will wait until the new token has been retrieved
            this.refresh_token_subject.next(null);
            
            return this.refreshAccessToken().pipe(
              switchMap((success: boolean) => {               
                this.refresh_token_subject.next(success);

                request = request.clone({headers: request.headers.set('Authorization', 'application/json')});

                return next.handle(request);
              }),
              // When the call to refreshToken completes we reset the refresh_token_inprogress to false
              // for the next time the token needs to be refreshed
              finalize(() => this.refresh_token_inprogress = false)
            );
          }
        } else {
          return throwError(() => error);
        }
      })
    );
  }

  private refreshAccessToken(): Observable<any> {

    return this.api.refreshToken().pipe(
      map((response: HttpResponse<any>)=>{

        if(response.status === 200){

          if(response.body["message"] == "Success"){

            // this.local_storage.setItem(
            //   "refresh_token",
            //   response.body["Refresh_Token"]
            // );

            // this.local_storage.setItem(
            //   "access_token",
            //   response.body["Access_Token"]
            // );

            this.api_utilities.loginAssignAuth(
              response.body["Refresh_Token"],
              response.body["Access_Token"]
            );

          } else {

            this.api_utilities.renavigateLogin(
              response.body["error_message"],
              JSON.stringify(response.body, null, 2),
            );

          }

        }

        return "OK";
        
      })
    );

  }

}
