import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {SearchResult} from '../../models/search-result';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  searchResult: SearchResult;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(data => {
        this.searchResult = data;
        console.log(this.searchResult);
      });
  }

}
