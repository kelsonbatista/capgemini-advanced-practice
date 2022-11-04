import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component {
  nome = '';

  // private, nao podera ser acessivel ou chamado por nenhum lugar
  // ao chamar o logger service, pelo decorator injectable ja injetou o serviço no componente
  constructor(private logger: LoggerService) { }

  adicionarNome() {
    // console.log(`O nome ${this.nome} foi adicionado com sucesso!`);
    this.logger.logar(`O nome ${this.nome} foi adicionado com sucesso!`)
  }
}
