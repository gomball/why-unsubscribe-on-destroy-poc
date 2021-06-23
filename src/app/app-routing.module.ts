import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WontWorkComponent } from './components//wont-work.component';
import { WillWorkComponent } from './components/will-work.component';
import { WontWorkUglyFixComponent } from './components/wont-work-ugly-fix.component';

const routes: Routes = [
  { path: 'will-work', component: WillWorkComponent },
  { path: 'wont-work', component: WontWorkComponent },
  { path: 'wont-work-ugly-fix', component: WontWorkUglyFixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
