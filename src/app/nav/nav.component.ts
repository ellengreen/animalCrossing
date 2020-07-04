import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthenticationService, private afAuth: AngularFireAuth) { }
  noUser: boolean
  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.noUser = false;
      } else {
        this.noUser = true;
      }
    })
  }

}
