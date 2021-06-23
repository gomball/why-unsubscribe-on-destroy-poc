import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent {
  constructor(private readonly _router: Router) {}

  navigateTo(path: 'will-work' | 'wont-work'): void {
    this._router.navigate([path]);
  }
}
