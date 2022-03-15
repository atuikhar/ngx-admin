import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UiService {
  private showAddUserForm: boolean = false;
  private showUpdateForm: boolean = false;

  private subject = new Subject<any>();

  constructor() {}

  toggleAddNewUserForm(): void {
    this.showAddUserForm = !this.showAddUserForm;
    this.subject.next(this.showAddUserForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
