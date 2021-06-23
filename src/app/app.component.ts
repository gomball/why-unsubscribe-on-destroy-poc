import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="font-weight-light">Why unsubscribe on destroy p.o.c.</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-outline-primary me-4" (click)="navigateTo('will-work')">will-work</button>
        <button type="button" class="btn btn-outline-primary me-4" (click)="navigateTo('wont-work')">wont-work</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 py-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>`,
  styles: []
})
export class AppComponent {
  constructor(private readonly _router: Router) {}

  navigateTo(path: 'will-work' | 'wont-work'): void {
    this._router.navigate([path]);
  }
}
