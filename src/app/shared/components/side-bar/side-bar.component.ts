import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  mainMenu: {defaultOptions:Array<any>, accessLink:Array<any>} = {
    defaultOptions: [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/','tracks']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ],
    accessLink: [
      {
        name: 'Crear Lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]
  }
  customOptions:Array<any> = [
    {
      name: 'Mi Lista °1',
      router: ['/']
    },
    {
      name: 'Mi Lista °2',
      router: ['/']
    },
    {
      name: 'Mi Lista °3',
      router: ['/']
    },
    {
      name: 'Mi Lista °4',
      router: ['/']
    }

  ]
  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: "uil uil-estate"
    },
    {
      name: 'Buscar',
      icon: "uil uil-estate"
    }
  ];

}
