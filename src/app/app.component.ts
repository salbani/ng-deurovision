import { Component } from '@angular/core';
import { BorderlineService } from './services/borderline.service';

@Component({
  selector: 'drv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;

  constructor(private borderline: BorderlineService){}

  loadingEnd() {
    this.loading = false;
  }
}
