import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { ItemdetailPage } from './itemdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ItemdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemdetailPage]
})
export class ItemdetailPageModule {}
