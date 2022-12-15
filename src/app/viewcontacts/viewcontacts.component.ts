import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/ContactClass';
import { ContactService } from '../Services/ContactService';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.css']
})
export class ViewcontactsComponent implements OnInit {

  constructor(private contactSer:ContactService) { }

  contacts:Contact[]=[];
  contact:Contact=new Contact();
 
  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.contactSer.getContacts().subscribe((res)=>{
      this.contacts=res;
    });
  }
  confirm(data:number){
    if(confirm("Are you sure to delete "+data)) {
     
      this.contactSer.deleteContact(data).subscribe(res1=>{
        this.contactSer.getContacts().subscribe((res)=>this.contacts=res)
      });
      this.contactSer.getContacts().subscribe((res)=>{this.contacts=res;
       
      });
    }
  }
  

  isRecordsCreated(data:any){
    this.getContacts();
    //console.log(data);
  }
  editContact(contactObj:Contact){
    this.contact=contactObj;
    console.log(this.contact);
  }
  updateContact(){
    this.contactSer.updateContact(this.contact).subscribe(res1=>{
      console.log(res1);
    });
  }
 

}
