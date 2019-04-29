import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';
import {ItemService} from '../../services/item.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryRepository} from '../../repository/category.repository';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  category = '';

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private categoryRepository: CategoryRepository) {
  }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
  }

  private getItem(id: string) {
    this.itemService.getItemWithDescription(id)
      .subscribe(data => {
        this.item = data;
        this.category = this.categoryRepository.getCategory();
      });
  }

}
