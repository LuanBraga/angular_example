import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-outro-componente',
  templateUrl: './meu-outro-componente.component.html',
  styleUrls: ['./meu-outro-componente.component.css']
})
export class MeuOutroComponenteComponent implements OnInit {

  myValue = 0;

  myList = [1, 2, 3, 4, 5, 6];

  name = "Teste Angular";

  constructor() { }

  ngOnInit(): void {
  }

}
