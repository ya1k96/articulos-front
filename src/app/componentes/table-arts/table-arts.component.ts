import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-arts',
  templateUrl: './table-arts.component.html',
  styleUrls: ['./table-arts.component.css']
})
export class TableArtsComponent implements OnInit {
  @Input() docs = [];

  constructor() { }

  ngOnInit(): void {
  }

}
