import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-critterpedia-main',
  templateUrl: './critterpedia-main.component.html',
  styleUrls: ['./critterpedia-main.component.scss']
})
export class CritterpediaMainComponent implements OnInit {

  constructor(public ns: NookipediaService, public ds: CurrentDateService, public kv:KeyValuePipe) { }

  bugs: any;
  fish: any;
  critters: any;
  
  fishView: boolean;
  bugView: boolean;
  name: string;
  vendor: string;
  
  selectedCritter: any;
  currentMonth=this.ds.currentMonth;
  thisMonthFish=[];
  thisMonthBugs=[];

  ngOnInit(){
    this.ns.getBugs().subscribe(data=> {
      this.bugs = data;
      // set bugs as default view options
      this.critters = this.bugs;
      this.name ='bugs';
      this.vendor='Flick';
      this.catchableBugs();
    })
      this.ns.getFish().subscribe(data => {
        this.fish = data;
        this.catchableFish();
    })
  }

  onFish(){
    this.fishView = true;
    this.bugView = false;
    if (this.fishView){
      this.critters=this.fish;
      this.name = 'fish';
      this.vendor = 'CJ';
    } 
    this.selectedCritter = null;
  }

  onBugs(){
    this.fishView = false;
    this.bugView = true;
    if (this.bugView){
      this.critters=this.bugs;
      this.name='bugs';
      this.vendor = 'Flick';
    }
    this.selectedCritter = null;
  }

  onSelect(c:any){
    this.selectedCritter = c;
  }

  showAll(){
    if (this.fishView){
      this.critters=this.fish;
    } else {
      this.critters=this.bugs;
    }
  }

  showCurrent(){
    if (this.fishView){
    this.critters=this.thisMonthFish;
    } else {
      this.critters=this.thisMonthBugs;
    }
  }

  
  showMine(){
    if (this.fishView){
      this.critters=this.myFishCP;
      
      } else {
        this.critters=this.myBugsCP;
      }
  }

  catchableBugs(){
    this.kv.transform(this.bugs);
    Object.keys(this.bugs).forEach(key => {
      if (this.bugs[key]['months']['northern']['array'].includes(this.currentMonth)){ 
        this.thisMonthBugs.push(this.bugs[key])
      }
    });
    // console.log(this.thisMonthFish)
  }
  catchableFish(){
    this.kv.transform(this.fish);
    Object.keys(this.fish).forEach(key => {
      if (this.fish[key]['months']['northern']['array'].includes(this.currentMonth)){ 
        this.thisMonthFish.push(this.fish[key])
      }
    });
    // console.log(this.thisMonthFish)
  }

myFishCP=[];
myBugsCP=[];
addToFishCP(selectedCritter){
  this.myFishCP.push(selectedCritter);
  console.log(this.myFishCP);
}
addToBugsCP(selectedCritter){
  this.myBugsCP.push(selectedCritter);
  console.log(this.myBugsCP);
}
}