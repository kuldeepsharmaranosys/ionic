import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { SharedService } from '../../shared/services/shared.service';
import { JokeService } from '../../services/joke.service';
import { Joke } from '../../modals/joke';
@Component({
  selector: 'app-jokedetail',
  templateUrl: './jokedetail.page.html',
  styleUrls: ['./jokedetail.page.scss'],
})
export class JokedetailPage implements OnInit {
  joke: Joke;
  constructor(private route: ActivatedRoute, private ss: SharedService, private js: JokeService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'] != undefined ? this.route.snapshot.params['id'] : '';
    this.js.detail(id).then((data: Joke) => {
      this.joke = data;
    }).catch((err) => { console.log(err); });
  }

}
