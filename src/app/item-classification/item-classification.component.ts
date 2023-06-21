import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-classification',
  templateUrl: './item-classification.component.html',
  styleUrls: ['./item-classification.component.css']
})
export class ItemClassificationComponent implements OnInit {

  itemClassification

  dataSource: MatTableDataSource<any>;
  // Define the MatPaginator and MatSort
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: Router) {
    this.itemClassification = JSON.parse(this.route.getCurrentNavigation().extras.state['Item Classification'])
    console.log(this.itemClassification, "itemClassification")

    this.dataSource = new MatTableDataSource<any>(this.itemClassification);

    console.log(this.dataSource.paginator);


    // Set the paginator and sort for the MatTableDataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {

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

}
