import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http' //importing the http client to

@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.css']
})
export class AddDvdComponent implements OnInit {

  title:string;
  sector:string;
  pubDate:string;
  isbn:number;
  publisher:string;
  availableLanguages:string;
  availableSubstitles:string;
  producer:string;
  actors:string;

  showResponse;

  constructor(private HttpClient : HttpClient) { }

  
  adddvd(){
    let add = {

    title:this.title,
    sector:this.sector,
    pubDate:this.pubDate,
    isbn:this.isbn,
    publisher:this.publisher,
    availableLanguages:this.availableLanguages,
    availableSubstitles:this.availableSubstitles,
    producer:this.producer,
    actors:this.actors

    
    
    }
    this.HttpClient.post('http://localhost:9000/adddvd',add).subscribe(
    response =>{
      console.log(response);
     let x = response;
     this.showResponse = response;
     alert(x);

    }
  )

}

  ngOnInit() {
  }

}
