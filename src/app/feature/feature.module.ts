import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { EntrepriseModule } from './entreprise/entreprise.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    EntrepriseModule
  ],
  exports: [
    HomeModule
  ]
})
export class FeatureModule { }
