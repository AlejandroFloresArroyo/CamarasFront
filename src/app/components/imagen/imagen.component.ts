import { PaqueteService } from './../../services/paquete.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'],
})
export class ImagenComponent implements OnInit {
  id: string;
  fotos: string[] = [];
  // form: FormGroup;
  // webData = [
  //   { id: 1, name: 'PHP' },
  //   { id: 2, name: 'Laravel' },
  //   { id: 3, name: 'Angular' },
  //   { id: 4, name: 'React' },
  // ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly paqueteService: PaqueteService,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params.id;
    // this.form = this.formBuilder.group({
    //   orders: new FormArray([]),
    // });

    // this.addCheckboxesToForm();
  }

  async ngOnInit(): Promise<void> {
    console.log('Ruta', this.id);
    await this.getFotos();
  }

  async getFotos() {
    this.paqueteService.getFotos(this.id).subscribe((res: any) => {
      if (res.data.comprado) {
        res.data.fotos.forEach((element: any) => {
          this.fotos.push(element.ruta);
        });
      } else {
        res.data.fotos.forEach((element: any) => {
          this.fotos.push(element.ruta_Demo);
        });
      }
    });
  }

  // get ordersFormArray() {
  //   return this.form.controls.orders as FormArray;
  // }

  // private addCheckboxesToForm() {
  //   this.webData.forEach(() =>
  //     this.ordersFormArray.push(new FormControl(false))
  //   );
  // }

  downloadImage(foto: string) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(foto);
    a.download = foto;
    document.body.appendChild(a);
    a.click();
  }

  // submit() {
  //   const selectedOrderIds = this.form.value.orders
  //     .map((checked: any, i: any) => (checked ? this.webData[i].id : null))
  //     .filter((v: any) => v !== null);
  //   console.log(selectedOrderIds);
  // }
}
