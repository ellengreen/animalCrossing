import { Component, OnInit } from '@angular/core';
import { NookipediaService } from '../shared/nookipedia.service';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.scss']
})
export class VillagersComponent implements OnInit {
  villagers: any;
  selectedVillager: any;
  v: any;
  constructor(private nookSerivce: NookipediaService) { }

  ngOnInit(): void {
    this.nookSerivce.getVillagers().subscribe(data=> {
      this.villagers = data;
      console.log(this.villagers)
    })
  }

  onSelect(v){
    this.selectedVillager = v;
    console.log(this.selectedVillager)
  }
}



