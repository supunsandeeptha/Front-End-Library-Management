import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'; //importing the http client to

@Component({
  selector: 'app-return-item',
  templateUrl: './return-item.component.html',
  styleUrls: ['./return-item.component.css']
})
export class ReturnItemComponent implements OnInit {

  isbn:string;
  itemType:string;
  returnDate:string;
  showResponse;


  constructor(private HttpClient : HttpClient) { }

  borrowItem(){
    let p = {

    isbn:this.isbn,
    itemType:this.itemType,
    returnDate:this.returnDate


    
    }
    this.HttpClient.post('http://localhost:9000/returnItem',p).subscribe(
    response =>{
      console.log(response);
      let x = response
      this.showResponse = response;
      alert(x);
    }
  )

}

  ngOnInit() {
  }

}
