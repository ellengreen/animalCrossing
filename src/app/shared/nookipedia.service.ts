import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NookipediaService {

  constructor(private httpClient: HttpClient, private keyPipe: KeyValuePipe) { }

  
  getFish(){
    return this.httpClient.get("assets/fish.json")
  }

  
  getBugs(){
    return this.httpClient.get("assets/bugs.json")
  }

  
  getEvents(){
    return this.httpClient.get("assets/events.json")
  }

  getVillagers() {
    return this.httpClient.get(
      // "https://nookipedia.com/api/villager//?api_key=a2f61762-8c07-4aff-a16c-75ffa9e8ef8a"
      "http://acnhapi.com/villagers/"
    )
  }
}


