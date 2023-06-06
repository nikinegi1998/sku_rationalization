import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendFilesfirstPage(body:any){
    return this.http.post("https://demo.jktech.in:3000/process-file/uploadfile?folder_name=SKU_Rationalization Files", body)
  }
}
