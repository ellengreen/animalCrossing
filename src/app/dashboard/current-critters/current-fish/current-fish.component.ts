import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { CurrentDateService } from 'src/app/shared/current-date.service';


@Component({
  selector: 'app-current-fish',
  templateUrl: './current-fish.component.html',
  styleUrls: ['./current-fish.component.scss']
})
export class CurrentFishComponent implements OnInit {

  fishList: any;
  thisMonth = [];
  allYear = [];
  allDay = [];
  thisHour = [];
  leaving = [];
  new = [];

  constructor(
    private nookService: NookipediaService, 
    private dateService: CurrentDateService,
    private httpClient: HttpClient, 
    private datePipe: DatePipe, 
    private kvPipe: KeyValuePipe
  ) { }

  todayTime = this.dateService.thisHour;
  ngOnInit() {
    this.httpClient.get("assets/fish.json").subscribe(data => {
      this.fishList = data;
      this.kvPipe.transform(this.fishList);
      this.catchablefish()
    })
  }

    
    //get month number from current-date service
    currentMonth = this.dateService.currentMonth;

    //updates currentfish to fish ONLY avaiable this current month
    catchablefish(){
      Object.keys(this.fishList).forEach(key => {
        //if available this month & not always
        if (this.fishList[key]['months']['northern']['array'].includes(this.currentMonth)){ 
          // && this.fishList[key]['months']['northern']['text'] !== 'Year Round')
          this.thisMonth.push(this.fishList[key])
        }
        //if available this month & this hour
        if (this.fishList[key]['times']['array'].includes(this.todayTime) && (this.fishList[key]['months']['northern']['array'].includes(this.currentMonth))) { 
          this.thisHour.push(this.fishList[key]);
        }
        //if available all day
        if (this.fishList[key]['times']['text'] == 'All day'){ 
          this.allDay.push(this.fishList[key])
        }
        //if available all year
        if (this.fishList[key]['months']['northern']['text'] == 'Year Round'){ 
          this.allYear.push(this.fishList[key])
        }        

        //if new this month
        if (this.fishList[key]['months']['northern']['array'][0] == this.currentMonth){
          this.new.push(this.fishList[key]);
        }
        //if leaving next month
        if (this.fishList[key]['months']['northern']['array'].includes(this.currentMonth +1) == false){
          this.leaving.push(this.fishList[key])
        }
      });
    }
    
    
    hourMethod(id){
      return this.thisHour.some((item) => item.id == id);
    }

    newMethod(id){
      return this.new.some((item) => item.id == id);
    }

    leavingMethod(id){
      return this.leaving.some((item) => item.id == id);
    }
}











