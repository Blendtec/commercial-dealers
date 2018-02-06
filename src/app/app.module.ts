import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StateService, DealerService } from './services';
import { AppConfigModule } from './config';
import { NgPipesModule } from 'ngx-pipes';
import { RepCardComponent } from './rep-card/rep-card.component';

@NgModule({
  declarations: [AppComponent, RepCardComponent],
  imports: [
    AppConfigModule,
    BrowserModule,
    HttpClientModule,
    NgPipesModule,
    FormsModule
  ],
  providers: [
    StateService,
    DealerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
