import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cont = "Width: "+innerWidth+", Height: "+innerHeight;
  ngOnInit()
  {
    console.log(this.cont);
  }
}
