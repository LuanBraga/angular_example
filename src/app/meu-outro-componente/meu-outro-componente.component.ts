import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';

interface gitHubResponse {
  incomplete_results: boolean;
  items: any[];
  total_count: number;
}

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
      const url = `https://api.github.com/search/repositories`;

      const params = new HttpParams().set('q', this.searchText);
      const headers = new HttpHeaders().set('Content-Type', 'text/html');
      
      this.http.get<gitHubResponse>(url, {params, headers}).subscribe(
        response => {
          this.projects = response.items;
        }
      );
    }
  }

}
