import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myArray = [
    {name: 'Dota 2', accuracy: '89.7%'},
    {name: 'Dota 2', accuracy: '89.7%'},
    {name: 'Dota 2', accuracy: '89.7%'}
  ];

  columnsToDisplay = ['name', 'accuracy'];

  constructor() { }

  ngOnInit() {
  }

}
