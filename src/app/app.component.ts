import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;


  contactArray:Contact[] = [
    {id:1, name: 'Carlos orquez',telephone: '+56957317821',email: 'carlos.borquez@gmail.com',direction: 'La semilla 435',rut: '17.455.456-k',city: 'Temuco'},
    {id:2, name: 'Carlos Borquez',telephone: '+56957317821',email: 'carlos.borquez@gmail.com',direction: 'La semilla 435',rut: '17.455.456-k',city: 'Temuco'}
  ];
 
selectContact:Contact= new Contact();

addOrEdit(){
  if(this.selectContact.id == 0){
    this.selectContact.id = this.contactArray.length + 1;
    this.contactArray.push(this.selectContact);
  }
  
  this.selectContact = new Contact();
}
  


openForEdit(contact:Contact){
  this.selectContact = contact;
}

delete(){
 if(confirm("Estas seguro de eliminar el contacto?" )){
  this.contactArray = this.contactArray.filter(x => x != this.selectContact);
  this.selectContact = new Contact();
 }
}

}
