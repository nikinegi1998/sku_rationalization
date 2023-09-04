import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplicity-item-b1',
  templateUrl: './duplicity-item-b1.component.html',
  styleUrls: ['./duplicity-item-b1.component.css']
})
export class DuplicityItemB1Component implements OnInit {
  // Define the data source and columns for the table
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['Class Description', 'SKU Description', 'Similarity', 'Survived'];

  // Define the MatPaginator and MatSort
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clickedList: boolean = true;
  clickedGrid: boolean = false;

  duplicitBannerData: any[] = [];
  duplicitWithBrand1: any[] = [];



  p: any;

  constructor(private router: Router) {
    this.getDuplicitBannerData()

  }

  onClickList() {
    this.clickedList = true;
    this.clickedGrid = false;
  }

  onClickGrid() {
    this.clickedList = false;
    this.clickedGrid = true;
  }



  ngOnInit(): void {
  }

  getDuplicitBannerData() {
    let data = JSON.parse(localStorage.getItem("colummAllDataRes"));
    this.duplicitBannerData = JSON.parse(data.Items_Duplicity_within_banner1).filter((data: any) => { return data["Class Description"] != "" })
    console.log("duplicitBannerData", data);


    this.duplicitWithBrand1 = JSON.parse(data.Duplicity_Within_Brand1)
    console.log("duplicitWithBrand1", this.duplicitWithBrand1);

    this.dataSource = new MatTableDataSource<any>(this.duplicitWithBrand1);

    console.log(this.dataSource.paginator);


    // Set the paginator and sort for the MatTableDataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  updateDropdown(event: any, id: any) {
    console.log(event.target.textContent);
    for (let i of this.dataSource.data) {
      if (i["list1_primary_key"] == id) {
        i['Survived'] = (event.target.textContent == 'Yes' ? 'Y' : 'N');
        console.log(i['Survived'])
      }
    }


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
    for (const key in this.duplicitWithBrand1) {

      const element = this.duplicitWithBrand1[key];
      // console.log(element);
      if (element['Class Description'] === data) {
        gridData.push(element)
      }
    }
    console.log(gridData);


    this.router.navigate(['/gridView'], {
      state: {
        navigate: "duplicitItemsB1", gridData
      }
    })
  }


}
