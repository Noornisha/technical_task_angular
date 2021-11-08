import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(


  ) {

  }
  public settings: any;
  private tokenValue: string = '';



  // token getter
  get token(): string {
    let userdata = (localStorage.getItem('test'));
    let user = userdata === null ? '' : userdata;
    if (user != null) {
      this.tokenValue = user;
    } else {
      this.tokenValue = '';
    }
    return this.tokenValue;
  }
  
}
