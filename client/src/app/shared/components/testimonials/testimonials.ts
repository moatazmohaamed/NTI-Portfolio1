import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

interface Testimonial {
  readonly id: number;
  readonly text: string;
  readonly customer: {
    readonly name: string;
    readonly company: string;
    readonly avatar: string;
  };
  readonly rating: number;
  readonly isActive?: boolean;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  private readonly currentTestimonialIndex = signal(2); // Start with Imran Khan (index 2)

  private readonly testimonials = signal<readonly Testimonial[]>([
    {
      id: 1,
      text: "Without assssssssssssy doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
      customer: {
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        avatar: ""
      },
      rating: 5
    },
    {
      id: 2,
      text: "Without any doubt Iasdasdasdasd recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
      customer: {
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        avatar: ""
      },
      rating: 5
    },
    {
      id: 3,
      text: "Without any doubt Iasfasfasf recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
      customer: {
        name: "Imran Khan",
        company: "Software Engineer",
        avatar: ""
      },
      rating: 5,
      isActive: true
    },
    {
      id: 4,
      text: "Without any doubt I recogsfgfsdhdgbndgnmmend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
      customer: {
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        avatar: ""
      },
      rating: 5
    },
    {
      id: 5,
      text: "Withsdaasdasdsdut anya doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
      customer: {
        name: "Romeena De Silva",
        company: "Janet Cosmetics",
        avatar: ""
      },
      rating: 5
    }
  ]);

  readonly currentTestimonial = computed(() => {
    const index = this.currentTestimonialIndex();
    return this.testimonials()[index];
  });

  readonly testimonialsWithActiveState = computed(() => {
    const index = this.currentTestimonialIndex();
    return this.testimonials().map((testimonial, i) => ({
      ...testimonial,
      isActive: i === index
    }));
  });

  nextTestimonial(): void {
    const currentIndex = this.currentTestimonialIndex();
    const totalTestimonials = this.testimonials().length;
    const nextIndex = (currentIndex + 1) % totalTestimonials;
    this.currentTestimonialIndex.set(nextIndex);
  }

  previousTestimonial(): void {
    const currentIndex = this.currentTestimonialIndex();
    const totalTestimonials = this.testimonials().length;
    const prevIndex = currentIndex === 0 ? totalTestimonials - 1 : currentIndex - 1;
    this.currentTestimonialIndex.set(prevIndex);
  }

  selectTestimonial(index: number): void {
    this.currentTestimonialIndex.set(index);
  }

  generateStars(rating: number): string[] {
    return Array.from({ length: rating }, (_, i) => '★');
  }

  getCustomerInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
