import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoBergamo';

  getVal(){
    return 6;
  }

  HTMLstring = "<div><p>Prova</p></div>"
}