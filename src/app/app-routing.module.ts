import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { FormArticuloComponent } from './components/form-articulo/form-articulo.component';
import { MediaComponent} from './components/media/media.component'
const routes: Routes = [
  {path:'articulo',component:ArtComponent},
  {path:'form-agregar',component:FormArticuloComponent},
  {path:'',component:ArticuloComponent},
  {path:'media',component:MediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
