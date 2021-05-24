import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input('comentarios') comentarios = [];
  visible = false;
  constructor() { }

  ngOnInit(): void {
  }

}
