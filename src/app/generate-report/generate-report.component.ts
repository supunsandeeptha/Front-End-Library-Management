import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  itemType:string;
  array;

  constructor(private HttpClient:HttpClient) { }

  generate(){
    let gen = {

    
      itemType:this.itemType

    
    
    }
    this.HttpClient.post('http://localhost:9000/generateReport',gen).subscribe(
    response =>{
      console.log(response);
      this.array=response;
    }
  )

}

  ngOnInit() {
  }

}
