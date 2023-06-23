import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../_Services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consolidation',
  templateUrl: './consolidation.component.html',
  styleUrls: ['./consolidation.component.css']
})
export class ConsolidationComponent implements OnInit {

  dataSource: MatTableDataSource<any>
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedClasses: any = []
  colName
  inputVal = 5

  consolidateBtnFlag = true

  recommendations = []

  constructor(private router: Router, private apiService: ApiService) {
    this.colName = router.getCurrentNavigation().extras.state
  }

  ngOnInit(): void {
    let body = { "selected_column": this.colName.col_name }

    this.apiService.consolidation(body).subscribe(
      (res: any) => {
        this.selectedClasses = res.unique_vals
        console.log(this.selectedClasses, "selectedClasses");



      }
    )
  }

  consolidateWithRecommendedVal() {

    console.log(this.inputVal, "inputVal");

    let body = { "selected_column": this.colName.col_name, "recc_consNums": this.inputVal }

    this.apiService.consolidation(body).subscribe(
      (res: any) => {
        this.recommendations.push(res.response_text)
        console.log(this.recommendations, "this.recommendations");
        this.consolidateBtnFlag = false

        // Set the paginator and sort for the MatTableDataSource
        this.dataSource = new MatTableDataSource<any>(this.recommendations);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  moreGrouping(Val) {
    let body
    if (Val === 'More')
      body = {
        "selected_column": this.colName.col_name,
        "recc_consNums": this.inputVal,
        "moreGrpng": "true",
        "lessGrpng": "false"
      }
    else {
      body = {
        "selected_column": this.colName.col_name,
        "recc_consNums": this.inputVal,
        "moreGrpng": "false",
        "lessGrpng": "true"
      }
    }
    console.log(body, "body with grouping");


    this.apiService.consolidation(body).subscribe(
      (res: any) => {
        this.recommendations.push(res.response_text)
        console.log(this.recommendations, "this.recommendations with grouping");
        this.consolidateBtnFlag = false
      }
    )
  }

}
