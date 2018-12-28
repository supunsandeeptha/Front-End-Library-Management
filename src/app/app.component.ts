import { Component } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  Title:string;
  sector:string;
  pubDate:string;
  borrowedDate:string;
  isbn:string;
  publisher:string;
  currentReader:string;
  authors:string;
  noOfPages:number;

  // id:string;
  // name:string;
  constructor(private HttpClient : HttpClient) { }

  ngOnInit() {
  }
add(){
  let p = {
    Title:this.Title,
    sector:this.sector,
    pubDate:this.pubDate,
    borrowedDate:this.borrowedDate,
    isbn:this.isbn,
    publisher:this.publisher,
    currentReader:this.currentReader,
    authors:this.authors,
    noOfPages:this.noOfPages
    // id:this.id,
    // name:this.name
  }
  this.HttpClient.post('http://localhost:9000/add',p).subscribe(
    response =>{
      console.log(response);
    }
  )
}
}        
 


