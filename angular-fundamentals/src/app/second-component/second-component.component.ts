import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {

  nome = "João";
  dataNascimento = "1995-01-01";
  urlImage = "/assets/sede.jpg";
  showBirthdate() {
    alert(`A data de nascimento é ${this.dataNascimento}`)
  }
}
