import { Component, OnInit } from '@angular/core';
import { ArticulosModel } from 'src/app/models/articulo.models';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  public articulos: ArticulosModel[] = [];

  constructor(private articuloService:ArticuloService ) { }

  async ngOnInit(): Promise<void> {
    this.articulos = await this.articuloService.getArticulos();
    console.log(this.articulos)
  }
   public eliminarArticulo(id:number){
    this.articuloService.eliminarArticulo(id).then(async response =>{
      this.articulos = await this.articuloService.getArticulos();
    })
   }
}
