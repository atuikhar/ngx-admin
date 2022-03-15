import { AgeValidator } from "./../custom.validator";
import { NameValidators, AdultValidator } from "../custom.validator";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { v4 as uuidv4 } from "uuid";
import { User } from "../user.model";

@Component({
  selector: "ngx-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.scss"],
})
export class AdduserComponent implements OnInit {
  @Output() submittedUser = new EventEmitter();
  @Output() updatedUser = new EventEmitter();

  @Input() editUserData: User;

  editing: boolean = false;

  form: FormGroup;

  get name() {
    return this.form.get("name");
  }

  get email() {
    return this.form.get("email");
  }
  get dob() {
    return this.form.get("dob");
  }

  get img() {
    return this.form.get("img");
  }
  get status() {
    return this.form.get("status");
  }

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        NameValidators.cannotContainSpace,
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        NameValidators.cannotContainSpace,
      ]),
      dob: new FormControl("", [
        Validators.required,
        AdultValidator(18),
        AgeValidator(0),
      ]),
      img: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
      options: new FormGroup({
        painting: new FormControl(false),
        games: new FormControl(false),
        music: new FormControl(false),
      }),
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.form = new FormGroup({
      name: new FormControl(`${this.editUserData.name}`, [
        Validators.required,
        Validators.minLength(4),
        NameValidators.cannotContainSpace,
      ]),
      email: new FormControl(`${this.editUserData.email}`, [
        Validators.required,
        Validators.email,
        NameValidators.cannotContainSpace,
      ]),
      dob: new FormControl(`${this.editUserData.dob}`, Validators.required),
      img: new FormControl(`${this.editUserData.img}`, Validators.required),
      status: new FormControl(
        `${this.editUserData.status}`,
        Validators.required
      ),
      options: new FormGroup({
        painting: new FormControl(
          this.editUserData.interest.includes("painting") === true
        ),
        games: new FormControl(
          this.editUserData.interest.includes("games") === true
        ),
        music: new FormControl(
          this.editUserData.interest.includes("music") === true
        ),
      }),
    });
    this.editing = true;
  }

  onSubmit() {
    const Id = uuidv4();
    const options = this.form.value.options;
    const result = Object.keys(options).filter((key) => options[key]);

    if (!this.editing) {
      const newUser = {
        id: Id,
        name: this.form.value.name,
        dob: this.form.value.dob,
        email: this.form.value.email,
        img: this.form.value.img,
        status: this.form.value.status,
        interest: result,
      };

      this.submittedUser.emit(newUser);
      this.ngOnInit();
    } else {
      const updateUser = {
        id: this.editUserData.id,
        name: this.form.value.name,
        dob: this.form.value.dob,
        email: this.form.value.email,
        img: this.form.value.img,
        status: this.form.value.status,
        interest: result,
      };

      this.updatedUser.emit(updateUser);
      this.editing = false;
      this.ngOnInit();
    }
  }
}
