import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subtopic } from '../models/subtopic';

@Component({
  selector: 'app-subtopics',
  templateUrl: './subtopics.component.html',
  styleUrls: ['./subtopics.component.css']
})
export class SubtopicsComponent implements OnInit {
  @Input() subtopics!: Subtopic[];

  constructor() { }

  ngOnInit(): void {
  }
  
  backToHome() {
    window.location.reload();
  }
}
