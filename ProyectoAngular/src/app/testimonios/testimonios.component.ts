import { Component, OnInit } from '@angular/core';

export interface Testimonio {
  id: number;
  nombre: string;
  apellido: string;
  cargo: string;
  empresa: string;
  imagen: string;
  testimonio: string;
  rating: number;
}

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {

  testimonios: Testimonio[] = [
    {
      id: 1,
      nombre: 'María',
      apellido: 'González',
      cargo: 'CEO',
      empresa: 'TechStart',
      imagen: 'https://cdn.pixabay.com/photo/2024/01/30/19/20/woman-8542748_640.png',
      testimonio: 'Desarrolla tu Marca transformó completamente mi presencia digital. Gracias a su estrategia, aumenté mis oportunidades de negocio en un 300%.',
      rating: 5
    },
    {
      id: 2,
      nombre: 'Carlos',
      apellido: 'Rodríguez',
      cargo: 'Consultor',
      empresa: 'Freelance',
      imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387',
      testimonio: 'El equipo me ayudó a definir mi marca personal de manera auténtica. Ahora tengo una identidad visual coherente que refleja mis valores.',
      rating: 5
    },
    {
      id: 3,
      nombre: 'Ana',
      apellido: 'Martínez',
      cargo: 'Marketing Manager',
      empresa: 'InnovaCorp',
      imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387',
      testimonio: 'La estrategia de contenido que desarrollaron para mi LinkedIn generó un aumento del 250% en mi red profesional. Excelente trabajo.',
      rating: 5
    },
    {
      id: 4,
      nombre: 'Roberto',
      apellido: 'Silva',
      cargo: 'Emprendedor',
      empresa: 'EcoSolutions',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387',
      testimonio: 'Su enfoque personalizado me permitió posicionarme como referente en mi sector. La inversión se recuperó rápidamente.',
      rating: 5
    },
    {
      id: 5,
      nombre: 'Laura',
      apellido: 'Fernández',
      cargo: 'Arquitecta',
      empresa: 'Estudio LF',
      imagen: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387',
      testimonio: 'Profesionales excepcionales. Me ayudaron a crear una marca sólida que ahora es reconocida en toda la región.',
      rating: 5
    },
    {
      id: 6,
      nombre: 'Diego',
      apellido: 'Morales',
      cargo: 'Coach',
      empresa: 'LifeCoaching Pro',
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387',
      testimonio: 'La calidad del servicio y la atención al detalle superaron todas mis expectativas. Recomiendo totalmente sus servicios.',
      rating: 5
    }
  ];

  currentIndex = 0;
  itemsToShow = 3;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.testimonios.length - this.itemsToShow) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.testimonios.length - this.itemsToShow;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getVisibleTestimonios(): Testimonio[] {
    return this.testimonios.slice(this.currentIndex, this.currentIndex + this.itemsToShow);
  }

  getStars(rating: number): number[] {
    return new Array(rating).fill(0).map((x, i) => i);
  }
}