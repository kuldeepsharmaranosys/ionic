import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { CameraService } from '../../shared/services/camera.service'; 
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  imageData: string = '';
  constructor(private cs: CameraService, public ss: SharedService) {
  }
  ngOnInit() {
  }

  selectPhoto() {
    this.cs.selectPhoto().then((imageData)=>{
      this.imageData = imageData;
    });
  }
}
