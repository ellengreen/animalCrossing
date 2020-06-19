import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-critterpedia-main',
  templateUrl: './critterpedia-main.component.html',
  styleUrls: ['./critterpedia-main.component.scss']
})
export class CritterpediaMainComponent implements OnInit {

  constructor() { }

  fishView: boolean;
  bugView: boolean;
  vendor: string;


  ngOnInit(){
    this.bugView=true;
    this.vendor='Flick';
  }

  onFish(){
    this.bugView=false;
    this.fishView=true;
    this.vendor='CJ';
  }

  onBugs(){
    this.bugView=true;
    this.fishView=false;
    this.vendor='Flick'
  }

}



//   ngOnInit(){
//     this.ns.getBugs().subscribe(data=> {
//       this.bugs = data;
//       // set bugs as default view options
//       this.critters = this.bugs;
//       this.name ='bugs';
//       this.vendor='Flick';
//     })
//       this.ns.getFish().subscribe(data => {
//         this.fish = data;
//     })
  
//     this.db.fetchBugs().subscribe(bugs =>{
//       this.loadedBugs=bugs;
//     })
//     this.db.fetchFish().subscribe(fish =>{
//       this.loadedFish=fish;
//     })
//   }

//   onFish(){
//     this.bugView=false;
//     this.fishView=true;
//     this.vendor='CJ';
//   }

//   onBugs(){
//     this.bugView=true;
//     this.fishView=false;
//     this.vendor='Flick'
//   }

//   onSelect(c:any){
//     this.selectedCritter = c;
//   }

//   showAll(){
//     if (this.fishView){
//       this.critters=this.fish;
//     } else {
//       this.critters=this.bugs;
//     }
//   }


//   showMine(){
//     if (this.fishView){
//       this.db.fetchFish()
//       .subscribe(fish =>{
//       this.critters=fish;
//       })} else {
//         this.db.fetchBugs().subscribe(bugs=>{
//           this.critters=bugs;
//         })
//       }
//   }


// addFish(selectedCritter){
//   // this.myFishCP.push(selectedCritter);
//   // this.dupes(selectedCritter)
//   this.db.addFish(selectedCritter);
// }
// addBugs(selectedCritter){
//   this.dupes(selectedCritter)
//   // this.db.addBug(selectedCritter)
// }

// dupes(selectedCritter){
//   this.kv.transform(this.loadedBugs);
//   Object.keys(this.loadedBugs).forEach(key=>{
//     if(this.loadedBugs[key]['id'] == selectedCritter['id']){
//       console.log('stop')
//     } else {
//       this.db.addBug(selectedCritter)
//       console.log(this.loadedBugs)
//       // this.db.addBug(selectedCritter)
//     }
//   })

 
// }


// }
