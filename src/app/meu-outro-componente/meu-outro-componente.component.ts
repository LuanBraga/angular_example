import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { ProjectsService } from '../services/projects.service';


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
    private projectService: ProjectsService
  ) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit(): void {
    this.projectService.projects.subscribe(
      projects => {
        this.projects = projects;
      } 
    )
  }

  getProjects(){
    this.projectService.getProjects(this.searchText);
  }
}
