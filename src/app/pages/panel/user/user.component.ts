import { UiService } from "../ui.service";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../user.model";

@Component({
  selector: "ngx-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  @Input() users: User[];
  @Output() addtoBinUser = new EventEmitter();
  @Output() onClickUser = new EventEmitter();
  @Output() onEditUser = new EventEmitter();

  showUserForm: boolean;
  p: number = 1;
  name: string;
  others: any;
  byName: string;
  dob: number;
  email: string;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  addToBin(user) {
    this.addtoBinUser.emit(user);
  }
  onEdit(user) {
    this.onEditUser.emit(user);
    this.uiService.toggleAddNewUserForm();
  }
  showUserDetails(user: User) {
    this.onClickUser.emit(user);
  }
}
