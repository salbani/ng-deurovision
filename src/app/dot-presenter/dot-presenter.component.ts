import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'drv-dot-presenter',
  templateUrl: './dot-presenter.component.html',
  styleUrls: ['./dot-presenter.component.scss']
})
export class DotPresenterComponent implements OnInit {

  @Input() duration = '4s';
  @Input() lineWidth = 30;

  get animation() {
    return `wiggle ${this.duration} ease infinite alternate`;
  }

  constructor() { }

  ngOnInit() {
  }

}
