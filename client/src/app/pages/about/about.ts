import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Technology {
  id: number;
  name: string;
}

interface Statistic {
  id: number;
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  // Company Statistics
  statistics: Statistic[] = [
    { id: 1, value: '50+', label: 'Projects Completed' },
    { id: 2, value: '25+', label: 'Happy Clients' },
    { id: 3, value: '4+', label: 'Years Experience' },
    { id: 4, value: '15+', label: 'Team Members' }
  ];

  // Core Values
  coreValues: CompanyValue[] = [
    {
      id: 1,
      title: 'Quality First',
      description: 'We never compromise on quality. Every project is delivered with meticulous attention to detail and the highest standards of excellence.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 2,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication. Our collaborative approach ensures the best outcomes for every project.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'We stay ahead of the curve by embracing new technologies and innovative approaches to solve complex challenges.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      id: 4,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and consistently deliver projects on time without compromising quality.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 5,
      title: 'Client Focus',
      description: 'Our clients\' success is our success. We go above and beyond to ensure their satisfaction and long-term growth.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      id: 6,
      title: 'Continuous Learning',
      description: 'We believe in continuous improvement and staying updated with the latest trends and technologies in our field.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    }
  ];

  // Technologies
  technologies: Technology[] = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Node.js' },
    { id: 4, name: 'Python' },
    { id: 5, name: 'MongoDB' },
    { id: 6, name: 'AWS' },
    { id: 7, name: 'TypeScript' },
    { id: 8, name: 'Docker' },
    { id: 9, name: 'Kubernetes' },
    { id: 10, name: 'GraphQL' },
    { id: 11, name: 'Redis' },
    { id: 12, name: 'PostgreSQL' }
  ];

  // Company information
  companyInfo = {
    foundedYear: '2020',
    mission: 'To empower businesses with cutting-edge technology solutions that transform ideas into reality. We believe in the power of innovation to solve complex problems and create meaningful impact in the digital world.',
    vision: 'To be the leading force in digital transformation, recognized globally for our innovative solutions, exceptional quality, and unwavering commitment to client success in an ever-evolving technological landscape.',
    story: {
      part1: 'Founded in 2020, our company began as a small team of passionate developers with a shared vision: to bridge the gap between innovative ideas and exceptional digital solutions. What started as a startup in a small office has grown into a thriving company serving clients worldwide.',
      part2: 'Over the years, we\'ve had the privilege of working with startups, established enterprises, and everything in between. Each project has taught us something new, helping us refine our approach and expand our capabilities.',
      part3: 'Today, we\'re proud to be at the forefront of digital innovation, combining cutting-edge technology with human-centered design to create solutions that not only meet but exceed our clients\' expectations.'
    }
  };
}
