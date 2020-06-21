import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  id: any;
  user: any;
  ngOnInit() {
    this.user = this.auth.getUser()
    this.id = this.user['uid'];
  }

  displayName: string;
  addName(name: string){
    this.displayName = name;
  }

}
