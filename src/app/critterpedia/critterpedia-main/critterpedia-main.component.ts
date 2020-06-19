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