import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilitiesService {

  constructor(
    private api: ApiService,
    private local_storage: LocalStorageService
  ) { }

  translateResult(api_return: Observable<any>, api_data: any){
    return new Observable<any>((observer) => {

      api_return.subscribe((data)=>{

        let header = data.heades;
        let body = data.body;
        let status = data.status;

        let success: boolean = false;
        let return_data: any;
        let error_desc: any;

        if(body["message"] == "Success"){
          success = true;
          return_data = body["data"];
        }

        if(body["message"] == "Failed"){
          success = false;
          error_desc = body;

          if(body["error_key"] == "error_expired_token" 
            || body["error_key"] == "error_invalid_token"){
              this.api.refreshToken().subscribe(data => {
                this.local_storage.setItem('access_token', data);
              });
          } else {

            this.openDetailForm(
              JSON.stringify(error_desc, null, 2),
              JSON.stringify(api_data, null, 2),
              status.toString(),
            )

          }
          
        }

        
        observer.next([
          success,
          success == true ? return_data : error_desc
        ])

      });

    });
  }

  openDetailForm(error: string, on: any, status_code: string){

    console.log("==============================================");
    console.log(error);
    console.log(on);
    console.log(status_code);
    console.log("==============================================");


    // const modalRef = this.modalService.open(ErrorDialogueComponent, { size: 'xl', scrollable: true, centered: true });
    // modalRef.componentInstance.name = 'Error Page';
    // modalRef.componentInstance.error = error;
    // modalRef.componentInstance.on = on;
    // modalRef.componentInstance.status_code = status_code;
    

    // modalRef.dismissed.subscribe((data)=>{
    //   console.log("=============== DISSMISS  ==");
    //   console.log(data);
    // });

    // modalRef.closed.subscribe((data)=>{

    // });

    // modalRef.hidden.subscribe((data)=>{
    //   console.log("=============== HIDDEN  ==");
    //   console.log(data);
    // });
  }

  refreshToken(){
    
  }

}
