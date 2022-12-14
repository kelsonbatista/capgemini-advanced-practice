import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameters-page',
  templateUrl: './parameters-page.component.html',
  styleUrls: ['./parameters-page.component.css']
})
export class ParametersPageComponent implements OnInit {
  id: number | null = null;
  nome: string | null = null;
  idade: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })

    this.route.queryParamMap.subscribe(params => {
      this.nome = params.get("nome");
      this.idade = Number(params.get("idade"));
    })
  }

}
