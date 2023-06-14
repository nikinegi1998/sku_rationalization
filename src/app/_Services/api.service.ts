import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendFilesApi = "https://demo.jktech.in:3000/process-file/uploadfile?folder_name=SKU_Rationalization Files"

  retailSkuTablePage2 = "http://52.172.146.146:3000/process-json/Retail-SKU"

  private columnRes$ = new Subject<any>();


  sendFilesfirstPage(body:any){
    return this.http.post(this.sendFilesApi, body)
  }

  getRetailTableData(body:any){
    return this.http.post(this.retailSkuTablePage2,body)
  }

  sendColumnNames(body:any){
    return this.http.post(this.retailSkuTablePage2,body)

  }

   //Api response data for standardize chart from column selection
   sendColumnRes(data:any){
    this.columnRes$.next(data);
  }

  getColumnRes():Observable<any>{
    return this.columnRes$.asObservable();
  }
}
