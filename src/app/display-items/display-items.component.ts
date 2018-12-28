import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http' //importing the http client to

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {

  itemType:string;

  constructor(private HttpClient : HttpClient) { }

  array;

  display(){
    let dis = {

    
      itemType:this.itemType

    
    
    }
    this.HttpClient.post('http://localhost:9000/displayItem',dis).subscribe(
    response =>{
      console.log(response);
      this.array=response;
    }
  )

}

  ngOnInit() {
  }

}
