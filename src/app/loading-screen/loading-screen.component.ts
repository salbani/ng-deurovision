import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drv-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  @Output() end = new EventEmitter();

  headline = 'DEUROVISION'.split('');
  show = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.end.emit();
    }, 3550);
  }

}
