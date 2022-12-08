import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../services/items.service';
@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent implements OnInit {

  items: any = [];
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItemsCamisas().subscribe(
      res=> {
        this.items = res;
      },
      err=> console.error(err)
    );
  }

}
