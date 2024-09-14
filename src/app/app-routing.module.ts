import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SobreComponent } from './sobre/sobre.component';
import { ErroComponent } from './erro/erro.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contato',component:ContatoComponent},
  {path:'noticias',component:NoticiasComponent},
  {path:'sobre',component:SobreComponent},
  {path:'**',component:ErroComponent},
  {path:'',redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
