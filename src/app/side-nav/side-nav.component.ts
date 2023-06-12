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
        }
        if (this.currentRoute === "/standardizeChart") {
          this.standardizeChart = true;
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
  }

}
