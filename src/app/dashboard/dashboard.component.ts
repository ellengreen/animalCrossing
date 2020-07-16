import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from '../shared/current-date.service';
import { NookipediaService } from '../shared/nookipedia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public nookService: NookipediaService,
    public dateService: CurrentDateService
  ) { }

  ngOnInit() {
  }


}

