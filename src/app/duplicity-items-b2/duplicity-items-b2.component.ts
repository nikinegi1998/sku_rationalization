import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-duplicity-items-b2',
  templateUrl: './duplicity-items-b2.component.html',
  styleUrls: ['./duplicity-items-b2.component.css']
})
export class DuplicityItemsB2Component {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['Class Description', 'SKU_NAME', 'Similarity', 'Survived'];

  // Define the MatPaginator and MatSort
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clickedList:boolean = true;
  clickedGrid:boolean = false;

  duplicitBannerData:any[] = [];
  duplicitWithBrand2:any[] = [];



  p:any;

  constructor(){
    this.getDuplicitBannerData()

  }

  onClickList(){
    this.clickedList = true;
    this.clickedGrid = false;
  }

  onClickGrid(){
    this.clickedList = false;
    this.clickedGrid = true;
  }



  ngOnInit(): void {
  }

  getDuplicitBannerData(){
    let data = JSON.parse(localStorage.getItem("colummAllDataRes"));
    this.duplicitBannerData = JSON.parse(data.Items_Duplicity_within_banner2)
    console.log(this.duplicitBannerData);

    this.duplicitWithBrand2 = JSON.parse(data.Duplicity_Within_Brand2)
    console.log(this.duplicitWithBrand2);

    this.dataSource = new MatTableDataSource<any>(this.duplicitWithBrand2);

    console.log(this.dataSource.paginator);


    // Set the paginator and sort for the MatTableDataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  updateDropdown(event:any, id:any){
    console.log(event.target.textContent);
    for(let i of this.dataSource.data){
      if(i["list2_primary_key"]  == id){
        i['Survived'] = (event.target.textContent == 'Yes'?'Y':'N');
        console.log(i['Survived'])
      }
    }


  }

  isFloat(number:any){
    if(number !== Math.floor(number) ){
      return number.toFixed(3);
    }
    if(number == 1){
      return "0.990"
    }
    else{
      return number
    }

  }
}
