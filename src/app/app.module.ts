import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactModule } from './contact/contact.module';
import { ActivitiesModule } from './activities/activities.module';
import { EindreflectieModule } from './eindreflectie/eindreflectie.module';
import { VerslagDenemarkenModule } from './activities/verslag-denemarken/verslag-denemarken.module';
import { VerslagAcaItModule } from './activities/verslag-aca-it/verslag-aca-it.module';
import { VerslagSintOdaModule } from './activities/verslag-sint-oda/verslag-sint-oda.module';
import { VerslagYappaModule } from './activities/verslag-yappa/verslag-yappa.module';
import { VerslagInnovatierouteModule } from './activities/verslag-innovatieroute/verslag-innovatieroute.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HomeModule,
    ToolbarModule,
    ContactModule,
    ActivitiesModule,
    EindreflectieModule,
    VerslagDenemarkenModule,
    VerslagAcaItModule,
    VerslagSintOdaModule,
    VerslagYappaModule,
    VerslagInnovatierouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
