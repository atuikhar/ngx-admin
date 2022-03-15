import { Ng2SmartTableModule } from "ng2-smart-table";
import { PanelComponent } from "./panel.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelRoutingModule } from "./panel-routing.module";
import { DashComponent } from "./dash/dash.component";
import {
  NbButtonGroupModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbOptionModule,
  NbSelectModule,
  NbSidebarModule,
  NbTreeGridModule,
  NbUserModule,
} from "@nebular/theme";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { BinComponent } from "./bin/bin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiService } from "./ui.service";
import { UserService } from "./user.service";
import { UserComponent } from "./user/user.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

@NgModule({
  declarations: [
    PanelComponent,
    DashComponent,
    BinComponent,
    UserComponent,
    AdduserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbOptionModule,
    NbSelectModule,
    NbCheckboxModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbButtonGroupModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    NbListModule,
    NbUserModule,
  ],
  providers: [UiService, UserService],
})
export class PanelModule {}
