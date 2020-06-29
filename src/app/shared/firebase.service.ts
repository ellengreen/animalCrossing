import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
user: any;
id: any;

  constructor(private http: HttpClient, private auth: AuthenticationService) { 
    this.user = this.auth.getUser()
    this.id = this.user['uid'];
  }

  addBug(selectedCritter){
    this.http
    .post(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/bugs.json`, selectedCritter)
    .subscribe(responseData=>{
    })
  }

  addFish(selectedCritter){
    this.http
    .post(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/fish.json`, selectedCritter)
    .subscribe(responseData=>{
    });
  }

  fetchBugs(){
    return this.http
    .get(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/bugs.json`)
    .pipe(map(responseData => {
      const loadedBugs =[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)){
          loadedBugs.push({ ...responseData[key], newID: key})
        }
      }
      return loadedBugs;
    })
    )
  }

  fetchFish(){
    return this.http
    .get(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/fish.json`)
    .pipe(map(responseData => {
      const loadedFish =[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)){
          loadedFish.push({ ...responseData[key], newID: key})
        }
      }
      return loadedFish;
    })
    )
  }

  addUserInfo(profileData: {name: string, islandName: string, nativeFruit: any, nativeFlower: any}){
    this.http
    .post(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/profile.json`, profileData)
    .subscribe(responseData=>{
    })
  }

  fetchUserInfo(){
    return this.http
    .get(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/profile.json`)
    .pipe(map(responseData => {
      const loadedData =[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)){
          loadedData.push({ ...responseData[key], newID: key})
        }
      }
      return loadedData;
    })
    )
  }

  addVillager(selectedVillager){
    this.http
    .post(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/villagers.json`, selectedVillager)
    .subscribe(responseData=>{
    })
  }

  fetchVillagers(){
    return this.http
    .get(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/villagers.json`)
    .pipe(map(responseData => {
      const loadedVillagers =[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)){
          loadedVillagers.push({ ...responseData[key], newID: key})
        }
      }
      return loadedVillagers;
    })
    )
  }
}

