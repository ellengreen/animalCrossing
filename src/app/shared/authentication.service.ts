import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  id: any;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem(`user`, JSON.stringify(this.user));
      } else { 
        localStorage.setItem('user', null);
      } 
    })
   }

   currentUser:any;
   getUser(){
    return this.currentUser = JSON.parse(localStorage.getItem('user'));
   }

   //login with email & password
   async login(email, password){
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
       this.router.navigate(['home']);
     }
     catch (error) {
       window.alert(error.message);
     }
  }

   //register for account
   signUp(email: string, password: string){
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      window.alert('Thanks for creating an account!')
      this.router.navigate(['login']);
    })
    .catch(error => {
      window.alert(error.message)
    })
  }

   //send email to reset password
   async resetPasswordEmail(passwordResetEmail: string){
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail)
   }

   //logout of account
   async logout(){
     await this.afAuth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['login'])
   }

   get isLoggedIn(){
     const user = JSON.parse(localStorage.getItem('user'));
     return user !== null;
   }

   //login with google account
   async loginWithGoogle(){
     await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
     this.router.navigate(['profile']);
   }


}
