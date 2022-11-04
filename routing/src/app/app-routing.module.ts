import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

// page1 é a url no navegador
const routes: Routes = [
  { path: "page1", component: FirstPageComponent },
  { path: "page2", component: SecondPageComponent },
  { path: "page3", component: ThirdPageComponent },
  { path: "", redirectTo: "page1", pathMatch: 'full' },
  { path: "**", component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
