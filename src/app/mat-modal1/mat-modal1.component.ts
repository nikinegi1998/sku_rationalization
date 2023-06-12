import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog2Component } from '../mat-dialog2/mat-dialog2.component';

@Component({
  selector: 'app-mat-modal1',
  templateUrl: './mat-modal1.component.html',
  styleUrls: ['./mat-modal1.component.css']
})
export class MatModal1Component {


  constructor(private dialog:MatDialog) {}

  openDrawer2(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.panelClass = 'no-backdrop-dialog';

    this.dialog.open(MatDialog2Component, dialogConfig);
  }
}
