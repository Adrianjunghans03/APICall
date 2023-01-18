import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ListComponent } from './list/list.component';
import { userReducer } from './api.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './api.effect';
import { ApiCallService } from './ApiCall/api-call.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({rootValue: userReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production, autoPause: true}),
    EffectsModule.forRoot([ApiEffects])
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { };
