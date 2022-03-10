import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import * as jwt from 'jsonwebtoken'; 
@Injectable({
  providedIn: 'root'
})
export class ApiUtilitiesService {

  
  key_pub = `-----BEGIN PUBLIC KEY-----
  MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgH0CBhyfoFF6jsD3fOWPiwCACuDI
  IkLgjA4MXMoDbZbioWyA+ZhUyhIu3P6XwIVJYdUAaRDYXWsaEyR/NvBRcni3gOX4
  n3zERHtmLFyKCraHdVFDKHHfb6dlmMbXFP2xS5slCdQXwGEDwLAPj6al/zd7uhjH
  UK8jZUxN61W+cvkzAgMBAAE=
  -----END PUBLIC KEY-----`;

  constructor(
    private router: Router,
    private local_storage: LocalStorageService,
  ) { }

  translateResult(response: HttpResponse<any>, api_method: string, api_url: string){

        let header = response.headers;
        let body = response.body;
        let status = response.status;

        let success: boolean = false;
        let return_data: any;
        let error_desc: any;
        let api_data = {
          "Path": api_url,
          "Type": api_method
        }

        if(body["message"] == "Success"){
          success = true;
          return_data = {
            "Body": body["data"],
            "Response": response
          };
        }

        if(body["message"] == "Failed"){
          success = false;
          error_desc = body;

          this.openErrorDetailForm(
            JSON.stringify(error_desc, null, 2),
            JSON.stringify(api_data, null, 2),
            status.toString(),
          )
          
        }

        return {
          "Success": success,
          "Modified_Payload": return_data
        };
  }

  openErrorDetailForm(error: string, on: any, status_code: string){

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

  renavigateLogin(error: string, error_data: string){
    
    this.router.navigate(['login']); // RELOGIN
  
  }

  loginAssignAuth(refresh_token: string, access_token: string){

    this.local_storage.setItem(
      "refresh_token",
      refresh_token
    );

    this.local_storage.setItem(
      "access_token",
      access_token
    );

  }

  logoutClearAuth(){
    this.local_storage.clear();
  }

  checkLogin(){
    if(this.local_storage.getItem('refresh_token') != null){
      return true;
    }

    return false;
  }

  decryptAuthandGetUserData(access_token: string){

    let success;
    let valid_data;

    try {

        // valid_data = verify(
        //     access_token,
        //     this.key_pub,
        //     {
        //       algorithms: ["RS256"]
        //     }
        // );
        valid_data = jwt.decode(
          access_token
        );

        console.log(valid_data)

        success = true;

    } catch(err: any){

        console.log(err.message);
        valid_data = err.message;
        success = false;

        // EXPIRED
        if(err.name == "TokenExpiredError"){
            success = true;
            valid_data = "TokenExpiredError";
        }
    }

    return [success, valid_data];

  }

}
