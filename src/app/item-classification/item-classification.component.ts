import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-classification',
  templateUrl: './item-classification.component.html',
  styleUrls: ['./item-classification.component.css']
})
export class ItemClassificationComponent {

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe(res => {
      console.log(res);
    })
  }
}
