import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {SearchResult} from '../../models/search-result';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  query = '';
  searchResult: SearchResult;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.query = queryParams['search'];
        this.getItems(this.query);
      }
    );
  }

  private getItems(query: string) {
    this.itemService.getItems(query)
      .subscribe(data => {
        this.searchResult = data;
      });
  }

}
