import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() tileSubject: any;
  @Input() tileName: any;
  @Output() clickedOnSubjectEvent = new EventEmitter<any>();

  checkboxToggle = true;

  onCheckboxClick() {
    this.checkboxToggle = true;
  }

  clickedOnSubject() {
    this.clickedOnSubjectEvent.emit(this.tileSubject);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
