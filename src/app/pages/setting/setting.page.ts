import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public ss: SharedService) { }

  ngOnInit() {
  }

}
