import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(http: HttpClient) { }
  
  addBug(selectedCritter){

  }

  fetchBugs(){

  }

  addFish(selectedCritter){

  }

  fetchFish(){

  }
}
