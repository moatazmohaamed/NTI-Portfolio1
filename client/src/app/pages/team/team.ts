import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
  };
  order: number;
  isActive: boolean;
}

@Component({
  selector: 'app-team',
  imports: [CommonModule, RouterLink],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team implements OnInit {
  teamMembers: TeamMember[] = [
    {
      _id: '1',
      name: 'John Doe',
      role: 'Senior Developer',
      bio: 'Passionate full-stack developer with 5+ years of experience in modern web technologies and cloud solutions.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe'
      },
      order: 1,
      isActive: true
    },
    {
      _id: '2',
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user experience and modern interface design with expertise in design systems.',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/janesmith',
        github: 'https://github.com/janesmith'
      },
      order: 2,
      isActive: true
    },
    {
      _id: '3',
      name: 'Mike Johnson',
      role: 'Project Manager',
      bio: 'Experienced project manager with a track record of delivering complex projects on time and within budget.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/mikejohnson',
        github: 'https://github.com/mikejohnson'
      },
      order: 3,
      isActive: true
    },
    {
      _id: '4',
      name: 'Sarah Wilson',
      role: 'DevOps Engineer',
      bio: 'Cloud infrastructure specialist with expertise in automation, CI/CD pipelines, and scalable system architecture.',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarahwilson',
        github: 'https://github.com/sarahwilson'
      },
      order: 4,
      isActive: true
    },
    {
      _id: '5',
      name: 'David Brown',
      role: 'Frontend Developer',
      bio: 'Specialized in React, Angular, and modern JavaScript frameworks with a focus on performance optimization.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/davidbrown',
        github: 'https://github.com/davidbrown'
      },
      order: 5,
      isActive: true
    },
    {
      _id: '6',
      name: 'Lisa Garcia',
      role: 'QA Engineer',
      bio: 'Quality assurance specialist ensuring our products meet the highest standards through comprehensive testing.',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/lisagarcia',
        github: 'https://github.com/lisagarcia'
      },
      order: 6,
      isActive: true
    },
    {
      _id: '7',
      name: 'Alex Chen',
      role: 'Backend Developer',
      bio: 'Server-side development expert with deep knowledge in Node.js, Python, and database optimization.',
      photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/alexchen',
        github: 'https://github.com/alexchen'
      },
      order: 7,
      isActive: true
    },
    {
      _id: '8',
      name: 'Emma Davis',
      role: 'Marketing Specialist',
      bio: 'Digital marketing expert focused on brand growth, content strategy, and customer engagement initiatives.',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/emmadavis',
        github: 'https://github.com/emmadavis'
      },
      order: 8,
      isActive: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.teamMembers.sort((a, b) => a.order - b.order);
  }

  getTeamMembers(): TeamMember[] {
    return this.teamMembers.filter(member => member.isActive);
  }

  getImageUrl(imagePath: string): string {
    // In a real application, this would construct the full URL
    // For now, we'll return the path as is
    return imagePath;
  }
}
