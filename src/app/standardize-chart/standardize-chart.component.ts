import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../_Services/api.service';

@Component({
  selector: 'app-standardize-chart',
  templateUrl: './standardize-chart.component.html',
  styleUrls: ['./standardize-chart.component.css']
})
export class StandardizeChartComponent implements OnInit {

  data:any;

subscription:Subscription

constructor(private apiService:ApiService){
  this.data = JSON.parse(localStorage.getItem("colummRes"));
  this.subscription = this.apiService.getColumnRes().subscribe({
    next: (res:any) => {
      console.log("OBSERVABLE",res);
      // this.data = res;
    }
  })
}

ngOnInit(): void {
    console.log(this.data,
      this.data.subcat_UOM_dict_DT.DT["Fluid Once"]);

}

}
