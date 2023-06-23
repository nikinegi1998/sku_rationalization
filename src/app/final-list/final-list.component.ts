import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../_Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-list',
  templateUrl: './final-list.component.html',
  styleUrls: ['./final-list.component.css']
})
export class FinalListComponent implements OnInit {

  Final_List: any[] = []
  STD_rule: any
  dataSource: MatTableDataSource<any>

  displayedColumns: string[] = ['Class Description', 'Old SKU Description', 'New SKU Description'];

  selectedColumn = ''

  dataSource1: MatTableDataSource<any>;
  // Define the MatPaginator and MatSort
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialog, private apiService: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.getChartData()
  }


  getChartData() {



    let col_payload = JSON.parse(localStorage.getItem('col_payload'))

    // this.apiService.
    this.apiService.sendColumnNames(col_payload).subscribe({
      next: (res: any) => {
        console.log("RESS", res);
        this.apiService.sendColumnRes(res)
        localStorage.setItem("colummRes", JSON.stringify(res.Final_Standardization_Chart))
        localStorage.setItem("colummAllDataRes", JSON.stringify(res))


        let vl = JSON.parse(localStorage.getItem("colummAllDataRes"))

        this.Final_List = JSON.parse(vl.Final_List)
        console.log(this.Final_List, "Final_List");
        this.dataSource = new MatTableDataSource<any>(this.Final_List);

        console.log(this.dataSource.paginator);
        this.STD_rule = vl.Final_Standardization_Chart.Standardization_Rule
        console.log(vl, this.STD_rule, "STD rule");


        // Set the paginator and sort for the MatTableDataSource
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    })


  }
  onChipOptionClick(data: any) {
    console.log("cLICKED", data);
    this.selectedColumn = data;
  }

  columnSelect(col_name) {
    console.log("col_name", col_name);
    this.selectedColumn = col_name
  }

  navigateToConsolidate() {
    if (this.selectedColumn !== '')
      this.router.navigate(["/consolidate"], { state: { col_name: this.selectedColumn } })

    else
      console.log("select a column first");

  }
}
