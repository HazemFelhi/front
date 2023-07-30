import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseNewComponent } from './entreprise-new/entreprise-new.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { CreateEntrepriseComponent } from './create-entreprise/create-entreprise.component';
import { JoinEntrepriseComponent } from './join-entreprise/join-entreprise.component';
import { EntrepriseComponent } from './entreprise.component';
@NgModule({
  declarations: [
    EntrepriseNewComponent,
    CreateEntrepriseComponent,
    JoinEntrepriseComponent,
    EntrepriseComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    EntrepriseRoutingModule
  ]
})
export class EntrepriseModule { }
