import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(
    private fireAuth: AngularFireAuth,
  ) {
    this.user = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : undefined;
  }

  public login({email, password}): Promise<firebase.auth.UserCredential> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    localStorage.clear();
    return this.fireAuth.signOut();
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('auth');
  }
}
