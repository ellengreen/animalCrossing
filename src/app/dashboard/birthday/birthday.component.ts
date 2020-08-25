import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { BirthdayService } from 'src/app/shared/birthday.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor(
    private nookService: NookipediaService,
    private birthday: BirthdayService
  ) { }


  villagers: any;
  bdays = [];

  ngOnInit() {
    this.nookService.getVillagers().subscribe(data => {
      this.villagers = data;
      this.getBirthdays();
    });
  }

  getBirthdays(){
    this.bdays = this.birthday.getBirthdays(this.villagers);
    return this.bdays;
  }

}
