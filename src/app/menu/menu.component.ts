import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group } from '@angular/animations';
import { Colors } from '../../colors';

@Component({
  selector: 'drv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('menuBtnState', [
      state('closed', style({
        transform: 'scaleY(1)'
      })),
      state('open', style({
        transform: 'scaleY(0)'
      })),
      transition('void => *', [style({ opacity: 0, transform: 'translateYX(-100%)' }), animate('300ms ease-in')]),
      transition('closed => open', animate('100ms ease-in')),
      transition('open => closed', animate('100ms 300ms ease-in')),
    ]),
    trigger('lineStateTop', [
      state('closed', style({
        width: '100%',
      })),
      state('open', style({
        transform: 'translateY(23px) rotate(45deg)',
        width: '50%',
        opacity: 1,
        background: Colors.secondaryColor
      })),
      transition('closed => open', group([
        animate('400ms ease-in', keyframes([
          style({ width: '100%', transform: 'translateY(0px) rotate(0deg)', background: Colors.mainColor, offset: 0 }),
          style({ width: '100%', transform: 'translateY(23px) rotate(0deg)', background: Colors.mainColor, offset: 0.25 }),
          style({ width: '50%', transform: 'translateY(23px) rotate(0deg)', background: Colors.secondaryColor, offset: 0.625 }),
          style({ width: '50%', transform: 'translateY(23px) rotate(45deg)', background: Colors.secondaryColor, offset: 1 })
        ])),
      ])),
      transition('open => closed', group([
        animate('300ms ease-in', keyframes([
          style({ width: '50%', transform: 'translateY(23px) rotate(45deg)', background: Colors.secondaryColor, offset: 0 }),
          style({ width: '50%', transform: 'translateY(23px) rotate(0deg)', background: Colors.secondaryColor, offset: 0.375 }),
          style({ width: '100%', transform: 'translateY(23px) rotate(0deg)', background: Colors.mainColor, offset: 0.75 }),
          style({ width: '100%', transform: 'translateY(0px) rotate(0deg)', background: Colors.mainColor, offset: 1 }),
        ])),
      ])),
    ]),
    trigger('lineStateBot', [
      state('closed', style({
        width: '100%',
      })),
      state('open', style({
        transform: 'translateY(-24px) rotate(-45deg)',
        width: '50%',
        opacity: 1,
        background: Colors.secondaryColor
      })),
      transition('closed => open', group([
        animate('300ms 100ms ease-in', keyframes([
          style({ width: '100%', transform: 'translateY(0px) rotate(0deg)', background: Colors.mainColor, offset: 0 }),
          style({ width: '100%', transform: 'translateY(-24px) rotate(0deg)', background: Colors.mainColor, offset: 0.25 }),
          style({ width: '50%', transform: 'translateY(-24px) rotate(0deg)', background: Colors.secondaryColor, offset: 0.625 }),
          style({ width: '50%', transform: 'translateY(-24px) rotate(-45deg)', background: Colors.secondaryColor, offset: 1 })
        ])),
      ])),
      transition('open => closed', group([
        animate('300ms ease-in', keyframes([
          style({ width: '50%', transform: 'translateY(-24px) rotate(-45deg)', background: Colors.secondaryColor, offset: 0 }),
          style({ width: '50%', transform: 'translateY(-24px) rotate(0deg)', background: Colors.secondaryColor, offset: 0.375 }),
          style({ width: '100%', transform: 'translateY(-24px) rotate(0deg)', background: Colors.mainColor, offset: 0.75 }),
          style({ width: '100%', transform: 'translateY(0px) rotate(0deg)', background: Colors.mainColor, offset: 1 }),
        ])),
      ])),
    ]),
    trigger('menuState', [
      state('closed', style({
        filter: 'blur(4px)',
        opacity: 0,
        display: 'none'
      })),
      state('open', style({
        filter: 'blur(0px)',
        opacity: 1,
      })),
      transition('closed <=> open', animate('400ms ease')),
    ])
  ]
})
export class MenuComponent implements OnInit {
  state = 'closed';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.state = this.state === 'closed' ? 'open' : 'closed';
  }

  select(ev: MouseEvent) {
    let el = ev.srcElement as HTMLDivElement;
    el.classList.add('selected');
    setTimeout(() => {
      this.toggleMenu();
    }, 200)
    setTimeout(() => {
      el.classList.remove('selected');
    }, 1100)
  }

}
