import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../_Services/api.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MatModal1Component } from '../mat-modal1/mat-modal1.component';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @ViewChild("inputFileId1") inputFile1: ElementRef
  @ViewChild("inputFileId2") inputFile2: ElementRef

  success1:boolean = false;
  success2:boolean = false;

  constructor(private apiService: ApiService, private dialog: MatDialog) {
   }

  ngOnInit(): void {

  }

  openDrawer(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '40vw';
    dialogConfig.panelClass = 'no-backdrop-dialog';

    this.dialog.open(MatModal1Component, dialogConfig);
  }




  onClickIcon1() {
    this.inputFile1?.nativeElement.click();
  }
  onClickIcon2() {
    this.inputFile2?.nativeElement.click();
  }

  handleEvent1(event: any) {

    const formData = new FormData();
    const fileField = this.inputFile1.nativeElement

    formData.append("filename", fileField.files[0]);

    this.apiService.sendFilesfirstPage(formData).subscribe({
      next: (data: any) => {
        console.log(data);
        this.success1 = true;
      },
      error: (error: any) => {
        console.log(error);

      }
    })
  }

  handleEvent2(event: any) {

    const formData = new FormData();
    const fileField = this.inputFile2.nativeElement

    formData.append("filename", fileField.files[0]);

    this.apiService.sendFilesfirstPage(formData).subscribe({
      next: (data: any) => {
        console.log(data);
        this.success2 = true;
      }
    })
  }




}
