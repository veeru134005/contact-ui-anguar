import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../classes/ContactClass';
import {ContactService} from '../Services/ContactService';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateContact {

  contact:Contact=new Contact();

  msg:string='';
  @Output()
  createcon=new EventEmitter<{response:string}>();
  constructor(private contactSer:ContactService,private route:Router ) { }

  creatContact(){
    
    this.contactSer.createContact(this.contact).subscribe(res=>{
      this.msg=res;
      this.createcon.emit({response:this.msg});
      this.contact=new Contact();
    });;
  }

}
