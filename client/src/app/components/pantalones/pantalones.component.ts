import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-pantalones',
  templateUrl: './pantalones.component.html',
  styleUrls: ['./pantalones.component.css']
})
export class PantalonesComponent implements OnInit {

  items: any = [];
  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.itemService.getItemsPantalon().subscribe(
      res=> {
        this.items= res;
      },
      err=> console.error(err)
    );
  }

}
