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
    this.mainlink = "http://localhost:4050";
  }

  refreshToken() {

    console.log("Refresh Token =====================");

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

    return result;
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

    return result;
  }

  logoutAuthor() {

    let base_url = `${this.mainlink}/author/logout`;

    // PARAMS
    // =====================================================================

    // HEADER
    // =====================================================================
    let header = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + this.local_storage.getItem("access_token")
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

    return result;
  }

  registerAuthor(name: string, pen_name: string, email: string, password: string) {

    let base_url = `${this.mainlink}/author/register`;

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
        "Name": name,
        "Pen_Name": pen_name,
        "Email": email,
        "Password": password,
      },
      {
        headers: header,
        observe: 'response'
      }
    );

    return result;
  }

  getBooks(name_search: string | null, author_id: number | null, page: number, limit: number) {

    let base_url = `${this.mainlink}/book/get`;

    // PARAMS
    // =====================================================================
    let query_param = new HttpParams();

    // TITLE
    if(name_search != null){
      query_param = query_param.set("Title", name_search.toString());
    }

    // AUTHOR
    if(author_id != null){
      query_param = query_param.set("Author_ID", author_id.toString());
    }

    // PAGE
    query_param = query_param.set("Page", page.toString());

    // LIMIT
    query_param = query_param.set("Limit", limit.toString());

    // console.log(query_param.toString());

    // HEADER
    // =====================================================================
    let header = new HttpHeaders({
      "Content-Type": "application/json"
    });

    console.log(base_url)

    let result = this.http.get(
      base_url,
      {
        headers: header,
        params: query_param,
        observe: 'response'
      }
    );

    return result;
  }

}
