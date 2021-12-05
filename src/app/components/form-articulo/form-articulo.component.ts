import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticulosModel } from 'src/app/models/articulo.models';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-form-articulo',
  templateUrl: './form-articulo.component.html',
  styleUrls: ['./form-articulo.component.css']
})
export class FormArticuloComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    titulo: new FormControl(''),
    descripcion:new FormControl(''),
    categoria:new FormControl(''),
    autor:new FormControl(''),
  });
  public categorias:string[] = ["Ansiedad","Ezquizofrenia","Fobias y traumas","Demencia","Trastornos Afectivas","Otros trastornos y neurologicos mentales"];

  constructor( private formBuilder: FormBuilder,
    private articuloService:ArticuloService,private router:Router ) { 
      this.formGroup
    }

  ngOnInit(): void {
    this.buidlForm();
  }


  public buidlForm(){
    this.formGroup = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      autor: ['',Validators.required]
    });
  }


  public agregarArticulo(){
    const articulo:ArticulosModel = this.formGroup.value;
    this.articuloService.agregarArticulos(articulo).then(response =>{
      console.log(articulo);
      console.log(response);
      this.router.navigate(['/articulo']);
    })
  }
}
