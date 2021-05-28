import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-meu-outro-componente',
  templateUrl: './meu-outro-componente.component.html',
  styleUrls: ['./meu-outro-componente.component.css']
})
export class MeuOutroComponenteComponent implements OnInit {

  myValue = 0;

  myList = [1, 2, 3, 4, 5, 6];

  name = "Teste Angular";

  alunos = [{nome: ''}];

  searchText = "";

  projects = [
    {full_name: ""}
  ]

  constructor(
    private alunosService: AlunosService,
    private http: HttpClient
  ) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit(): void {
  }

  getProjects(){
    if(this.searchText){
      const url = `https://api.github.com/search/repositories?q=${this.searchText}`;
      this.http.get(url).subscribe(
        response => {
          this.projects = response['items'];
        }
      );
    }
  }

}
