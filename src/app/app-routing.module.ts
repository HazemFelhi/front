import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
 {
  path:'' , 
  loadChildren: () => import('./feature/home/home-routing.module').then(m=>m.HomeRoutingModule)
 },
{
  path:'' , 
  loadChildren: () => import('./feature/entreprise/entreprise-routing.module').then(m=>m.EntrepriseRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
