import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { ModelsModule } from './models/models.module';
import { ConfigsModule } from './configs/configs.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    ModelsModule,
    ConfigsModule
  ],
  exports : [
    ComponentsModule
  ]
})
export class SharedModule { }
