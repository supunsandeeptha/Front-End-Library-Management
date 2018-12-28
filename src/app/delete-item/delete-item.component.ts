import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http' //importing the http client to

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

 
  bookIsbn:number;
  showResponse;

  constructor(private HttpClient : HttpClient) { }


  deleteBook(){
    let del = {

    
    bookIsbn:this.bookIsbn

    
    
    }
    this.HttpClient.post('http://localhost:9000/deleteBook',del).subscribe(
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
