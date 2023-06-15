import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StandardizeChartComponent } from './standardize-chart/standardize-chart.component';
import { DuplicityItemB1Component } from './duplicity-item-b1/duplicity-item-b1.component';
import { DuplicityItemsB2Component } from './duplicity-items-b2/duplicity-items-b2.component';
import { DuplicityAcrossComponent } from './duplicity-across/duplicity-across.component';
import { ItemClassificationComponent } from './item-classification/item-classification.component';
import { FinalListComponent } from './final-list/final-list.component';

const routes: Routes = [
  {
    path: "",
    component: FileUploadComponent,
  },
  {
    path: "standardizeChart",
    component:StandardizeChartComponent
  },
  {
    path: "duplicitItemsB1",
    component:DuplicityItemB1Component
  },
  {
    path: "duplicitItemsB2",
    component:DuplicityItemsB2Component
  },
  {
    path: "duplicitAcross",
    component:DuplicityAcrossComponent
  },
  {
    path: "itemClassification",
    component:ItemClassificationComponent
  },
  {
    path: "finalList",
    component:FinalListComponent
  },
  {
    path: "**",
    component: FileUploadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
