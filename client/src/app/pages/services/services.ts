import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  currentSlide = signal(0);

  services = signal<Service[]>([
    {
      id: 1,
      title: 'Mobile App Development',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '📱',
      isActive: false
    },
    {
      id: 2,
      title: 'Web Design & Development',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '</>',
      isActive: true
    },
    {
      id: 3,
      title: 'Software Testing Service',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '🧪',
      isActive: false
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '🎨',
      isActive: false
    },
    {
      id: 5,
      title: 'DevOps & Cloud',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '☁️',
      isActive: false
    },
    {
      id: 6,
      title: 'Cyper Security',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '☁️',
      isActive: false
    },


  ]);

  constructor() {
    this.updateActiveService();
  }


  nextSlide() {
    const maxSlide = this.services().length - 1;
    if (this.currentSlide() < maxSlide) {
      this.currentSlide.update(current => current + 1);
      this.updateActiveService();
    }
  }

  previousSlide() {
    if (this.currentSlide() > 0) {
      this.currentSlide.update(current => current - 1);
      this.updateActiveService();
    }
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.updateActiveService();
  }

  private updateActiveService() {
    this.services.update(services =>
      services.map((service, index) => ({
        ...service,
        isActive: index === this.currentSlide()
      }))
    );
  }
}
