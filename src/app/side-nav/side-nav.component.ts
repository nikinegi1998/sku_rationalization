import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements  OnInit {
  @ViewChild('scroller1') scroller: ElementRef;


  currentRoute: string;

  dashboard: boolean = false;
  standardizeChart: boolean = false;
  duplicitItemsB1:boolean = false;
  duplicitItemsB2:boolean = false;
  duplicitAcross:boolean = false;
  itemClassification:boolean = false;
  finalList:boolean = false;

  constructor(private router: Router){
    this.currentRoute = "";
    this.getEndPoint()
  }

  ngOnInit(): void {
    const div = this.scroller.nativeElement as HTMLDivElement;
    div.addEventListener('mouseover', e => {
      console.log('Mouse Over');
    });
    div.addEventListener('mouseout', e => {
      console.log('Mouse Out');
    });
  }

  getEndPoint() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;
        console.log(this.currentRoute);
        if (this.currentRoute === "/dashboard" || this.currentRoute === "/" || this.currentRoute === "/claimAdjudication") {
          this.dashboard = true;
          this.standardizeChart = false;
          this.duplicitItemsB1 = false;
          this.duplicitItemsB2 = false;
          this.duplicitAcross = false;
          this.itemClassification = false;
          this.finalList = false;

        }
        if (this.currentRoute === "/standardizeChart") {
          this.standardizeChart = true;
          this.dashboard = false;
          this.duplicitItemsB1 = false;
          this.duplicitItemsB2 = false;
          this.duplicitAcross = false;
          this.itemClassification = false;
          this.finalList = false;

        }
        if (this.currentRoute === "/duplicitItemsB1") {
          this.duplicitItemsB1 = true;
          this.standardizeChart = false;
          this.dashboard = false;
          this.duplicitItemsB2 = false;
          this.duplicitAcross = false;
          this.itemClassification = false;
          this.finalList = false;

        }
        if (this.currentRoute === "/duplicitItemsB2") {
          this.duplicitItemsB2 = true;
          this.duplicitItemsB1 = false;
          this.standardizeChart = false;
          this.dashboard = false;
          this.duplicitAcross = false;
          this.itemClassification = false;
          this.finalList = false;

        }
        if (this.currentRoute === "/duplicitAcross") {
          this.duplicitAcross = true;
          this.duplicitItemsB2 = false;
          this.duplicitItemsB1 = false;
          this.standardizeChart = false;
          this.dashboard = false;
          this.itemClassification = false;
          this.finalList = false;


        }
        if (this.currentRoute === "/itemClassification") {
          this.itemClassification = true;
          this.duplicitAcross = false;
          this.duplicitItemsB2 = false;
          this.duplicitItemsB1 = false;
          this.standardizeChart = false;
          this.dashboard = false;
          this.finalList = false;

        }
        if (this.currentRoute === "/finalList") {
          this.finalList = true;
          this.itemClassification = false;
          this.duplicitAcross = false;
          this.duplicitItemsB2 = false;
          this.duplicitItemsB1 = false;
          this.standardizeChart = false;
          this.dashboard = false;

        }
      }
    });
  }

  testClick(event:any){
    console.log("Tested",event.selectedIndex)
    if(event.selectedIndex == 0){
      this.router.navigateByUrl("/");
    }
    if(event.selectedIndex == 1){
      this.router.navigateByUrl("/standardizeChart");
    }
    if(event.selectedIndex == 2){
      this.router.navigateByUrl("/duplicitItemsB1");
    }
    if(event.selectedIndex == 3){
      this.router.navigateByUrl("/duplicitItemsB2");
    }
    if(event.selectedIndex == 4){
      this.router.navigateByUrl("/duplicitAcross");
    }
    if(event.selectedIndex == 5){
      this.router.navigateByUrl("/itemClassification");
    }
    if(event.selectedIndex == 6){
      this.router.navigateByUrl("/finalList");
    }
  }

}
