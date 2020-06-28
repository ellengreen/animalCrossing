import { Component, OnInit } from '@angular/core';
import { NookipediaService } from '../shared/nookipedia.service';
import { KeyValuePipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

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
  personalities = ['Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy', 'Sisterly',
        'Smug', 'Snooty'];

  constructor(private nookSerivce: NookipediaService) { }

  ngOnInit(): void {
    this.nookSerivce.getVillagers().subscribe(data=> {
      this.villagers = Object.keys(data).map(i => data[i]);
      this.allVillagers = this.villagers;
    })
  }


  filterBy: any;
  selectGender (event: any) {
    this.filterBy = event.target.value;
    console.log(this.filterBy)
    this.filterGender();
  }

  selectSpecies (event: any) {
    this.filterBy = event.target.value;
    this.filterSpecies();
  }

  selectPersonality (event: any) {
    this.filterBy = event.target.value;
    this.filterPersonality();
  }

  onSelect(v){
    this.selectedVillager = v;
  }

  filteredVillagers = [];
  filterGender(){
    this.filteredVillagers=[];
    Object.keys(this.allVillagers).forEach(key=>{
      if(this.allVillagers[key]['gender']==this.filterBy){
        this.filteredVillagers.push(this.allVillagers[key]);
      } 
    }); this.villagers=this.filteredVillagers;
  }

  filterSpecies(){
    this.filteredVillagers=[];
    Object.keys(this.allVillagers).forEach(key=> {
      if(this.allVillagers[key]['species']==this.filterBy){
        this.filteredVillagers.push(this.allVillagers[key]);
      }
    }); this.villagers=this.filteredVillagers
  }

  
  filterPersonality(){
    this.filteredVillagers=[];
    Object.keys(this.allVillagers).forEach(key=> {
      if(this.allVillagers[key]['personality']==this.filterBy){
        this.filteredVillagers.push(this.allVillagers[key]);
      }
    }); this.villagers=this.filteredVillagers
  }
}



