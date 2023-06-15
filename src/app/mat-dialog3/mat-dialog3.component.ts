import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-dialog3',
  templateUrl: './mat-dialog3.component.html',
  styleUrls: ['./mat-dialog3.component.css']
})
export class MatDialog3Component {

  clickedOnYes:boolean = false;

  constructor(private router:Router) {}

  onClickYes(){
    this.clickedOnYes = true;
  }
  onClickSkip(){

  }

  onLeftClick(){
    this.clickedOnYes = false;
  }


}
