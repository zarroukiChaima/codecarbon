import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private apiserv:ApiService) { 
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      message: ['', Validators.required],
      
    });
  }


  ngOnInit(): void {
  }

  contact(): void {
    
    this.apiserv
      .contactUs(
        {
          name: this.contactForm.get('name').value,
          email: this.contactForm.get('email').value,
          content: this.contactForm.get('message').value,
        })

        
        console.log( this.contactForm.get('name').value,
        this.contactForm.get('email').value,
         this.contactForm.get('message').value,);
  }
}
