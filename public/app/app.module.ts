import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { GeneratorComponent }  from './generator.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GeneratorComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}