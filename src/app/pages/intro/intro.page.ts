import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SharedService } from '../../shared/services/shared.service';
import { STORAGE } from '../../constants/storage';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss']
})
export class IntroPage implements OnInit {
  slides = [];
  constructor(public menu: MenuController, private router: Router, private ss: SharedService, private storage: Storage) {
    this.slides = [
      {
        title: 'WELCOME',
        description:
          'Welcome all ' +
          ss.environment.name +
          ' lovers. Post your exprience, find ' +
          ss.environment.name +
          ' HD videos and training videos.',
        image: 'assets/icon/favicon.png',
        color: '#ef3c2a'
      },
      {
        title: 'Post',
        description:
          'Post your exprience of ' +
          ss.environment.name +
          ', post multiple images and text.',
        image: 'assets/icon/favicon.png',
        color: '#ffcc00'
      },
      {
        title: 'HD Video',
        description: 'Find Full HD video of ' + ss.environment.name + '.',
        image: 'assets/icon/favicon.png',
        color: '#007aff'
      },
      {
        title: 'Training Video',
        description:
          'Find training video of ' +
          ss.environment.name +
          ', and improve your game.',
        image: 'assets/icon/favicon.png',
        color: '#0ae912'
      },
      {
        title: 'Search Video',
        description: 'Search video of ' + ss.environment.name + '',
        image: 'assets/icon/favicon.png',
        color: '#ff2d55'
      }
    ];
  }

  ngOnInit() {}

  goToHome() {
    this.storage.set(STORAGE.isIntroComplate, '1');
    //localStorage.setItem(STORAGE.isIntroComplate, '1');
    this.router.navigate(['login']);
  }

  ionViewWillEnter() {
    // disable the root left menu when enter the intro page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the intro page
    this.menu.enable(true);
  }
}
