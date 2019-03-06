import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxAnimationsModule, AnimationsService, AnimationDefinition } from 'ngx-animations';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, CommonModule, NgxAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _animationsService: AnimationsService) {
    const animationDefinition = new AnimationDefinition({}, [
      { background: 'blue', offset: 0.25 },
      { background: 'green', offset: 0.5 },
      { background: 'yellow', offset: 0.75 },
      { background: 'black', offset: 1 }
    ]);
    this._animationsService.addAnimations([{ name: 'aCustomAnimation', animation: animationDefinition }]);
  }
}
