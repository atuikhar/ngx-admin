import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  SimpleChanges,
} from "@angular/core";
import { User } from "../user.model";
import { Location } from "@angular/common";
import { UserService } from "../user.service";

@Component({
  selector: "ngx-bin",
  templateUrl: "./bin.component.html",
  styleUrls: ["./bin.component.scss"],
})
export class BinComponent implements OnInit {
  @Output() restoreDataEmit = new EventEmitter();
  @Input() binData: User;

  data;

  constructor(private userService: UserService, private location: Location) {}
  ngOnInit(): void {
    this.userService.getFromBin().subscribe((data) => (this.data = data));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.data.unshift(this.binData);
    this.ngOnInit();
  }
  goBack() {
    this.location.back();
  }
  restoreUserData(user: User) {
    this.restoreDataEmit.emit(user);
    this.deleteUserForever(user);
  }
  deleteUserForever(user: User) {
    this.userService
      .deleteFromBin(user)
      .subscribe(() => (this.data = this.data.filter((u) => u.id !== user.id)));
  }
}
