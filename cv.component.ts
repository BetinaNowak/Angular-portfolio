import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private httpService: HttpClient) { }


  // JS object array as class property (NOT as a variable)
testData : string [];


checkStock = function(data){

 alert(data.Contact)
}


  ngOnInit () {
  this.httpService.get('./assets/data.json').subscribe(
    data => {
      this.testData = data as string [];
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
}

}
