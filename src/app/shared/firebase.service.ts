import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  addBug(selectedCritter){
    this.http
    .post('https://animal-crossing-92e14.firebaseio.com/bugs.json', selectedCritter)
    .subscribe(responseData=>{
    })
  }

  addFish(selectedCritter){
    this.http
    .post('https://animal-crossing-92e14.firebaseio.com/fish.json', selectedCritter)
    .subscribe(responseData=>{
    });
  }

  fetchBugs(){
    return this.http
    .get('https://animal-crossing-92e14.firebaseio.com/bugs.json')
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
    .get('https://animal-crossing-92e14.firebaseio.com/fish.json')
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
}
  // loadedBugs=[];
  // fetchBugs() 
  //       for (const key in responseData){
  //         if (responseData.hasOwnProperty(key)) {
  //         bugsArray.push({ ...responseData[key], newid: key })
  //       }
  //       }
  //       return bugsArray;
  //     }))
  //     .subscribe(bugs=>{
  //     this.loadedBugs = bugs;
  //     console.log(this.loadedBugs);
  //     this.critters=this.loadedBugs;
  //   })
  // }

  // loadedFish=[];
  // fetchFish() {
  //   this.httpClient
  //   .get('https://animal-crossing-92e14.firebaseio.com/fish.json')
  //   .pipe(map(responseData => {
  //     const fishArray =[];
  //     for (const key in responseData){
  //       if (responseData.hasOwnProperty(key)) {
  //       fishArray.push({ ...responseData[key], newid: key })
  //     }
  //     }
  //     return fishArray;
  //   }))
  //   .subscribe(fish=>{
  //   this.loadedFish = fish;
  //   console.log(this.loadedFish);
  //   this.critters=this.loadedFish;
  // })
    
  // }


  // (`users/${user.uid}`)

  //https://animal-crossing-92e14.firebaseio.com/
