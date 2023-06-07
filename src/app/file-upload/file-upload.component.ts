import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_Services/api.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild("inputFileId1") inputFile1: ElementRef
  @ViewChild("inputFileId2") inputFile2: ElementRef

  success1:boolean = false;
  success2:boolean = false;


  ngOnInit(): void {

  }

  constructor(private apiService: ApiService) { }



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

    // const file = event.target.files.item(0);

    // if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     const data = new Uint8Array(e.target!.result as ArrayBuffer);
    //     const workbook = XLSX.read(data, { type: 'array' });
    //     const sheetName = workbook.SheetNames[0];
    //     const worksheet = workbook.Sheets[sheetName];
    //     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    //     // Process the JSON data from the XLSX file
    //     console.log('XLSX data:', jsonData);
    //   };
    //   reader.readAsArrayBuffer(file);
    // } else {
    //   console.log('Please select an XLSX file.');
    // }

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

    // const file = event.target.files.item(0);

    // if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     const data = new Uint8Array(e.target!.result as ArrayBuffer);
    //     const workbook = XLSX.read(data, { type: 'array' });
    //     const sheetName = workbook.SheetNames[0];
    //     const worksheet = workbook.Sheets[sheetName];
    //     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    //     // Process the JSON data from the XLSX file
    //     console.log('XLSX data:', jsonData);
    //   };
    //   reader.readAsArrayBuffer(file);
    // } else {
    //   console.log('Please select an XLSX file.');
    // }

  }
}
