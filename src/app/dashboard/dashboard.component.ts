import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items = [
    {
      url:'/dashboard/mostrador',
      title: 'Mostrador',
      ico: 'presentation-screen-.png'
    },
    {
      url:'/dashboard/reportes',
      title: 'Reportes',
      ico: 'report-file.png'
    },
    {
      url:'/dashboard/cargar',
      title: 'Cargar',
      ico: 'upload.png'
    },
    {
      url:'/dashboard/lista-corregir',
      title: 'Corregir',
      ico: 'checklist.png'
    },
    {
      url:'/dashboard/imagenes',
      title: 'Imagenes',
      ico: 'image-file.png'
    },
  ];
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goTo(url: string) {
    return this.router.navigate([url]);
  }
}
