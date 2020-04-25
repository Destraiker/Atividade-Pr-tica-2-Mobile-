import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  getValue(teste) {
    console.log(teste);
  }
  eventos = [
    { name: 'Villa Mix', date: '9/26/2020', time: '10am', location: { address: 'Mineirão ', city: 'Belo Horizonte', country: 'Brasil' } }
  ];
  evento = [
    { name: 'Villa Mix', date: '9/26/2020', time: '10am', location: { address: 'Mineirão ', city: 'Belo Horizonte', country: 'Brasil' } },
    { name: 'Rock In Rio', date: '4/15/2020', time: '9am', onlineUrl: 'https://www.rockinrio.com.br/' },
    { name: 'Campus Party', date: '6/10/2020', time: '8am' },
    { name: 'Loolapalooza', date: '4/15/2020', time: '9am', onlineUrl: 'http://www.loolapalooza.com' },
    { name: 'Samba Prime', date: '6/10/2020', time: '8am', location: { address: 'Expominas', city: 'Belo Horizonte', country: 'Brasil' }, onlineUrl: 'http://www.sambaprime.com.br' }
  ];
  constructor() { }

  atulizarEndereco(novoEndereco) {  
    for(let Eventos of this.evento){
      if(Eventos.location !==undefined){
        if(novoEndereco.name ===Eventos.name){
          Eventos.location=novoEndereco.location;      
        }
      }
    }
  }

  ngOnInit(): void {
  }

}


