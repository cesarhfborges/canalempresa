import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Loja} from '../../shared/models/loja';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lojas: Loja[];

  constructor(
    private firebase: AngularFirestore,
  ) {
  }

  ngOnInit(): void {
    this.getLojas();
  }

  getLojas() {
    this.firebase.collection('/lojas').valueChanges().subscribe(
      (lojas: Loja[]) => {
        // console.log(lojas);
        this.lojas = lojas;
      }
    );
  }
}
