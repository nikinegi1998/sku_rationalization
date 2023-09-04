import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog3Component } from '../mat-dialog3/mat-dialog3.component';
import { ApiService } from '../_Services/api.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatModalFinalComponent } from '../mat-modal-final/mat-modal-final.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplicity-across',
  templateUrl: './duplicity-across.component.html',
  styleUrls: ['./duplicity-across.component.css']
})
export class DuplicityAcrossComponent implements OnInit {

  constructor(private dialog: MatDialog, private apiService: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.getChartData()
  }

  data: any;

  subscription: Subscription


  Duplicity_Across = []
  Items_Duplicity_Across = []
  clickedList: boolean = true;
  clickedGrid: boolean = false;

  dataSource: MatTableDataSource<any>;
  // Define the MatPaginator and MatSort
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  getChartData() {
    this.data = JSON.parse(localStorage.getItem("colummRes"));

    let vl = JSON.parse(localStorage.getItem("colummAllDataRes"))
    this.Duplicity_Across = JSON.parse(vl.Duplicity_Across)
    this.Items_Duplicity_Across = JSON.parse(vl.Items_Duplicity_Across).filter((data: any) => { return data["Class Description"] != "" })

    console.log(this.Duplicity_Across, "Duplicity_Across");
    console.log(this.Items_Duplicity_Across, "Items_Duplicity_Across");


    this.dataSource = new MatTableDataSource<any>(this.Duplicity_Across);

    console.log(this.dataSource.paginator);


    // Set the paginator and sort for the MatTableDataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  openDrawer3(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'no-backdrop-dialog';

    this.dialog.open(MatDialog3Component, dialogConfig);
  }

  openDrawer(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '40vw';
    dialogConfig.panelClass = 'no-backdrop-dialog';

    this.dialog.open(MatModalFinalComponent, dialogConfig);
  }


  onClickList() {
    this.clickedList = true;
    this.clickedGrid = false;
  }

  onClickGrid() {
    this.clickedList = false;
    this.clickedGrid = true;
  }

  isFloat(number: any) {
    if (number !== Math.floor(number)) {
      return number.toFixed(3);
    }
    if (number == 1) {
      return "0.990"
    }
    else {
      return number
    }

  }

  onGridValSelect(data) {
    let gridData = []

    console.log("card selected data", data);
    for (const key in this.Duplicity_Across) {

      const element = this.Duplicity_Across[key];
      // console.log(element);
      if (element['Class Description'] === data) {
        gridData.push(element)
      }
    }
    console.log(gridData);


    this.router.navigate(['/gridView'], {
      state: {
        navigate: "duplicitAcross", gridData
      }
    })
  }

}
