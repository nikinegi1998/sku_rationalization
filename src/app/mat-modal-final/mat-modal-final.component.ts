import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog2Component } from '../mat-dialog2/mat-dialog2.component';
import { ApiService } from '../_Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-modal-final',
  templateUrl: './mat-modal-final.component.html',
  styleUrls: ['./mat-modal-final.component.css']
})
export class MatModalFinalComponent {

  dropdown: any

  classificationFlag = false
  colA = ''
  colB = ''
  constructor(private router: Router, private apiService: ApiService) { }


  getdropdown() {
    if (this.classificationFlag === true) {
      this.updateColClassification()
    }
    else {
      this.apiService.updateClassification({}).subscribe(res => {
        this.dropdown = res
        console.log(this.dropdown, "dropdown");
        this.classificationFlag = true
      })
    }
  }
  updateColClassification() {
    if (this.colA !== '' || this.colB !== '') {
      this.apiService.updateClassification({
        "selected_column1_reclassification": this.colA,
        "selected_column2_reclassification": this.colB
      }).subscribe(res => {
        console.log(res, "res====>");

        // this.router.navigateByUrl("/itemClassification", res)

      })
    }
  }
}
