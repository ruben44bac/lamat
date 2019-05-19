import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./pages/home/home.module#HomeModule"
  },
  {
    path: "history",
    loadChildren: "./pages/history/history.module#HistoryModule"
  },
  {
    path: "contact",
    loadChildren: "./pages/contact/contact.module#ContactModule"
  },
  {
    path: "about",
    loadChildren: "./pages/about/about.module#AboutModule"
  },
  {
    path: "order",
    loadChildren: "./pages/order/order.module#OrderModule"
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
