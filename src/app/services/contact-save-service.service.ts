import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactSaveService  {

  private baseUrl="http://localhost:8080/save";
  
  constructor(private httpClient: HttpClient) { }

  saveContact(contact: Contact): Observable<Object> {
    console.log(contact);
    return this.httpClient.post(`${this.baseUrl}`, contact);
  }
}
