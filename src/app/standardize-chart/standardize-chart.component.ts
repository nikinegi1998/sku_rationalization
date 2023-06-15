import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../_Services/api.service';

@Component({
  selector: 'app-standardize-chart',
  templateUrl: './standardize-chart.component.html',
  styleUrls: ['./standardize-chart.component.css']
})
export class StandardizeChartComponent implements OnInit {

  data: any;

  subscription: Subscription

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getChartData()

  }

  getChartData() {
    this.data = JSON.parse(localStorage.getItem("colummRes"));
    this.subscription = this.apiService.getColumnRes().subscribe({
      next: (res: any) => {
        console.log("OBSERVABLE", res);
        // this.data = res;
      }
    })
  }

  testClick(event: any) {
    console.log("Event", event.target.getAttribute('value'), event.target);
    let id = event.target.id
    id = id.split("-")
    console.log(id);

    let keyName = id[1]

    let value = event.target.getAttribute('value')

    this.data[keyName].Both[value] = event.target.textContent


    console.log(this.data[keyName].Both[value]);


    document.getElementById(event.target.id).style.color = "green";

    localStorage.setItem("colummRes", JSON.stringify(this.data))

  }

}
