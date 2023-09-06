import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../_Services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mat-dialog2',
  templateUrl: './mat-dialog2.component.html',
  styleUrls: ['./mat-dialog2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MatDialog2Component implements OnInit {
  @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;


  displayedColumns1: any[] 
  // = ['Class Description', 'Sub Department Description', 'Sub Class Description', 'SKU Description', 'SKU Id'];
  displayedColumns2: any[]
  //  = ['DIVISION_NAME', 'DEPT_NAME', "CLASS_NAME", "SUBCLASS_NAME", 'SKU Type', 'SKU_NAME', 'SKU_ID'];

  dataSource1: MatTableDataSource<any>
  dataSource2: MatTableDataSource<any>

  selectedColumn1: any;
  selectedColumn2: any;

  filename1
  filename2

  indexNumber: number = 0;


  list1: any = []
  list2: any = []

  constructor(private apiService: ApiService, private router: Router) {

  }
  ngOnInit() {
    this.getTableData()
    console.log(this.dataSource1);

  }


  getTableData() {
    this.filename1 = localStorage.getItem('uploadfilename1')
    this.filename2 = localStorage.getItem('uploadfilename2')
    let body = {
      "filename1": this.filename1,
      "filename2": this.filename2
    }
    this.apiService.getRetailTableData(body).subscribe({
      next: (res: any) => {
        this.list1 = JSON.parse(res["List 1"]);
        this.list2 = JSON.parse(res["List 2"]);
        console.log(this.list1, this.list2);
        this.displayedColumns1 = Object.keys(this.list1[0]).length < 9 ? Object.keys(this.list1[0]) : Object.keys(this.list1[0]).slice(0, 8)

        this.dataSource1 = new MatTableDataSource<any>(this.list1);

        this.dataSource1.paginator = this.paginator1;

        this.displayedColumns2 = Object.keys(this.list2[0]).length < 9 ? Object.keys(this.list2[0]) : Object.keys(this.list2[0]).slice(0, 8)

        this.dataSource2 = new MatTableDataSource<any>(this.list2);

        this.dataSource2.paginator = this.paginator2;
      }
    })
  }



  onChipOptionClick1(data: any) {
    console.log("cLICKED", data);
    this.selectedColumn1 = data;
  }
  onChipOptionClick2(data: any) {
    console.log("cLICKED", data);
    this.selectedColumn2 = data;
  }

  changeMatTabIndexNo() {
    this.indexNumber = 1;
  }

  sendColumn() {

    let body = {
      "filename1": this.filename1,
      "filename2": this.filename2  ,
      "Selected Columns": { "list1": [this.selectedColumn1], "list2": [this.selectedColumn2] }
    }

    localStorage.setItem("original_selected_col", JSON.stringify(body['Selected Columns']))

    console.log("body===", body);

    localStorage.setItem('col_payload', JSON.stringify(body))
    this.apiService.sendColumnNames(body).subscribe({
      next: (res: any) => {
        console.log("RESS", res);
        this.apiService.sendColumnRes(res)
        localStorage.setItem("colummRes", JSON.stringify(res.Final_Standardization_Chart))
        localStorage.setItem("colummAllDataRes", JSON.stringify(res))

        this.router.navigateByUrl("/standardizeChart")
      }
    })
  }



}
