import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  public title: string;
  public newName: string;
  public nombres: Array<string>;

  constructor() { 
    this.title = 'Hola mundo';
    this.newName = '';
    this.nombres = [ 'Jose', 'Pedro', 'Maria' ];
  }

  ngOnInit(): void {
  
  }

  alta(): void {
    this.nombres.push(this.newName);
    this.newName = '';
  }
}
