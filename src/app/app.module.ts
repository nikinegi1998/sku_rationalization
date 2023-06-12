import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { SideNavComponent } from './side-nav/side-nav.component';
import { MatModal1Component } from './mat-modal1/mat-modal1.component';
import { MatDialog2Component } from './mat-dialog2/mat-dialog2.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StandardizeChartComponent } from './standardize-chart/standardize-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    SideNavComponent,
    MatModal1Component,
    MatDialog2Component,
    FooterComponent,
    HeaderComponent,
    StandardizeChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatRadioModule,
    MatChipsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
