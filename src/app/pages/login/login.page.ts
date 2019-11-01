import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { STORAGE } from '../../constants/storage';
import { SharedService } from '../../shared/services/shared.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm;
  constructor(public menu: MenuController, public router: Router, public builder: FormBuilder, public ss: SharedService, public us: UserService) { 
    this.loginForm = builder.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern('([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z\-]{2}[a-zA-Z\-]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))([\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))?')])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    });
  }

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
  login() {
    let validation_message = {
      'email': {
        'required': 'Please enter email.',
        'pattern': 'Please enter valid email'
      },
      'password': {
        'required': 'Please enter password.',
        'minlength': 'Password should be minimum 8 characters',
        'maxlength': 'Password should be maximum 20 characters'
      }
    };
    if (this.ss.validation(this.loginForm, validation_message)) {
      // this.fp.login(this.loginForm.value.email, this.loginForm.value.password)
      //   .then(
      //     success => {
      //       this.up.login(success[0]);
      //       console.log(success)
      //      this.navCtrl.setRoot('HomePage');
      //     }, error => {  }
      //   )
      this.us.login({fname: 'Kuldeep'}).then((result) => {
        this.router.navigateByUrl('/home');
      });
    }
  }
}
