import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NookipediaService {

  constructor(private httpClient: HttpClient) { }
  getFish(){
    return this.httpClient.get('assets/fish.json');
  }

  getBugs(){
    return this.httpClient.get('assets/bugs.json');
  }

  getEvents(){
    return this.httpClient.get('assets/events.json');
  }

  getVillagers() {
    return this.httpClient.get('http://acnhapi.com/v1/villagers');
  }
}


