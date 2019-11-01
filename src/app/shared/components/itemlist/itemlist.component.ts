import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../modals/item';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss'],
})
export class ItemlistComponent implements OnInit {
  @Input() item: Item;
  constructor(public router: Router, public ss: SharedService) { }

  ngOnInit() {}

  detailPage(item: Item) {
    this.router.navigate(['/itemdetail/' + item.id]);
  }

}
