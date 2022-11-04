import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  horario = new Date();
  timer: any = null!;

  ngOnInit(): void {
    console.log("O evento OnInit disparou");
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

}
