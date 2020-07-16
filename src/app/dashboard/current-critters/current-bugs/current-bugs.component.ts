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
  bugs: any;
  thisMonth = [];
  thisHour = [];
  currentMonth = this.dateService.currentMonth;
  hour = this.dateService.thisHour;


  constructor(
    private nookService: NookipediaService,
    private dateService: CurrentDateService,
    private httpClient: HttpClient,
    private kvPipe: KeyValuePipe) { }

  ngOnInit() {
    this.nookService.getBugs().subscribe(data => {
      this.bugs = data;
      this.catchableBugs()
    })
  }

  catchableBugs(){
    Object.keys(this.bugs).forEach(key => {
      if (this.bugs[key].months.northern.array.includes(this.currentMonth)){ 
        this.thisMonth.push(this.bugs[key])
      };
      if (this.bugs[key].times.array.includes(this.hour) 
      && (this.bugs[key].months.northern.array.includes(this.currentMonth))) { 
        this.thisHour.push(this.bugs[key])
      };     
    });
  }
  
  hourMethod(id){
    return this.thisHour.some((item) => item.id === id);
  }
}
