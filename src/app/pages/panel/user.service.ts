import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "./user.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "http://localhost:5000/users";
  private apiBinUrl = "http://localhost:5000/bin";

  users: User[];
  data;

  constructor(private http: HttpClient) {}

  // CRUD http requests

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }
  getUserById(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.get<User>(url);
  }
  updateUserData(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions);
  }

  // CRUD Server Bin
  getFromBin(): Observable<User[]> {
    return this.http.get<User[]>(this.apiBinUrl);
  }

  addToBin(user: User): Observable<User> {
    return this.http.post<User>(this.apiBinUrl, user, httpOptions);
  }
  deleteFromBin(user: User): Observable<User> {
    const url = `${this.apiBinUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }
}
