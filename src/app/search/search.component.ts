import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  itemType:string;
  isbn:number;
  showResponse;

  constructor(private HttpClient:HttpClient) { }

  array;


  search(){
    let search = {

    
      itemType:this.itemType,
      isbn:this.isbn

    
    
    }
    this.HttpClient.post('http://localhost:9000/searchItem',search).subscribe(
    response =>{
      let x = response;
      console.log(response);
      this.showResponse = response;
      alert(x);
      
    }
  )

}

  ngOnInit() {
  }

}
