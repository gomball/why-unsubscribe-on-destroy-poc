import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { counter$ } from 'src/app/app.component';

@Component({
  template: `<span class="text-success">counter: {{ counter$ | async }}</span>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WillWorkComponent {
  readonly counter$ = counter$.pipe(tap((v) => console.log('WillWorkComponent', v)));
}
