import { Component, OnInit } from '@angular/core';
import { dataSaver } from 'shared';
//import { NgSharedService } from 'ng-shared';

@Component({
  selector: 'app-naza',
  templateUrl: './naza.component.html',
  styleUrls: ['./naza.component.scss']
})
export class NazaComponent implements OnInit {

  constructor(/*private sharedService: NgSharedService*/) { }

  ngOnInit(): void {
    let value = ((dataSaver.data as any).a ?? 0) + 1;
    (dataSaver.data as any).a = value;
    console.log("valueElement", value);
  }

}
