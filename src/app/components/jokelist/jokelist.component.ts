import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/modals/joke';

@Component({
  selector: 'jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.scss'],
})
export class JokelistComponent implements OnInit {
  @Input() joke: Joke;
  constructor() { }

  ngOnInit() {}

}
