import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-panel",
  template: `
    <nb-layout>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ["./panel.component.scss"],
})
export class PanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
