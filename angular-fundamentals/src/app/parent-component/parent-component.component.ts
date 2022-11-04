import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  sobrenome = 'Silva';

  mostraNomeCompleto(nomeCompleto: any) {
    alert(`O nome completo é ${nomeCompleto}`)
  }
}
