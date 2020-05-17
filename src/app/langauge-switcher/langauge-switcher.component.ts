import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drv-langauge-switcher',
  templateUrl: './langauge-switcher.component.html',
  styleUrls: ['./langauge-switcher.component.scss']
})
export class LangaugeSwitcherComponent implements OnInit {

  languages = ['DE', 'EN'];

  animate = false;

  constructor() { }

  ngOnInit() {
  }

  switchLanguage() {
    if (this.animate) return;
    this.animate = true;
    setTimeout(() => {
      const temp = this.languages[0];
      this.languages[0] = this.languages[1];
      this.languages[1] = temp;
    }, 950);
    setTimeout(() => {
      this.animate = false;
    }, 1700);
  }

}
