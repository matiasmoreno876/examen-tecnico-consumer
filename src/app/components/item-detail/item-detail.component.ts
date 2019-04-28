import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';
import {ItemService} from '../../services/item.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  category = 'Cámaras y Accesorios > Filmadoras y Cámaras de Acción';

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
  }

  private getItem(id: string) {
    this.itemService.getItemWithDescription(id)
      .subscribe(data => {
        this.item = data;
      });
  }

}
