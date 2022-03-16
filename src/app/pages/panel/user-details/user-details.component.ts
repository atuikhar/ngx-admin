import { Component, Input, OnInit } from "@angular/core";
import { User } from "../user.model";

@Component({
  selector: "ngx-user-details",
  templateUrl: "./user-details.component.html",
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
