import { Injectable } from '@angular/core';

@Injectable()
export class BorderlineService {
  active = false;
  containers: HTMLCollectionOf<HTMLElement>;

  constructor() {
    console.log('Borderline loaded');
    window.addEventListener('keydown', ev => {
      if (ev.altKey && ev.key === 'b') {
        this.active = !this.active;
        this.active ? this.loadBorderline() : this.unloadBorderline();
      }
    });
  }

  loadBorderline() {
    this.containers = document.getElementsByClassName('container') as HTMLCollectionOf<HTMLElement>;
    // Check if its an HTMLElement
    for (let i = 0; i < this.containers.length; i++) {
      const el = this.containers[i];
      el.style.background = `rgb(${100 + 100 * Math.random()},${100 + 100 * Math.random()},${100 + 100 * Math.random()})`;
      el.style.border = '1px solid #fff';
    }
  }

  unloadBorderline() { 
    for (let i = 0; i < this.containers.length; i++) {
      const el = this.containers[i];
      el.style.background = '';
      el.style.border = '';
    }
  }

}
