import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';

@Component({
  selector: 'app-current-critters',
  templateUrl: './current-critters.component.html',
  styleUrls: ['./current-critters.component.scss']
})
export class CurrentCrittersComponent implements OnInit {
  fish: any;
  bugs: any;
  hour = this.ds.thisHour;
  month = this.ds.currentMonth;
  availableFish = [];
  availableBugs = [];
  constructor(private ns: NookipediaService, private ds: CurrentDateService) { }

  ngOnInit(){
    this.ns.getBugs().subscribe(data=> {
      this.bugs = data;
      this.catchableBugs();
    })
    
    this.ns.getFish().subscribe(data => {
      this.fish = data;
      this.catchableFish();
    })
  }

  catchableFish(){
    Object.keys(this.fish).forEach(key => {
      if (this.fish[key]['availability']['month-array-northern'].includes(this.month) 
      && (this.fish[key]['availability']['time-array'].includes(this.hour))){
        this.availableFish.push(this.fish[key]);
      }
    })
  }

  catchableBugs(){
  Object.keys(this.bugs).forEach(key=> {
    if (this.bugs[key]['availability']['month-array-northern'].includes(this.month)
    && (this.bugs[key]['availability']['time-array'].includes(this.hour))){
      this.availableBugs.push(this.bugs[key]);
    }
  })    
  }

}

