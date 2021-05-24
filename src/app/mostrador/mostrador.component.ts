import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrador',
  templateUrl: './mostrador.component.html',
  styleUrls: ['./mostrador.component.css']
})
export class MostradorComponent implements OnInit {
  claseTile = 'is-info';
  claseTile2 = 'is-info';

  constructor() { }

  ngOnInit(): void {
  }

}
