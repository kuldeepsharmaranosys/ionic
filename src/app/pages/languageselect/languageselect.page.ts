import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../../constants/config';
import { STORAGE } from '../../constants/storage';
@Component({
  selector: 'app-languageselect',
  templateUrl: './languageselect.page.html',
  styleUrls: ['./languageselect.page.scss'],
})
export class LanguageselectPage implements OnInit {
  languageList = [];
  language: string;
  isLanguageSelected: boolean = false;
  constructor(private storage: Storage, private router: Router, private translate: TranslateService) {
  }

  ngOnInit() {
    this.storage.get(STORAGE.isLanguageSelected).then((isLanguageSelected) => {
      if (isLanguageSelected === '1') {
        this.isLanguageSelected = true;
        this.storage.get(STORAGE.language).then((language) => {
          this.language = language;
        });
      } else {
        this.language = CONFIG.defaultLanguage;
      }
    });
    this.languageList = CONFIG.languageList;
  }
  submit() {
    this.storage.set(STORAGE.isLanguageSelected, '1');
    this.storage.set(STORAGE.language, this.language);
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language).subscribe(()=>{
      if (this.isLanguageSelected) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['intro']);
      }
    });
   
  }

}
