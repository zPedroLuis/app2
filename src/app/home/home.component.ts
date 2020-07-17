import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let ofertas: OfertasService = new OfertasService()
    console.log(ofertas.getOfertas())
  }

}
