import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
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
