import { Component, OnInit } from '@angular/core';
import { Item } from './../../modals/item';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[] = [];
  constructor() {
  }
  ngOnInit() {
    this.items.push(new Item({id: 1, title: 'Welcome to ionic', image: '/assets/shapes.svg', date: '27/08/2019', description: `Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.`}))
    this.items.push(new Item({id: 2, title: 'Welcome to Cordova', image: '/assets/shapes.svg', date: '27/08/2019', description: `Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.`}))
    this.items.push(new Item({id: 2, title: 'Welcome to TypeScript', image: '/assets/shapes.svg', date: '27/08/2019', description: `Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.`}))
  }

}
