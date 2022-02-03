import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8000/api/users");
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      "http://localhost:8000/api/user/create",
      user
    );
  }

  deleteUser(studentId: User) {
    return this.http.delete(
      "http://localhost:8000/api/user/" + studentId + "/delete"
    );
  }
}
