import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "../user.model";
import { UserService } from "../user.service";
import { UiService } from "../ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: "ngx-dash",
  templateUrl: "./dash.component.html",
})
export class DashComponent implements OnInit {
  subscription: Subscription;
  showAddUserForm: boolean;
  showUpdateForm: boolean;
  users: User[] = [];
  user: User;
  editUserData: User;
  binData?: User;

  constructor(private userService: UserService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddUserForm = value));
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    //Get Data from localStorage OnInit
    // this.users = JSON.parse(localStorage.getItem("datas"));
  }
  toggleForm() {
    this.uiService.toggleAddNewUserForm();
  }

  toBin(user: User) {
    this.userService.addToBin(user).subscribe((user) => (this.binData = user));

    this.userService
      .deleteUser(user)
      .subscribe(
        () => (this.users = this.users.filter((u) => u.id !== user.id))
      );
  }

  addNewUser(user: User) {
    this.userService
      .addUser(user)
      .subscribe((user) => this.users.unshift(user));
  }
  showUser(user: User) {
    this.showAddUserForm = false;
    this.userService.getUserById(user).subscribe((user) => {
      this.user = user;
    });
  }
  editUser(user: User) {
    this.userService.getUserById(user).subscribe((user) => {
      this.editUserData = user;
    });
  }
  updateData(user: User) {
    this.userService.updateUserData(user).subscribe((user) => {
      // this.users.forEach((curr, index) => {
      //   if (user.id === curr.id) {
      //     this.users.splice(index, 1);
      //   }
      // });
      this.users.push(user);
      this.ngOnInit();
    });
  }

  restoreData(user: User) {
    this.addNewUser(user);
  }
}
