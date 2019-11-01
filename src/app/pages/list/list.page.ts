import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { CameraService } from '../../shared/services/camera.service'; 
import { Item } from './../../modals/item';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items: Item[] = [];
  imageData: string = '';
  constructor(private cs: CameraService, public ss: SharedService) {
  }
  ngOnInit() {
    this.items.push(new Item({id: 1, title: 'Welcome to ionic', image: '/assets/shapes.svg', date: '27/08/2019', description: `Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.`}))
    this.items.push(new Item({id: 2, title: 'Welcome to Cordova', image: '/assets/shapes.svg', date: '27/08/2019', description: `Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.`}))
    this.items.push(new Item({id: 2, title: 'Welcome to TypeScript', image: '/assets/shapes.svg', date: '27/08/2019', description: `Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.`}))
  }

  selectPhoto() {
    this.cs.selectPhoto().then((imageData)=>{
      this.imageData = imageData;
    });
  }
}
