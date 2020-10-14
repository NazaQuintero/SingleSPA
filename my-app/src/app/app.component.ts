import { Component, OnInit } from '@angular/core';
import { dataSaver } from 'shared';
//import { NgSharedService } from 'ng-shared';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  constructor(/*private sharedService : NgSharedService*/) {}

  ngOnInit(): void {
    let value = ((dataSaver.data as any).a ?? 0) + 1;
    (dataSaver.data as any).a = value;
    console.log("value", value);
  }


}


