import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUtilitiesService } from './api-utilities.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mainlink: string;

  constructor(
    private http: HttpClient,
    private api_utilities: ApiUtilitiesService,
    private local_storage: LocalStorageService
  ) {
    this.mainlink = "";
  }

  refreshToken() {

    let base_url = `${this.mainlink}/author/refresh_token`;

    // PARAMS
    // =====================================================================

    // HEADER
    // =====================================================================
    let header = new HttpHeaders({
      "Content-Type": "application/json"
    });

    console.log(base_url)

    let result = this.http.post(
      base_url,
      {
        "Refresh_Token": this.local_storage.getItem("refresh_token")
      },
      {
        headers: header,
        observe: 'response'
      }
    );

    let api_data = {
      "Path": base_url,
      "Type": "POST"
    }

    return this.api_utilities.translateResult(
      result,
      api_data
    );
  }

  loginAuthor(email: string, password: string) {

    let base_url = `${this.mainlink}/author/login`;

    // PARAMS
    // =====================================================================

    // HEADER
    // =====================================================================
    let header = new HttpHeaders({
      "Content-Type": "application/json"
    });

    console.log(base_url)

    let result = this.http.post(
      base_url,
      {
        "Email": email,
        "Password": password,
      },
      {
        headers: header,
        observe: 'response'
      }
    );

    let api_data = {
      "Path": base_url,
      "Type": "POST"
    }

    return this.api_utilities.translateResult(
      result,
      api_data
    );
  }

  logoutAuthor() {

    let base_url = `${this.mainlink}/author/logout`;

    // PARAMS
    // =====================================================================

    // HEADER
    // =====================================================================
    let header = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + this.local_storage.getItem("refresh_token")
    });

    console.log(base_url)

    let result = this.http.post(
      base_url,
      {},
      {
        headers: header,
        observe: 'response'
      }
    );

    let api_data = {
      "Path": base_url,
      "Type": "POST"
    }

    return this.api_utilities.translateResult(
      result,
      api_data
    );
  }

}
