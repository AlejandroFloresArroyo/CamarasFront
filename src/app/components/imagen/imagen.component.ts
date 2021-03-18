import { PaqueteService } from './../../services/paquete.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  id: string;
  fotos: string[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly paqueteService: PaqueteService) {
    this.id = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    console.log("Ruta", this.id);
    this.getFotos();
  }

  getFotos(){
    this.paqueteService.getFotos(this.id).subscribe((res:any) => {
      if (res.data.comprado) {
        res.data.fotos.forEach((element: any) => {
          this.fotos.push(element.ruta)
        });
      }else{
        res.data.fotos.forEach((element: any) => {
          this.fotos.push(element.ruta_Demo)
        });
      }
    });
  }

}
