import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-list-rendering',
  templateUrl: './list-rendering.component.html',
  styleUrls: ['./list-rendering.component.css']
})
export class ListRenderingComponent{
  celulares: Celular[] = [
    { id: 1, nome: "Celular Galaxy", descricao: "ggggggggggggg", esgotado: false },
    { id: 2, nome: "Celular Apple", descricao: "aaaaaaaaaaaaaa", esgotado: true },
    { id: 3, nome: "Celular Xiomi", descricao: "xxxxxxxxxxxxxx", esgotado: false },
  ]
}
