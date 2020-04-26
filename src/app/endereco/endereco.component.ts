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

  constructor() { }

  Display() {
    if (document.getElementById("formEndereco"+this.Nome).style.display === "none") {
      document.getElementById("formEndereco"+this.Nome).style.display = "block";
      document.getElementById("botao"+this.Nome).innerHTML="Fechar Novo Endereço";
    } else {
      document.getElementById("formEndereco"+this.Nome).style.display = "none";
      document.getElementById("botao"+this.Nome).innerHTML="Abrir Novo Endereço";
    }
  }

  Atualizar(local, cidade, pais) {
    this.atualizaEndereco.emit({name: this.Nome,location: {address: local,city:cidade, country:pais}});
  }
  ngOnInit(): void {

  }

}
