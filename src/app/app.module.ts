import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RouterModule } from '@angular/router';
import { AddDvdComponent } from './add-dvd/add-dvd.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { DeleteDvdComponent } from './delete-dvd/delete-dvd.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { BorrowComponent } from './borrow/borrow.component';
import { ReturnItemComponent } from './return-item/return-item.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { SearchComponent } from './search/search.component';


//import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddBookComponent,
    AddDvdComponent,
    DeleteItemComponent,
    DeleteDvdComponent,
    DisplayItemsComponent,
    BorrowComponent,
    ReturnItemComponent,
    GenerateReportComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'add-book',component:AddBookComponent},
      {path:'add-dvd',component:AddDvdComponent},
      {path:'delete-item',component:DeleteItemComponent},
      {path:'display',component:DisplayItemsComponent},
      {path:'borrow',component:BorrowComponent},
      {path:'return-item',component:ReturnItemComponent},
      {path:'generate-item',component:GenerateReportComponent},
      {path:'search',component:SearchComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
