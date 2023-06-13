import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StandardizeChartComponent } from './standardize-chart/standardize-chart.component';
import { DuplicityItemB1Component } from './duplicity-item-b1/duplicity-item-b1.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
