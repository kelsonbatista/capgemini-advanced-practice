import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParametersPageComponent } from './parameters-page/parameters-page.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

// page1 é a url no navegador
const routes: Routes = [
  { path: "page1", component: FirstPageComponent },
  { path: "page2", component: SecondPageComponent },
  { path: "page3", component: ThirdPageComponent },
  { path: "pageparameters/:id", component: ParametersPageComponent },
  { path: 'lazyloading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: "protectedpage", component: ProtectedPageComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
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
