import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private db: FirebaseService, private auth: AuthenticationService) { }

  savedFish=[];
  savedBugs=[];
  userInfo=[];
  fishWidth: number;
  bugWidth: number;

  displayName: string;
  nativeFlower: any;
  nativeFruit: any;
  islandName: any;
  flowers = ['Lilies', 'Roses', 'Hyacinths', 'Pansies', 'Mums', 'Cosmos', 'Tulips', 'Windflowers'];
  fruit = ['Apples', 'Oranges', 'Peaches', 'Pears', 'Cherries'];
  new: boolean;
  submitted = false;

  ngOnInit() {
    this.db.fetchFish().subscribe(fish =>{
      this.savedFish=fish;
      this.fishWidth = (this.savedFish.length/80)*100;
    })
    this.db.fetchBugs().subscribe(bugs=> {
      this.savedBugs=bugs;
      this.bugWidth = (this.savedBugs.length/80)*100;
    })
    this.db.fetchUserInfo().subscribe(data=> {
      this.userInfo=data;
      if (this.userInfo.length < 1){
        this.new = true;
        } else {
          this.new = false;
        }
      console.log(this.userInfo)
    })
  }

  onSubmit() { this.submitted = true; }
  update(profileForm){
  this.db.addUserInfo(profileForm.value)
  console.log(profileForm.value)
  window.location.reload();
    
  }
}




 
