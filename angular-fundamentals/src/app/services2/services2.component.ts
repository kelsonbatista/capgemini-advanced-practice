import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css']
})
export class Services2Component {

  descricao = '';

  // ao deixar o metodo publico pode ser acessados de qualquer lugar
  constructor(public logger: LoggerService) {}

  adicionarProduto() {
    this.logger.logar(`O produto ${this.descricao} foi adicionado com sucesso!`);
  }
}
