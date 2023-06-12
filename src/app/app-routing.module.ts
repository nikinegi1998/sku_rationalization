import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StandardizeChartComponent } from './standardize-chart/standardize-chart.component';

const routes: Routes = [
  {
    path: "",
    component: FileUploadComponent,
  },
  {
    path: "standardizeChart",
    component:StandardizeChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
