import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { KeyValuePipe } from '@angular/common';
import { FirebaseService } from 'src/app/shared/firebase.service';


@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {

  constructor(public ns: NookipediaService, public ds: CurrentDateService, private db: FirebaseService, public kv:KeyValuePipe) { }

  bugs: any;
  allBugs: any;
  dbBugs: any;
  critterList: any;
  selectedBug: any;
  currentMonth=this.ds.currentMonth;
  time=this.ds.todayDate;
  thisHour=[];
  new = [];
  leaving = [];
  thisMonth=[];

  ngOnInit(){
    this.ns.getBugs().subscribe(data=> {
      this.bugs = data;
      this.allBugs=this.bugs;
      this.catchableBugs();
    })
    this.load()
  }

  load(){
    this.db.fetchBugs().subscribe(bugs=> {
      this.loadedBugs=bugs;
    })
  }

  onSelect(b:any){
    this.load()
    this.selectedBug = b;
    this.dupe(this.selectedBug);
    if(this.duplicate.includes(this.selectedBug['id'])){
      this.aDupe=true;
    } else {
      this.aDupe=false;
    }
  }

  aDupe: boolean;
  showAll(){
    this.bugs=this.allBugs;
  }
  
  showCurrent(){
    this.bugs=this.thisMonth;
  }

  loadedBugs: any;
  showMine(){
    this.db.fetchBugs().subscribe(bugs =>{
      this.bugs=bugs;
    });
  }

  addBugs(selectedCritter){
    this.db.addBug(selectedCritter);
    this.aDupe = true;
  }

  catchableBugs(){
    this.kv.transform(this.bugs);
    Object.keys(this.bugs).forEach(key => {
      if (this.bugs[key]['months']['northern']['array'].includes(this.currentMonth)){ 
        this.thisMonth.push(this.bugs[key])
      }
      if (this.bugs[key]['times']['array'].includes(this.time) && (this.bugs[key]['months']['northern']['array'].includes(this.currentMonth))) { 
        this.thisHour.push(this.bugs[key])
      };     
      if (this.bugs[key]['months']['northern']['array'][0] == this.currentMonth){
        this.new.push(this.bugs[key]);
      }
      if (this.bugs[key]['months']['northern']['array'].includes(this.currentMonth +1) == false){
        this.leaving.push(this.bugs[key])
      }
    });
  }

  duplicate=[];
  dupe(selectedBug){
    this.kv.transform(this.loadedBugs);
    Object.keys(this.loadedBugs).forEach(key => {
      if (this.loadedBugs[key]['id']==(this.selectedBug['id'])){ 
        this.duplicate.push(this.selectedBug['id'])
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


