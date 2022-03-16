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

  constructor(private http: HttpClient) {
    // const jsonData = [
    //   {
    //     id: "f445429f-59d1-445b-be8a-2274bda802e3",
    //     name: "Angular",
    //     dob: "2022-03-03",
    //     email: "a@gmail.com",
    //     img: "https://images.unsplash.com/photo-1578824593391-4f226d804c76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    //     status: "Married",
    //     interest: ["music"],
    //   },
    // ];
    // localStorage.setItem("datas", JSON.stringify(jsonData));
  }

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
