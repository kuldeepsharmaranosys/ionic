import { Component, OnInit } from '@angular/core';
import { Item } from './../../modals/item';
@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.page.html',
  styleUrls: ['./itemdetail.page.scss'],
})
export class ItemdetailPage implements OnInit {
  item: Item;
  constructor() { }
  
  ngOnInit() {
    this.item = new Item({id: 1, title: 'Welcome to ionic', image: '/assets/shapes.svg', date: '27/08/2019', description: `Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps. Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.`});
  }

}
