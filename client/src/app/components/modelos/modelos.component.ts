import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../services/items.service';
@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  items: any = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(
      res => {
        this.items = res;
      },
      err=> console.error(err)
    );
  }

}
