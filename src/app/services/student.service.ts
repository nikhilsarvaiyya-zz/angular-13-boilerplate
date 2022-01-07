import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Student {
  firstName: string,
  lastName: string,
  email: string,
  mobile: string
}

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8000/api/students')
  }

//   getCat(name: string): Observable<Student> {
//     return this.http.get<Student>('http://localhost:8000/api/students/' + name)
//   }


  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('http://localhost:8000/api/students/send', student)
  }

//   updateCat(cat: Student): Observable<void> {
//     return this.http.put<void>(
//       'http://localhost:8000/api/students/' + cat.name,
//       cat
//     )
//   }

//   deleteCat(name: string) {
//     return this.http.delete('http://localhost:8000/api/students/' + name)
//   }
}