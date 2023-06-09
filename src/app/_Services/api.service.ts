import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendFilesApi = "https://demo.jktech.in:3000/process-file/uploadfile?folder_name=SKU_Rationalization Files"

  retailSkuTablePage2 = "http://52.172.146.146:3000/process-json/Retail-SKU"

  sendFilesfirstPage(body:any){
    return this.http.post(this.sendFilesApi, body)
  }

  getRetailTableData(data:any){
    return this.http.post(this.retailSkuTablePage2,data)
  }
}
