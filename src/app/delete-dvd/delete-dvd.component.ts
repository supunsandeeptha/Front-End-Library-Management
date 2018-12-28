import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-delete-dvd',
  templateUrl: './delete-dvd.component.html',
  styleUrls: ['./delete-dvd.component.css']
})
export class DeleteDvdComponent implements OnInit {

  dvdIsbn:number;
  showResponse;

  constructor(private HttpClient : HttpClient) { }

  deleteDvd(){
    let del = {

    
      dvdIsbn:this.dvdIsbn

    
    
    }
    this.HttpClient.post('http://localhost:9000/deleteDvd',del).subscribe(
    response =>{
      console.log(response);
      let x = response;
      this.showResponse=response;
      alert(x);

    }
  )

}

  ngOnInit() {
  }

}
