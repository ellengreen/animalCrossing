import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private db: FirebaseService, private auth: AuthenticationService, private afAuth: AngularFireAuth) { }

  savedFish=[];
  savedBugs=[];
  userInfo=[];
  villagers=[];
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
  user:any; 
  noUser: boolean;

  ngOnInit() {
    
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.noUser = false;
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
          })
        this.db.fetchVillagers().subscribe(data=> {
          this.villagers=data;
        })
          } else {
            this.noUser = true;
            console.log('no User')
      }
    });
  }

  onSubmit() { this.submitted = true; }
  update(profileForm){
  this.db.addUserInfo(profileForm.value)
  window.location.reload();
  }

  vID: any;
  delete(selectedVillager){
    this.vID = selectedVillager['newID'];
    this.db.deleteVillager(this.vID);
    window.alert('Villager successfully evicted! Refresh page to see changes')
  }
}




 
