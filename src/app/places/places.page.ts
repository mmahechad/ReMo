import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  name = 'Places';
  lugares = [{
    nombre: 'Parque Nacional Natural Tayrona',
    descripcion: 'Ubicado en las estribaciones de la Sierra Nevada de Santa Marta la montaña costera más alta del mundo',
    imagen: 'http://www.masaya-experience.com/santa-marta/wp-content/uploads/2019/02/HENRI-BATAILLE.jpg'
  },
  {
    nombre: 'Mar de 7 Colores',
    descripcion: 'En la Isla de San Andrés los numerosos arrecifes de coral hacen vida en estas aguas cristalinas',
    imagen:'https://4.bp.blogspot.com/-DlgrlBMiDGs/WbGSVx5PIfI/AAAAAAAABrg/AW857q5FZi4bK8YBs12CijTKUWHTDsi2QCLcBGAs/s1600/maxresdefault.jpg'
  },
  {
    nombre: 'El Almejal',
    descripcion: 'Es un buen lugar para surfear en Bahía Solano Chocó', 
    imagen: 'http://www.almejal.com.co/wp-content/uploads/2016/11/Avistamiento-de-Ballenas-Colombia-790x438.jpg',
  },
  {
    nombre: 'Bocas de Ceniza',
    descripcion: 'Se encuentra en Barranquilla y es el punto exacto donde el río Magdalena se encuentra con el Mar Caribe',
    imagen: 'https://i0.wp.com/padondenosvamos.com/wp-content/uploads/2017/10/Bocas-de-ceniza.jpg',
  },
  {
    nombre: 'Parque Nacional Natural Gorgona',
    descripcion: 'Está ubicado a 35 km de la costa del pacifico colombiano. Pertenece al municipio Guapí, departamento del Cauca',
    imagen: 'https://i0.wp.com/padondenosvamos.com/wp-content/uploads/2017/10/parquegorgona.jpg',
  }
];
  constructor() { }

  ngOnInit() {
  }

}

