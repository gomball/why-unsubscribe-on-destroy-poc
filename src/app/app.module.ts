import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WillWorkComponent } from './components/will-work/will-work.component';
import { WontWorkComponent } from './components/wont-work/wont-work.component';

@NgModule({
  declarations: [AppComponent, WillWorkComponent, WontWorkComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
