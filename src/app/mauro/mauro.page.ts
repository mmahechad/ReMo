import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mauro',
  templateUrl: './mauro.page.html',
  styleUrls: ['./mauro.page.scss'],
})
export class MauroPage implements OnInit {

  name = 'Mauricio Mahecha';

  usuario =
  {
    nombre: 'Mauricio Mahecha',
    pasword: 1234,
    Estado: false
  };
  usuario2 =
  [{
    nombre: 'Diana Pinzon',
    pasword: 1234,
    Estado: true
  },
  {
    nombre: 'German Alarcon',
    pasword: 1234,
    Estado: false
  }];

   

  constructor() { }

  ngOnInit() {
  }

}
