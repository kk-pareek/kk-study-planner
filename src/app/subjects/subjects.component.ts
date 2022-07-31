import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject'
import { Topic } from '../models/topic';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  showSubjects = true;
  showTopics = false;
  topics!: Topic[];
  subjects: Subject[] = [
    {
      subjectName: "maths",
      completedTopics: 0,
      completed: false,
      progress: 0,
      topics: [
        {
          topicName: "differentiation",
          subjectName: "maths",
          completedSubtopics: 0,
          progress: 0,
          subtopics: [
            {
              subtopicName: "formula-based",
              topicName: "differentiation",
              subjectName: "maths",
              completed: false
            },
            {
              subtopicName: "chain-rule",
              completed: false,
              topicName: "differentiation",
              subjectName: "maths",
            },
            {
              subtopicName: "substitution-method",
              completed: false,
              topicName: "differentiation",
              subjectName: "maths",
            }
          ]
        },
        {
          topicName: "integration",
          subjectName: "maths",
          completedSubtopics: 0,
          progress: 0,
          subtopics: [
            {
              subtopicName: "formula-based",
              completed: false,
              topicName: "integration",
              subjectName: "maths",
            },
            {
              subtopicName: "chain-rule",
              completed: false,
              topicName: "integration",
              subjectName: "maths",
            },
            {
              subtopicName: "substitution-method",
              completed: false,
              topicName: "integration",
              subjectName: "maths"
            }
          ]
        }
      ]
    },
    {
      subjectName: "physics",
      completedTopics: 0,
      completed: false,
      progress: 0,
      topics: [
        {
          topicName: "motion",
          subjectName: "physics",
          completedSubtopics: 0,
          progress: 0,
          subtopics: [
            {
              subtopicName: "rectilinear motion",
              topicName: "motion",
              subjectName: "physics",
              completed: false
            },
            {
              subtopicName: "projectile motion",
              completed: false,
              topicName: "motion",
              subjectName: "physics",
            },
            {
              subtopicName: "anokha motion",
              completed: false,
              topicName: "motion",
              subjectName: "physics",
            }
          ]
        },
        {
          topicName: "electromagnetism",
          subjectName: "physics",
          completedSubtopics: 0,
          progress: 0,
          subtopics: [
            {
              subtopicName: "electricity",
              completed: false,
              topicName: "electromagnetism",
              subjectName: "physics",
            },
            {
              subtopicName: "magnetic effect of current",
              completed: false,
              topicName: "electromagnetism",
              subjectName: "physics",
            },
            {
              subtopicName: "practice questions",
              completed: false,
              topicName: "electromagnetism",
              subjectName: "physics"
            }
          ]
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  clickedOnSubject(event: any) {
    this.showSubjects = false;
    this.showTopics = true;
    this.topics = event.topics;
  }
}
