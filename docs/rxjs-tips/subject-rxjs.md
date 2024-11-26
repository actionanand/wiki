---
sidebar_position: 1
sidebar_label: 'RxJs Subject - part 1'
title: RxJs Subject Part 1
---

1. How to do some logical operations after we stopped typing inside input field in Angular

Two way binding `[(ngModal)]` can be interpreted as property binding `[ngModel]` and event binding `(ngModelChange)`

```ts
import { OnInit, Component } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  template: `<input [ngModel]='inputTyped' (ngModelChange)='onInputChanged($event)' />`
})
export class AppComponent implements OnInit  {
  inputTyped: string;
  inputChanged: Subject<string> = new Subject<string>();

    constructor() {}

    ngOnInit() {
      this.inputChanged.pipe(
        debounceTime(500))
        .subscribe(typedText => {
          console.log(typedText);
          // Do any logical things
        });
    }

    onInputChanged(text: string) {
      this.inputChanged.next(text);
    }
}
```

2. `BehaviorSubject` to pass data as observable

```ts title="subject.service.ts"
private toggle = new BehaviorSubject<boolean>(false);

toggle$ = this.toggle.asObservable(); // can be subscribed anywhere

onChangeToggle(value: boolean) {
  this.toggle.next(value);
}
```