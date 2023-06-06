import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnSectionComponent } from './column-section/column-section.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {
    path: "",
    component: FileUploadComponent,
  },
  {
    path: "columnSection",
    component:ColumnSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
