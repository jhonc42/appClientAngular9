import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  items: any = {};
  constructor( private serv: ConnectionService) { }

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
  this.serv.getData().subscribe(
    item => {console.log(item)}
  );
}
}
