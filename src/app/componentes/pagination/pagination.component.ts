import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() paginas: any = [];
  @Input() paginaActual: number;
  @Output() pagina = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  

  cambiarPagina(index) {
    this.paginas = [];
    this.pagina.emit(index);
  }
}
