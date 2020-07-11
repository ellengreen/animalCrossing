import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-critterpedia-main',
  templateUrl: './critterpedia-main.component.html',
  styleUrls: ['./critterpedia-main.component.scss']
})
export class CritterpediaMainComponent implements OnInit {

  constructor(private ns: NookipediaService, private db: FirebaseService, private ds: CurrentDateService, private afAuth: AngularFireAuth){}

  bugs: any;
  fish: any;
  critters: any;
  critterType: any;
  vendor: any;
  loadedBugs: any;
  loadedFish: any;
  bugView: boolean;
  fishView: boolean;
  selectedCritter: any;
  noUser: boolean;
  
    ngOnInit(){
      this.ns.getBugs().subscribe(data=> {
        this.bugs = data;
        console.log(this.bugs)
        this.critters = this.bugs;
        this.critterType ='bugs';
        this.vendor='Flick';
        this.currentlyAvailable();
      })
      this.ns.getFish().subscribe(data => {
        this.fish = data;
      })
      this.load();
    }
    load(){
      this.db.fetchBugs().subscribe(bugs =>{
        this.loadedBugs=bugs;
      })
      this.db.fetchFish().subscribe(fish =>{
        this.loadedFish=fish;
      })
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.noUser = false;
      } else { this.noUser = true }})
    }
  
    onFish(){
      this.critters=this.fish;
      this.bugView=false;
      this.fishView=true;
      this.vendor='CJ';
      this.critterType='fish';
      this.currentlyAvailable();
    }
  
    onBugs(){
      this.critters=this.bugs;
      this.fishView=false;
      this.bugView=true;
      this.vendor='Flick';
      this.critterType ='bugs';
      this.currentlyAvailable();
    }
  
    onSelect(c:any){
      this.load();
      this.selectedCritter = c;
      this.dupe(this.selectedCritter);
      if(this.duplicate.includes(this.selectedCritter['id'])){
        this.aDupe=true 
      } else { this.aDupe=false}
    }
  
    showAll(){
      if (this.fishView){
        this.critters=this.fish;
      } else {
        this.critters=this.bugs;
      }
    }
  
    showMine(){
      if (this.fishView){
        this.db.fetchFish()
        .subscribe(fish =>{
        this.critters=fish;
        })} else {
          this.db.fetchBugs().subscribe(bugs=>{
            this.critters=bugs;
          })
        }
    }
  
    showCurrent(){
      this.catchableCritters();
      this.critters=this.thisMonth
    }
  
    hourMethod(id){
      return this.thisHour.some((item) => item.id == id);
    }
  
    currentMonth = this.ds.currentMonth;
    hour = this.ds.thisHour;
    thisHour = [];
    thisMonth = [];
  
    catchableCritters(){
      if (this.fishView){
        this.critters=this.fish;
      } else {
        this.critters=this.bugs;
      }
      this.thisMonth=[];
      Object.keys(this.critters).forEach(key=> {
        if (this.critters[key]['months']['northern']['array'].includes(this.currentMonth)){
          this.thisMonth.push(this.critters[key]);
        }
      })
    }
  
    currentlyAvailable(){
      this.thisHour=[];
      Object.keys(this.critters).forEach(key=> {
        if (this.critters[key]['times']['array'].includes(this.hour) && (this.critters[key]['months']['northern']['array'].includes(this.currentMonth))){
          this.thisHour.push(this.critters[key]);
        }
      })
    }
    
    aDupe: boolean;
    addFish(selectedCritter){
      this.db.addFish(selectedCritter);
      this.aDupe=true;
    }
    addBugs(selectedCritter){
      this.db.addBug(selectedCritter);
      this.aDupe=true;
    }
  
    duplicate = [];
    loaded: any;
    dupe(selectedCritter: any){
      if (this.fishView){this.loaded = this.loadedFish
        } else {this.loaded = this.loadedBugs}
      Object.keys(this.loaded).forEach(key=>{
        if (this.loaded[key]['id']===(this.selectedCritter['id'])){
          this.duplicate.push(this.selectedCritter['id']);
        }
      })
    }

    id: any;
    delete(selectedCritter){
      this.id = selectedCritter['newID'];
      this.db.deleteCritter(this.id, this.critterType);
      this.aDupe = false;
    }
  }
  
  
  
  