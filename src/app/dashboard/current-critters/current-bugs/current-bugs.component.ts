import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { CurrentDateService } from 'src/app/shared/current-date.service';

@Component({
  selector: 'app-current-bugs',
  templateUrl: './current-bugs.component.html',
  styleUrls: ['./current-bugs.component.scss']
})
export class CurrentBugsComponent implements OnInit {
  bugsList: any;
  thisMonth = [];
  alwaysBugs = [];
  bugs: any;
  thisHour = [];
  new = [];
  leaving = [];


  constructor(
    private nookService: NookipediaService, 
    private dateService: CurrentDateService,
    private httpClient: HttpClient, 
    private datePipe: DatePipe, 
    private kvPipe: KeyValuePipe) { }

  //sets bugsList as an array of key value pairs from bugs JSON
  //catchableBugs() sets currentBugs as array of whatever bugs are avaiable this month
  ngOnInit() {
    this.httpClient.get("assets/bugs.json").subscribe(data => {
      this.bugsList = data;
      this.kvPipe.transform(this.bugsList);
      this.catchableBugs()
    })
  }

  //get month number from current-date service
  currentMonth = this.dateService.currentMonth;

  todayTime = this.dateService.todayDate;

  //updates currentBugs to bugs ONLY avaiable this current month
  catchableBugs(){
    Object.keys(this.bugsList).forEach(key => {
      //if available this month
      if (this.bugsList[key]['months']['northern']['array'].includes(this.currentMonth)){ 
        this.thisMonth.push(this.bugsList[key])
      };
      //if available this month & this hour
      if (this.bugsList[key]['times']['array'].includes(this.todayTime) && (this.bugsList[key]['months']['northern']['array'].includes(this.currentMonth))) { 
        this.thisHour.push(this.bugsList[key])
      };     
      //if available all the time
      if (this.bugsList[key]['months']['northern']['text'] == 'Year Round'){ 
        this.alwaysBugs.push(this.bugsList[key])
      }
      //if new this month
      if (this.bugsList[key]['months']['northern']['array'][0] == this.currentMonth){
        this.new.push(this.bugsList[key]);
      }
      //if leaving next month
      if (this.bugsList[key]['months']['northern']['array'].includes(this.currentMonth +1) == false){
        this.leaving.push(this.bugsList[key])
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

