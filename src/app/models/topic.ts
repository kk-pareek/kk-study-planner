import { Subtopic } from "./subtopic";

export interface Topic {
    topicName: string;
    subjectName: string;
    completedSubtopics: number;
    progress: number;
    subtopics: Subtopic[];
}