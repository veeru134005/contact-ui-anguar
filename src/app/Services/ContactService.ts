import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import { Contact} from '../classes/ContactClass';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

   baseUrl:string=environment.baseUrl;

  constructor(private httpClient:HttpClient) { 

  }

createContact(data:Contact):Observable<string>{
return this.httpClient.post(`${this.baseUrl}/contact`,data,{responseType:"text"});
}

getContacts():Observable<Contact[]>{
return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`,{responseType:"json"});
}

getContactById(id:number):Observable<Contact>{
return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
}

updateContact(data:Contact):Observable<string>{
return this.httpClient.put(`${this.baseUrl}/contact`,data, {responseType:"text"});
}

deleteContact(id:number):Observable<string>{
  return this.httpClient.delete(`${this.baseUrl}/contact/${id}`,{responseType:"text"});
}


}
