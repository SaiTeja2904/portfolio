import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.less']
})
export class TimeLineComponent implements OnInit {

  @Input() card;
  constructor() { }

  ngOnInit(): void {
  }

}
