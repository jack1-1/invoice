import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor() { }

  private newUser = new BehaviorSubject<any>({});

  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }


}
