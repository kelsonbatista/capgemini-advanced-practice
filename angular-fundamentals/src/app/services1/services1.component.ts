import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component {
  nome = '';

  adicionarNome() {
    console.log(`O nome ${this.nome} foi adicionado com sucesso!`);
  }
}
