import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export const counter$ = timer(0, 1000).pipe(shareReplay());

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
        <button type="button" class="btn btn-outline-primary me-4" (click)="navigateTo('wont-work-ugly-fix')">
          wont-work (w/ ugly fix)
        </button>
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

  navigateTo(path: 'will-work' | 'wont-work' | 'wont-work-ugly-fix'): void {
    this._router.navigate([path]);
  }
}
