import { Component, OnInit } from '@angular/core';
import { NookipediaService } from '../shared/nookipedia.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from '../shared/firebase.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.scss']
})
export class VillagersComponent implements OnInit {
  villagers: any;
  allVillagers: any;
  selectedVillager: any;
  v: any;
  species = ['Alligator', 'Anteater', 'Bear', 'Bird', 'Bull', 'Cat', 
  'Chicken', 'Cow', 'Cub', 'Deer', 'Dog', 'Duck', 'Eagle',
  'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster', 'Hippo', 
  'Horse', 'Kangaroo', 'Koala', 'Lion', 'Monkey', 'Mouse',
  'Octopus', 'Ostrich', 'Penguin', 'Pig', 'Rabbit', 'Rhino',
  'Sheep', 'Squirrel', 'Tiger', 'Wolf'];
  genders = ['Male', 'Female'];
  personalities = ['Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy',
        'Smug', 'Snooty', 'Uchi'];

  constructor(private nookSerivce: NookipediaService, public fb: FormBuilder, private http: HttpClient, private db:FirebaseService, private kv: KeyValuePipe) { }
  myVillagers: any;
  ngOnInit(): void {
    this.nookSerivce.getVillagers().subscribe(data=> {
      this.villagers = Object.keys(data).map(i => data[i]);
      this.allVillagers = this.villagers;
    });
    this.db.fetchVillagers().subscribe(data=> {
      this.myVillagers=data;
      console.log(this.myVillagers)
    })
  }

  form = new FormGroup({
    gender: new FormControl(''),
    species: new FormControl(''),
    personality: new FormControl('')
  });
  
  // get f(){
  //   return this.form.controls;
  // }
  
  submit(){
    console.log(this.form.value);
    this.filter(this.form.value);
  }


filter(profileForm){
   this.filteredVillagers=[];
   Object.keys(this.allVillagers).forEach(key=>{
     if (this.form.value['gender'].includes(this.allVillagers[key]['gender'])
    // if (this.allVillagers[key]['gender']==this.form.value['gender'] 
     && (this.form.value['species'].includes(this.allVillagers[key]['species']))
    //  && (this.allVillagers[key]['species']==this.form.value['species']) 
    && (this.form.value['personality'].includes(this.allVillagers[key]['personality']))){
    //  && (this.allVillagers[key]['personality']==this.form.value['personality'])){
       this.filteredVillagers.push(this.allVillagers[key]);
       console.log(this.filteredVillagers)
   } 
   }); this.villagers=this.filteredVillagers;
}


  duplicate: boolean;
  dupe(){
    Object.keys(this.myVillagers).forEach(key=>{
      if (this.myVillagers[key]['value']['id']==(this.selectedVillager.value['id'])){
        this.duplicate = true;
        console.log('a dupe')
      } else { this.duplicate = false;}
    })
  }


  // filterBy: any;
  // selectGender (event: any) {
  //   this.filterBy = event.target.value;
  //   console.log(this.filterBy)
  //   this.filterGender();
  // }

  // selectSpecies (event: any) {
  //   this.filterBy = event.target.value;
  //   this.filterSpecies();
  // }

  // selectPersonality (event: any) {
  //   this.filterBy = event.target.value;
  //   this.filterPersonality();
  // }

  selected:any;
  onSelect(v){
    this.selectedVillager = v;
    console.log(this.selectedVillager.value['id'])
    this.dupe();
    this.http.get(
    `http://nookipedia.com/api/villager/${this.selectedVillager.value['name']['name-en']}/?api_key=a2f61762-8c07-4aff-a16c-75ffa9e8ef8a`)
      .subscribe(data=> {
      this.selected = data;
    })
  }

  filteredVillagers = [];
  // filterGender(){
  //   this.filteredVillagers=[];
  //   Object.keys(this.allVillagers).forEach(key=>{
  //     if(this.allVillagers[key]['gender']==this.filterBy){
  //       this.filteredVillagers.push(this.allVillagers[key]);
  //     } 
  //   }); this.villagers=this.filteredVillagers;
  // }

  // filterSpecies(){
  //   this.filteredVillagers=[];
  //   Object.keys(this.allVillagers).forEach(key=> {
  //     if(this.allVillagers[key]['species']==this.filterBy){
  //       this.filteredVillagers.push(this.allVillagers[key]);
  //     }
  //   }); this.villagers=this.filteredVillagers
  // }

  // filterPersonality(){
  //   this.filteredVillagers=[];
  //   Object.keys(this.allVillagers).forEach(key=> {
  //     if(this.allVillagers[key]['personality']==this.filterBy){
  //       this.filteredVillagers.push(this.allVillagers[key]);
  //     }
  //   }); this.villagers=this.filteredVillagers
  // }

  addVillager(selectedVillager){
    this.db.addVillager(selectedVillager);
    this.duplicate = true;
  }
}



