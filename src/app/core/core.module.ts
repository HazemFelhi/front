import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { GuardsModule } from './guards/guards.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ServicesModule } from './services/services.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    GuardsModule,
    InterceptorsModule,
    ServicesModule,
    AuthentificationModule,
    SharedModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class CoreModule { }
