import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice-juegos',
  templateUrl: './indice-juegos.component.html',
  styleUrls: ['./indice-juegos.component.css']
})
export class IndiceJuegosComponent implements OnInit {

  constructor() { }

  @Input()
  games: string[] = [];

  juegos = [{
    titulo: 'League of Legends',
    genero: 'moba',
    productor: 'riot'
  },
  {
    titulo: 'Sekiro',
    genero: 'Soulslike',
    productor: 'From Software'
  }, 
  {
    titulo: 'Diablo II',
    genero: 'RPG',
    productor: 'Blizzard'
  }]

  juego = {
    titulo: 'League of Legends',
    genero: 'MOBA',
    productor: 'Riot Games'
  };

  ngOnInit(): void {
  }

}
