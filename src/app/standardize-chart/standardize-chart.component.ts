import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../_Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standardize-chart',
  templateUrl: './standardize-chart.component.html',
  styleUrls: ['./standardize-chart.component.css']
})
export class StandardizeChartComponent implements OnInit {

  data: any;

  subscription: Subscription
  STD_rule: any[] = []
  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.getChartData()

  }

  getChartData() {
    this.data = JSON.parse(localStorage.getItem("colummRes"));
    let vl: any = localStorage.getItem("colummAllDataRes")

    this.STD_rule = JSON.parse(vl).Final_Standardization_Chart.Standardization_Rule
    // console.log(vl, this.STD_rule, "STD rule");

    // this.apiService.getColumnRes().subscribe({
    //   next: (res: any) => {
    //     console.log("OBSERVABLE", res);
    //     // this.data = res;
    //     this.STD_rule = res.Final_Standardization_Chart.Standardization_Rule
    //     console.log(this.STD_rule, "STD rule");

    //   }
    // })
  }

  testClick(event: any) {



    // console.log(this.data[keyName].Both[value]);

    if(event.target.checked == true){
      console.log("Event", event.target.getAttribute('value'), event.target);
      console.log(event.target,"CJECJKEF");
      let id = event.target.id
    id = id.split("-")
    console.log(id);

    let keyName = id[1]

    let value = event.target.getAttribute('value')
    let name = event.target.getAttribute('name')


    this.data[keyName].Both[name] = value

    console.log(this.data[keyName]);


    // document.getElementById(event.target.id).style.color = "green";

    localStorage.setItem("colummRes", JSON.stringify(this.data))

    }




  }

  changeSTDrule() {
    let data = JSON.parse(localStorage.getItem("colummRes"))

    // console.log(data, "data");

    let body = {
      "STD_Rules": [
        "Item Variant",
        "Quantity",
        "UOM",
        "Pack Type",
        "Pack Number",
        "Pack Size"
      ],
      "subcat_UOM_dict_Both": {
        "Both": {
          "Fluid Once": data.subcat_UOM_dict_Both.Both["Fluid Once"],
          "Ounce": data.subcat_UOM_dict_Both.Both.Ounce,
          "Liter": data.subcat_UOM_dict_Both.Both.Liter,
          "Mili Liter": data.subcat_UOM_dict_Both.Both["Mili Liter"],
          "Gram": data.subcat_UOM_dict_Both.Both.Gram
        }
      },
      "subcat_PackType_dict_Both": {
        "Both": {
          "Bottle": data.subcat_PackType_dict_Both.Both.Bottle,
          "Bag": data.subcat_PackType_dict_Both.Both.Bag,
          "Can": data.subcat_PackType_dict_Both.Both.Can,
          "Jar": data.subcat_PackType_dict_Both.Both.Jar,
          "Pouch": data.subcat_PackType_dict_Both.Both.Pouch
        }
      },
      "subcat_PackSize_dict_Both": {
        "Both": {
          "Pack": data.subcat_PackSize_dict_Both.Both.Pack,
          "Carton": data.subcat_PackSize_dict_Both.Both.Carton,
          "MultiPack": data.subcat_PackSize_dict_Both.Both.MultiPack,
          "VarietyPack": data.subcat_PackSize_dict_Both.Both.VarietyPack,
          "FamilySize": data.subcat_PackSize_dict_Both.Both.FamilySize,
          "SingleServe": data.subcat_PackSize_dict_Both.Both.SingleServe
        }
      }
    }
    // console.log(body, "body val");

    this.apiService.updateChartDetail(body).subscribe(
      res => {
        console.log(res, "update standardization chart rule");

        this.router.navigateByUrl('/duplicitItemsB1')
      }
    )
  }
}
