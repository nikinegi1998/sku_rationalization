import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent {
  dataSource: MatTableDataSource<any>;

  // Define the MatPaginator and MatSort
  @ViewChild("paginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  gridData
  navigateUrl
  skuNameOrDesc = false

  constructor(private router: Router) {
    let data = router.getCurrentNavigation().extras.state
    this.gridData = data['gridData']
    this.navigateUrl = data['navigate']
    console.log(this.gridData, this.navigateUrl);

    if (this.gridData[0]['SKU_NAME']) {
      this.skuNameOrDesc = true
    }
    this.dataSource = new MatTableDataSource<any>(this.gridData);

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


  navigateBack() {
    this.router.navigateByUrl('/' + this.navigateUrl)
  }
}
