import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GeneratorComponent }  from './generator.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ GeneratorComponent ],
  bootstrap:    [ GeneratorComponent ]
})

export class GeneratorModule {}