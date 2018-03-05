import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  get_ticket(){
    this.http.get('http://hatim-haffane.com/allianz/api.php/tickets?transform=1')
    .subscribe( result => {
      console.log(result);
    })
  }

  new_ticket(){
    let ticket= {
      id: 4,
      subject: 'ticket num #4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      created_at: '26/01/2018',
      priority: 3
    };
    let headers = this.setHeaders();
    this.http.post('http://hatim-haffane.com/allianz/api.php/tickets',ticket,{headers : headers} )
    .subscribe(result => {
      console.log(result);
    });


  }


  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    if(window.localStorage.getItem('token')){
      headersConfig['Authorization'] = 'Bearer '+window.localStorage.getItem('token');
    }

    console.log(headersConfig);
    return new HttpHeaders(headersConfig);
  }

}
