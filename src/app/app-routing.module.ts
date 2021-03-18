import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenComponent } from './components/imagen/imagen.component';

const routes: Routes = [
  {path: "", component: SearchComponent},
  {path: "fotos/:id", component: ImagenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
