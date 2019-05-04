import { Component } from '@angular/core';
import { ads } from './fake_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stagepalls';
  adsdata = ads;
}
