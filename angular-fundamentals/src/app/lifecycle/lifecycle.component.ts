import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  horario = new Date();
  timer: any = null!;

  @Input() txt = '';

  ngOnInit(): void {
    console.log("O evento OnInit disparou");
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  ngOnDestroy(): void {
      clearInterval(this.timer);
  }

}
