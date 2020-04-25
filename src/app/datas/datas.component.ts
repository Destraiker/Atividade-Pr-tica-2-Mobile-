import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {

  @Input() evento;
  
  constructor() { }

  ngOnInit(): void {
  }

}
