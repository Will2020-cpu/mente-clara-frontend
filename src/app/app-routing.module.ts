import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { FormArticuloComponent } from './components/form-articulo/form-articulo.component';
import { MediaComponent} from './components/media/media.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:'articulo',component:ArtComponent},
  {path:'form-agregar',component:FormArticuloComponent},
  {path:'media',component:MediaComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:MediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
