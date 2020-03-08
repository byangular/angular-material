import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'address', component: AddressComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'table', component: TableComponent},
  { path: 'tree', component: TreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
