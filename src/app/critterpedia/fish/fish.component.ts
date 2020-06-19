import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { KeyValuePipe } from '@angular/common';
import { CurrentCritterService } from 'src/app/shared/current-critter.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  constructor(public ns: NookipediaService, public ds: CurrentDateService, public kv:KeyValuePipe, private ccs: CurrentCritterService) { }

  fish: any;
  critterList: any;
  selectedFish: any;
  currentMonth=this.ds.currentMonth;
  time=this.ds.todayTime;
  thisHour=[];
  new = [];
  leaving = [];
  thisMonth=[];

  ngOnInit(){
    this.ns.getFish().subscribe(data=> {
      this.fish = data;
      this.catchablefish();
      console.log(this.fish)
    })
  }


  onSelect(f:any){
    this.selectedFish = f;
  }

  showAll(){
    this.critterList=this.fish;
  }
  
  showCurrent(){
    this.critterList=this.thisMonth;
  }

  showMine(){
    this.critterList=this.myfishCP;
  }

  catchablefish(){
    this.kv.transform(this.fish);
    Object.keys(this.fish).forEach(key => {
      if (this.fish[key]['months']['northern']['array'].includes(this.currentMonth)){ 
        this.thisMonth.push(this.fish[key])
      }
      if (this.fish[key]['times']['array'].includes(this.time) && (this.fish[key]['months']['northern']['array'].includes(this.currentMonth))) { 
        this.thisHour.push(this.fish[key])
      };     
      if (this.fish[key]['months']['northern']['array'][0] == this.currentMonth){
        this.new.push(this.fish[key]);
      }
      if (this.fish[key]['months']['northern']['array'].includes(this.currentMonth +1) == false){
        this.leaving.push(this.fish[key])
      }
    });
  }
  
  myfishCP=[];
  addToFishCP(selectedFish){
    this.myfishCP.push(selectedFish);
    console.log(this.myfishCP);
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