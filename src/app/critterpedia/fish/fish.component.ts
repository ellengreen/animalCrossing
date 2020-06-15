import { Component, OnInit } from '@angular/core';
import { NookipediaService } from '../../shared/nookipedia.service'; 
import { KeyValue, KeyValuePipe } from '@angular/common';
import { CurrentDateService } from 'src/app/shared/current-date.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  fish:any;
  selectedFish: any;
  f: any;
  fishList: any;
  allFish: any;
  
  constructor(private fishService: NookipediaService, private keyValuePipe: KeyValuePipe, private dateService: CurrentDateService) { }

  currentMonth = this.dateService.currentMonth;
  thisMonth = [];

  //use service to get data from fish JSON 
  ngOnInit() {
    this.fishService.getFish().subscribe(data=> {
      this.fishList = data;
      this.allFish = data;
      this.keyValuePipe.transform(this.fishList);
      this.catchableFish();
    })
  }

  catchableFish(){
    Object.keys(this.fishList).forEach(key => {
      //if available this month
      if (this.fishList[key]['months']['northern']['array'].includes(this.currentMonth)){ 
        this.thisMonth.push(this.fishList[key])
      }
      console.log(this.thisMonth)
    });
  }

  onSelect(f){
    this.selectedFish = f;
    console.log(this.selectedFish)
  }

  onCurrent(){
    this.fishList=this.thisMonth;
  };

  onAll(){
    this.fishList=this.allFish;
  }
}
