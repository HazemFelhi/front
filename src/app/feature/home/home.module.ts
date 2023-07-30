import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { PanierComponent } from './panier/panier.component';
import { HomeRoutingModule } from './home-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueDetailsComponent } from './catalogue/catalogue-details/catalogue-details.component';
@NgModule({
  declarations: [
    HomePageComponent,
    LandingPageComponent,
    AproposComponent,
    ContactComponent,
    PanierComponent,
    CatalogueComponent,
    CatalogueDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    HomeRoutingModule

  ],
  exports : [
    HomePageComponent
  ]
})
export class HomeModule { }
