import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from 'emailjs-com';
import { environmentDev } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  serviceId = environment.production
    ? environment.EMAIL_SERVICE_ID
    : environmentDev.DEV_EMAIL_SERVICE_ID;
  templateId = environment.production
    ? environment.EMAIL_TEMPLATE_ID
    : environmentDev.DEV_EMAIL_TEMPLATE_ID;
  userId = environment.production
    ? environment.EMAIL_USER_ID
    : environmentDev.DEV_EMAIL_USER_ID;

  async onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      try {
        await emailjs.send(
          this.serviceId,
          this.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          this.userId
        );
        alert('Message envoyé avec succès!');
        this.contactForm.reset();
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        alert('Une erreur est survenue, veuillez réessayer.');
      }
    }
  }
}
