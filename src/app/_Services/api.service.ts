import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  hostname: any = window.location.hostname;
  PORT: number = 3000;
  PROTOCOL: string = window.location.protocol


  sendFilesApi: any;

  retailSkuTablePage2: any;
  updateChartAPI: any
  classificationAPI: any
  consolidateAPI: any

  private columnRes$ = new Subject<any>();

  constructor(private http: HttpClient) {
    console.log(this.hostname, this.PROTOCOL, this.sendFilesApi);

    if (this.hostname == "localhost") {
      this.sendFilesApi = "https://demo.jktech.in:3000/process-file/uploadfile?folder_name=SKU_Rationalization Files";
      this.retailSkuTablePage2 = "http://52.172.146.146:3000/process-json/Retail-SKU";
      this.updateChartAPI = "http://52.172.146.146:3000/process-json/SKU-updateSTD"
      this.classificationAPI = "http://52.172.146.146:3000/process-json/SKU-catReclass"
      this.consolidateAPI = "http://52.172.146.146:3000/process-json/SKU-consolidate"
    }
    else {
      this.sendFilesApi = `https://${this.hostname}:${this.PORT}/process-file/uploadfile?folder_name=SKU_Rationalization Files`;
      this.retailSkuTablePage2 = `https://${this.hostname}:${this.PORT}/process-json/Retail-SKU`;
      this.updateChartAPI = `https://${this.hostname}:${this.PORT}/process-json/SKU-updateSTD`
      this.classificationAPI = `https://${this.hostname}:${this.PORT}/process-json/SKU-catReclass`
      this.consolidateAPI = `https://${this.hostname}:${this.PORT}/process-json/SKU-consolidate`
    }
  }




  sendFilesfirstPage(body: any) {
    return this.http.post(this.sendFilesApi, body)
  }

  getRetailTableData(body: any) {
    return this.http.post(this.retailSkuTablePage2, body)
  }

  sendColumnNames(body: any) {
    return this.http.post(this.retailSkuTablePage2, body)

  }

  //Api response data for standardize chart from column selection
  sendColumnRes(data: any) {
    this.columnRes$.next(data);
  }

  getColumnRes(): Observable<any> {
    return this.columnRes$.asObservable();
  }

  updateChartDetail(body) {
    return this.http.post(this.updateChartAPI, body);
  }

  updateClassification(body) {
    return this.http.post(this.classificationAPI, body);
  }

  consolidation(body) {
    return this.http.post(this.consolidateAPI, body)
  }
}
