import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http' //importing the http client to

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  Title:string;  //varibales used in the form, to be sent to backend
  sector:string;
  pubDate:string;
  isbn:number;
  publisher:string;
  currentReader:string;
  authors:string;
  noOfPages:number;

  constructor(private HttpClient : HttpClient) { } //injecting the httpclient module to constructor

  showResponse;

  add(){  //method to send the data to backend 
    let add = {

    Title:this.Title,
    sector:this.sector,
    pubDate:this.pubDate,
    isbn:this.isbn,
    publisher:this.publisher,
    currentReader:this.currentReader,
    authors:this.authors,
    noOfPages:this.noOfPages

    
    
    }

    

    this.HttpClient.post('http://localhost:9000/addbook',add).subscribe( //backend route to call the method
    response =>{
      console.log(response); //logging the http response
      let x = response; 
      this.showResponse=response;
      alert(x); //reponse shown as a alert box
    }
    
  )

}
  ngOnInit() {
  }

}
