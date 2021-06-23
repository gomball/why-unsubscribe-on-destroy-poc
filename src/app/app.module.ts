import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WillWorkComponent } from './components/will-work.component';
import { WontWorkUglyFixComponent } from './components/wont-work-ugly-fix.component';
import { WontWorkComponent } from './components/wont-work.component';

@NgModule({
  declarations: [AppComponent, WillWorkComponent, WontWorkComponent, WontWorkUglyFixComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
