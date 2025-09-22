import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectsResponse, CategoriesResponse } from '../../interfaces/IProject';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  getProjects(page: number = 1, limit: number = 6): Observable<ProjectsResponse> {
    return this.http.get<ProjectsResponse>(`${this.apiUrl}/projects?page=${page}&limit=${limit}`);
  }

  getCategories(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(`${this.apiUrl}/categories`);
  }

  /*   getProjectById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/projects/${id}`);
  }

  createProject(project: any) {
    return this.http.post<any>(`${this.apiUrl}/projects`, project);
  }

  updateProject(id: string, project: any) {
    return this.http.put<any>(`${this.apiUrl}/projects/${id}`, project);
  }

  deleteProject(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/projects/${id}`);
  } */
}
