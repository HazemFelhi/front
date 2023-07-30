import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntrepriseNewComponent } from "./entreprise-new/entreprise-new.component";
import { CreateEntrepriseComponent } from './create-entreprise/create-entreprise.component';
import { JoinEntrepriseComponent } from './join-entreprise/join-entreprise.component';
import { EntrepriseComponent } from './entreprise.component';

const routes: Routes = [
    {path:'profile-entreprise' , component:EntrepriseComponent},
     {path:'add-entreprise' , component:EntrepriseNewComponent} ,
     {path:'create-entreprise' , component:CreateEntrepriseComponent},
     {path:'join-entreprise' , component:JoinEntrepriseComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntrepriseRoutingModule { }