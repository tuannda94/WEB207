import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(apiUrl);
  }

  getStudent(id: undefined | string) {
    return this.http.get(`${apiUrl}/${id}`);
    // ~ apiUrl + '/' + id
    // ~ 'http://localhost:3000/students/1
  }

  deleteStudent(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  createStudent(obj: {name:string, class: string}) {
    return this.http.post(apiUrl, obj);
  }

  updateStudent(id: number|string, obj: {name:string, class: string}) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }
}
