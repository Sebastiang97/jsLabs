import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = []
  total: number = 0


  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    
    this.itemService.getItems().subscribe(data =>{
      this.items = data
      this.getTotal()
    })
  }
 
  deleteItem(item:Item){
    // this.items = this.items.filter(item => item.id !== id)
    this.itemService.deleteItem(item).subscribe()
    this.getTotal()
  }

  toggle(item:Item){
    this.itemService.toggleItem(item).subscribe()
    this.getTotal()
  }

  getTotal(){
    this.total = this.items
    .filter(item => !item.completed)
    .map(item =>   item.quantity * item.price)
    .reduce((acc,item) => acc +=item,0)
    

  }

}
