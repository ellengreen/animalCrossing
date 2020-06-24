import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { KeyValuePipe } from '@angular/common';
import { FirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  constructor(public ns: NookipediaService, public ds: CurrentDateService, public kv:KeyValuePipe, public db: FirebaseService) { }

  fish: any;
  allFish: any;
  selectedFish: any;
  currentMonth=this.ds.currentMonth;
  time=this.ds.todayDate;
  thisHour=[];
  new = [];
  leaving = [];
  thisMonth=[];
  loadedFish: any;

  ngOnInit(){
    this.ns.getFish().subscribe(data=> {
      this.fish = data;
      this.allFish = this.fish;
      this.catchablefish();
    });
    this.load();
  }

  load(){
    this.db.fetchFish().subscribe(fish =>{
      this.loadedFish=fish;
    })
  }

  onSelect(f:any){
    this.load();
    this.selectedFish = f;
    this.dupe(this.selectedFish);
    if(this.duplicate.includes(this.selectedFish['id'])){
      this.aDupe=true;
    } else {
      this.aDupe=false;
    }
  }

  aDupe: boolean; 
  showAll(){
    this.fish=this.allFish;
  }
  
  showCurrent(){
    this.fish=this.thisMonth;
  }

  showMine(){
    this.db.fetchFish().subscribe(fish =>{
      this.fish=fish;
    })
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

  addFish(selectedFish){
    this.db.addFish(selectedFish);
    this.aDupe = true;
  }

  duplicate=[];
  dupe(selectedFish){
    this.kv.transform(this.loadedFish);
    Object.keys(this.loadedFish).forEach(key => {
      if (this.loadedFish[key]['id']==(this.selectedFish['id'])){ 
        this.duplicate.push(this.selectedFish['id'])
    }});
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