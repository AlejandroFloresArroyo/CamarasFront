import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchComponent } from './search/search.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ImagenComponent } from './imagen/imagen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardImgComponent } from './card-img/card-img.component';

@NgModule({
  declarations: [
    NavComponent,
    SearchComponent,
    ImagenComponent,
    CardImgComponent,
  ],
  exports: [NavComponent, SearchComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    CrystalLightboxModule,
    RouterModule,
  ],
})
export class ComponentsModule {}
