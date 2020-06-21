import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    public nookService: NookipediaService,
    public dateService: CurrentDateService
  ) { }

  image: string;

  eventsList: any;
  currentMonth = this.dateService.currentMonth;
  currentDay = this.dateService.currentDay;

  ngOnInit() {
    this.nookService.getEvents().subscribe(data=> {
      this.eventsList = data;
    });
    this.eventImage();
  }

  eventImage(){
    if (this.currentMonth == 1){
      this.image = 'assets/images/pave.png'
    }
    // if (this.currentMonth = 2){
    //   this.image = 
    // }
    if (this.currentMonth == 3){
      this.image = 'assets/images/vlad.png'
    }
    if (this.currentMonth == 4){
      this.image = 'assets/images/zipper.png'
    }
    if (this.currentMonth == 5){
      this.image = '/assets/images/leif.png'
    }
    if (this.currentMonth == 6){
      this.image = '/assets/images/reese.png'
    }
    // if (this.currentMonth = 7){
    //   this.image = 
    // }
    // if (this.currentMonth = 8){
    //   this.image = 
    // }
    // if (this.currentMonth = 9){
    //   this.image = 
    // }
    if (this.currentMonth == 10){
      this.image = '/assets/images/jack.png'
    }
    if (this.currentMonth == 11){
      this.image = '/assets/images/franklin.png'
    }
    if (this.currentMonth == 12){
      this.image = '/assets/images/jingle.png';
    }
  }

}


  
