import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { CustomizedPipeComponent } from './customized-pipe/customized-pipe.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { FormsModule } from '@angular/forms';
import { ListRenderingComponent } from './list-rendering/list-rendering.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplicaPorPipe,
    CustomizedPipeComponent,
    TwoWayDataBindComponent,
    ListRenderingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
