import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subtopic } from '../models/subtopic';
import { Topic } from '../models/topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  @Input() topics!: Topic[];

  subtopics!: Subtopic[];
  showTopics = true;
  showSubtopics = false;

  constructor(private theRouter: Router) { }

  ngOnInit(): void {
  }

  clickedOnTopic(event: any) {
    this.showTopics = false;
    this.showSubtopics = true;
    this.subtopics = event.subtopics;
  }

  backToHome() {
    window.location.reload();
  }
}
