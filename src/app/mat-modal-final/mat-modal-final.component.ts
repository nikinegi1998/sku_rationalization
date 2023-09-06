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
  closedialgBox = false
  colA = ''
  colB = ''
  filename1: string;
  filename2: string;
  constructor(private dialog: MatDialog, private router: Router, private apiService: ApiService) { }


  getdropdown() {

    this.filename1 = localStorage.getItem('uploadfilename1')
    this.filename2 = localStorage.getItem('uploadfilename2')
    this.apiService.updateClassification({
      "filename1": this.filename1,
      "filename2": this.filename2
    }).subscribe(res => {
      this.dropdown = res
      console.log(this.dropdown, "dropdown");
      this.classificationFlag = true
      this.closedialgBox = true
    })
  }
  updateColClassification() {
    console.log(this.colA, this.colB, "col value");

    if (this.colA !== '' || this.colB !== '') {
      let body = {
        "selected_column1_reclassification": this.colA,
        "selected_column2_reclassification": this.colB,
        "filename1": this.filename1,
        "filename2": this.filename2,
        "Selected Columns": JSON.parse(localStorage.getItem("original_selected_col"))
      }
      console.log(body, "body");
      
      this.apiService.updateClassification(body).subscribe(res => {
        console.log(res, "res====>");

        this.router.navigate(["/itemClassification"], { state: res })
        //  { queryParams: { classifications: res } })

      })
    }
  }
}
