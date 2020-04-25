import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() Location;
  @Input() Nome;
  @Output() atualizaEndereco = new EventEmitter();
  Dados = [
    { name: this.Nome, location: { address: '', city: '', country: '' } }
  ];

  constructor() { }

  Display() {
    if (document.getElementById("formEndereco").style.display === "none") {
      document.getElementById("formEndereco").style.display = "block";
      document.getElementById("botao").innerHTML="Fechar Novo Endereço";
    } else {
      document.getElementById("formEndereco").style.display = "none";
      document.getElementById("botao").innerHTML="Abrir Novo Endereço";
    }
  }

  Atualizar(local, cidade, pais) {
    this.Dados=[{ name: this.Nome, location: { address: local, city: cidade, country: pais } }];
    this.atualizaEndereco.emit({name: this.Nome,location: {address: local,city:cidade, country:pais}});
  }
  ngOnInit(): void {

  }

}
