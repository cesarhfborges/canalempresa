import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  colletion: string = 'tickets';

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  getTickets(): Observable<any> {
    return this.firestore.collection(this.colletion).get();
  }

  createTicket(ticket): Promise<any> {
    return this.firestore.collection(this.colletion).add({...ticket, teste: 'Cesar'});
  }
}
