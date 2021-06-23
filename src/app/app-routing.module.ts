import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WillWorkComponent } from './components/will-work/will-work.component';
import { WontWorkComponent } from './components/wont-work/wont-work.component';

const routes: Routes = [
  { path: 'will-work', component: WillWorkComponent },
  { path: 'wont-work', component: WontWorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
