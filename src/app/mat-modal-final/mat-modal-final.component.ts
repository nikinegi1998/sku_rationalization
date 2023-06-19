import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog2Component } from '../mat-dialog2/mat-dialog2.component';

@Component({
  selector: 'app-mat-modal-final',
  templateUrl: './mat-modal-final.component.html',
  styleUrls: ['./mat-modal-final.component.css']
})
export class MatModalFinalComponent {

  constructor(private dialog:MatDialog) {}

}
