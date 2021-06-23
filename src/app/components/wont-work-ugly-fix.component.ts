import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { counter$ } from 'src/app/app.component';

@Component({
  template: `<span class="text-warning">counter: {{ counter }}</span>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WontWorkUglyFixComponent implements OnInit, OnDestroy {
  private _subsc!: Subscription;
  counter = 0;

  constructor(private readonly _cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._subsc = counter$.subscribe((c) => {
      this.counter = c;
      console.log('WontWorkUglyFixComponent', this.counter);
      this._cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this._subsc.unsubscribe();
  }
}
