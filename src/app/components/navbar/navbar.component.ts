import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search = '';

  constructor(private itemService: ItemService, private router: Router) {
  }

  ngOnInit() {
  }

  searchForItems(): void {
    if (this.search !== '') {
      const navigationExtras: NavigationExtras = {
        queryParams: {'search': this.search}
      };
      this.router.navigate(['./items'], navigationExtras);
    }
  }

}
