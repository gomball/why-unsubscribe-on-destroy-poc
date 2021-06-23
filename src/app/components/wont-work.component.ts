import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { counter$ } from 'src/app/app.component';

@Component({
  template: `<span class="text-danger">counter: {{ counter }}</span>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WontWorkComponent implements OnInit {
  counter = 0;

  constructor(private readonly _cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    counter$.subscribe((c) => {
      this.counter = c;
      console.log('WontWorkComponent', this.counter);
      this._cd.markForCheck();
    });
  }
}
