import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  readonly id: number;
  readonly question: string;
  readonly answer: string;
  readonly isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FAQ {
  private readonly openItemId = signal<number | null>(0);
  private readonly faqItems = signal<readonly FAQItem[]>([
    {
      id: 1,
      question: "What services does IK Solutions offer?",
      answer: "We offer comprehensive web development, mobile app development, UI/UX design, software testing, DevOps & Cloud services, and cybersecurity solutions. Our team specializes in creating scalable, modern applications using cutting-edge technologies."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. Mobile apps usually require 3-8 months. We provide detailed timelines during our initial consultation."
    },
    {
      id: 3,
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Angular, Vue.js, Node.js, Python, .NET, React Native, Flutter, AWS, Azure, Docker, Kubernetes, and more. Our team stays updated with the latest trends and best practices in software development."
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements. We provide flexible support packages to ensure your application continues to perform optimally."
    },
    {
      id: 5,
      question: "How do you ensure project quality and security?",
      answer: "We follow industry best practices including code reviews, automated testing, security audits, and performance optimization. Our development process includes regular check-ins, demos, and quality assurance testing to deliver robust, secure applications."
    }
  ]);

  readonly faqItemsWithState = computed(() =>
    this.faqItems().map(item => ({
      ...item,
      isOpen: item.id === this.openItemId()
    }))
  );

  toggleItem(itemId: number): void {
    const currentOpenId = this.openItemId();
    this.openItemId.set(currentOpenId === itemId ? null : itemId);
  }
}
