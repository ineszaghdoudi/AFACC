import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactSaveService } from '../services/contact-save-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact = new Contact();
  constructor(
    private router: Router,
    private saveService: ContactSaveService
  ) { }

  ngOnInit(): void {
  }

  messageSent() {
    console.log(this.contact);
    this.saveService.saveContact(this.contact).subscribe(data=>{
      alert("Message envoyé avec succès, nous vous contacterons bientôt!");
      this.router.navigate(['/home'])
    }, error=>alert("Désolé, nous n'avons pas pu envoyer le message!"));
  } 
}
