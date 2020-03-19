import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  
  title = 'DemoBergamo';
  getVal(){
    return 6;
  }
  HTMLstring = "<div><p>Prova</p></div>";
  linkurl = "https://google.it";
    
  @Input()
  titoloinput: string;

  lista = [1,2];

  myDate : Date = new Date();

  oggetto: {chiave: string};
  oggetto1: {chiave: string} = { chiave: 'valore'};

  constructor() { }

  ngOnInit(): void {
    let b = null; 
    b = this.oggetto != null && this.oggetto.chiave != null ? this.oggetto.chiave : null;
  }

  getCosa(){
    this.HTMLstring = "ciao";
    return this.HTMLstring;
  }

}
