import { Component, OnInit } from '@angular/core';
type Marca = Array<{id:number ,title:string, name:string , tallas: string, peso: string , tejido: string, composicion: string}>;

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  marcas: Marca = [
    {id: 1 , title:"Playerytees" , name:"POLO MOD.900 POLIESTER SPORT CABALLERO Y DAMA" , tallas: "CH - 4EG", peso:"200 g/m", tejido:"Piqué" , 
    composicion:"100% Poliester" },
    {id:2 , title:"Mayork" , name: "POLIESTER SPORT CABALLERO Y DAMA",  tallas: "CH - 4EG", peso: "200 g/m", tejido: "Piqué", 
    composicion: "100% Algodon" },
    {id:3 , title:"TF Mochis" , name: "POLIESTER SPORT CABALLERO Y DAMA",  tallas: "CH - 4EG", peso: "200 g/m", tejido: "Piqué", 
    composicion: "100% Algodon"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}



