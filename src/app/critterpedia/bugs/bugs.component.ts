import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  bugs:any;
  selectedBug: any;
  bug: any;
  constructor(private bugService: NookipediaService) { }

  //use service to get data from bugs JSON 
  ngOnInit() {
    this.bugService.getBugs().subscribe(data=> {
      this.bugs = data;
      console.log(data);
    })
  }

  onSelect(bug){
    this.selectedBug = bug;
    console.log(this.selectedBug)
  }
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
    }

}



