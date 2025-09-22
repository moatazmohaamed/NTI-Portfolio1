# Company Portfolio Backend

A robust Node.js backend for a full-stack company portfolio application, built with Express.js, MongoDB, and featuring a comprehensive admin dashboard for dynamic content management.

## Features

- RESTful API for portfolio content management
- Admin authentication and authorization
- Dynamic content management (homepage, about, services, projects, team, testimonials, contact)
- Image upload and management
- Contact form submission handling
- Secure API endpoints with JWT authentication
- MongoDB integration for data persistence
- CORS enabled for frontend integration

## Technologies

- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- bcryptjs for password hashing
- Multer for file uploads
- Nodemailer for email notifications
- CORS for cross-origin requests

## API Endpoints

### FAQ -> question and answer only

### Companys worked with images -> image only

### Authentication --> Future done

- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/verify` - Verify authentication status

### Sections --> DONE

- `GET /api/sections` - Get all sections
- `GET /api/sections/:id` - Get a specific section
- `POST /api/sections` - Create a new section (admin only)
- `PUT /api/sections/:id` - Update a section (admin only)
- `DELETE /api/sections/:id` - Delete a section (admin only)

### Projects --> DONE

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project (admin only)
- `PUT /api/projects/:id` - Update a project (admin only)
- `DELETE /api/projects/:id` - Delete a project (admin only)

### Team Members --> DONE

- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get a specific team member
- `POST /api/team` - Create a new team member (admin only)
- `PUT /api/team/:id` - Update a team member (admin only)
- `DELETE /api/team/:id` - Delete a team member (admin only)

### Testimonials --> DONE

- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get a specific testimonial
- `POST /api/testimonials` - Create a new testimonial (will be reviewed by the admin to accept)
- `PUT /api/testimonials/:id` - Update a testimonial (will be reviewed by the admin to accept)
- `DELETE /api/testimonials/:id` - Delete a testimonial (admin only)

### Contact Form --> DONE

- `POST /api/contact` - Submit a contact form
- `GET /api/contact/submissions` - Get all contact submissions (admin only)
- `DELETE /api/contact/submissions/:id` - Delete a contact submission (admin only)

### Future Enhancements

- API rate limiting
- API documentation with Swagger
- Real-time updates with WebSockets
- Advanced search functionality
