import { Component, OnInit, Input } from '@angular/core';
import { fakeDataClass } from '../fake_data';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() fakedata: fakeDataClass;
  constructor() { }

  ngOnInit() {
  }

}
