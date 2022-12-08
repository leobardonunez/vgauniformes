import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//model
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  API_URI = 'http://localhost:3000/item';
  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get(`${this.API_URI}/`);
  }
  getItemsPantalon(){
    return this.http.get(`${this.API_URI}/pantalones`);
  }

  getItemsCamisas(){
    return this.http.get(`${this.API_URI}/camisas`);
  }

  getItem(id: string){
     return  this.http.get(`${this.API_URI}/items/${id}`);
  }

  saveItem(item: Item){
    return this.http.post(`${this.API_URI}/items` , item);
  }

  deleteItem(id: string){
    return this.http.delete(`${this.API_URI}/items/${id}`);
  }

  updateItem(id: string, updatedItem: Item): Observable<Item>{
    return this.http.put(`${this.API_URI}/items/${id}` , updatedItem)
  }
}
