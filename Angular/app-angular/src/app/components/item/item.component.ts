import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item ()
  @Output() deleteItem: EventEmitter<number> = new EventEmitter
  @Output() toggle: EventEmitter<boolean> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item:Item){
    //item.completed = !item.completed 
    this.deleteItem.emit(item)
  }

  onToggle(item:Item){
    //item.completed = !item.completed 
    this.item.completed = !item.completed
    this.toggle.emit()
  }
  

}
