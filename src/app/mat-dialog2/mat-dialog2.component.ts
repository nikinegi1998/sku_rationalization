import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../_Services/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-mat-dialog2',
  templateUrl: './mat-dialog2.component.html',
  styleUrls: ['./mat-dialog2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MatDialog2Component implements  OnInit{
  @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;


  displayedColumns1: string[] = ['Class Description', 'Sub Department Description', 'Sub Class Description', 'SKU Description', 'SKU Id'];
  displayedColumns2: string[] = ['DIVISION_NAME', 'DEPT_NAME', 'SKU Type', 'SKU_NAME', 'SKU_ID'];

  dataSource1:MatTableDataSource<any>
  dataSource2:MatTableDataSource<any>


  list1:any = []
  list2:any = []

  constructor(private apiService: ApiService) {

  }
  ngOnInit() {
   this.getTableData()
   console.log(this.dataSource1);

 }


   getTableData(){
    let body = {}
    this.apiService.getRetailTableData(body).subscribe({
      next: (res: any) => {
        this.list1 = JSON.parse(res["List 1"]);
        this.list2 = JSON.parse(res["List 2"]);
        console.log(this.list2);
        this.dataSource1 = new MatTableDataSource<any>(this.list1);
        this.dataSource1.paginator = this.paginator1;
        this.dataSource2 = new MatTableDataSource<any>(this.list2);
        this.dataSource2.paginator = this.paginator2;
      }
    })
   }



}
