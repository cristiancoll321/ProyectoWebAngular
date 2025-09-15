import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm!: FormGroup;
  enviado = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      tipoServicio: [''],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      presupuesto: [''],
      aceptaTerminos: [false, Validators.requiredTrue]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.enviado = true;

      console.log('✅ Datos enviados:', this.contactForm.value);

      // Simular envío y resetear después
      setTimeout(() => {
        this.isSubmitting = false;
        this.contactForm.reset();
        this.enviado = false;
      }, 3000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
