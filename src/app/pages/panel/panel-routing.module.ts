import { BinComponent } from "./bin/bin.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashComponent } from "./dash/dash.component";

const routes: Routes = [
  { path: "", component: DashComponent },
  { path: "bin", component: BinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
