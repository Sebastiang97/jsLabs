import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  /* filter */
  searchText!: string;

  /* data */
  users: any;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.renderData();
  }

  renderData() {
    this.users = this.userService.getUsers()
  }
}
