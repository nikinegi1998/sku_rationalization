import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog3Component } from '../mat-dialog3/mat-dialog3.component';

@Component({
  selector: 'app-duplicity-across',
  templateUrl: './duplicity-across.component.html',
  styleUrls: ['./duplicity-across.component.css']
})
export class DuplicityAcrossComponent {

  constructor(private dialog:MatDialog) {}



  openDrawer3(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'no-backdrop-dialog';

    this.dialog.open(MatDialog3Component, dialogConfig);
  }
}
