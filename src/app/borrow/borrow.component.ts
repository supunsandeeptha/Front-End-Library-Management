import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'; //importing the http client to


@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
  
  isbn:number;
  itemType:string;
  borrowPerson:string;
  borrowDate:string;
  showResponse;



  constructor(private HttpClient : HttpClient) { }

  borrowItem(){
    let borrow = {

    isbn:this.isbn,
    itemType:this.itemType,
    borrowPerson:this.borrowPerson,
    borrowDate:this.borrowDate


    
    }
    this.HttpClient.post('http://localhost:9000/borrowItem',borrow).subscribe(
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
