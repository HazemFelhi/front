import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from "./catalogue/catalogue.component";
const routes: Routes = [
    {path:'' , component:HomePageComponent , children: [
        {path:'' , component:LandingPageComponent},
        {path:'Apropos' , component:AproposComponent},
        {path:'contact' , component:ContactComponent},
        {path:'Panier' , component:PanierComponent},
        {path:'Catalogue' , component:CatalogueComponent},
        
     ]  
    }
]





@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }