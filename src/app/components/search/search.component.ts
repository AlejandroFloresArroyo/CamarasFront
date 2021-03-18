import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  codigo: string = '';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.codigo);
    this.router.navigate(['fotos', this.codigo])
  }

}
