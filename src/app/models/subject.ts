import { Topic } from "./topic";

export interface Subject {
    subjectName: string;
    completedTopics: number;
    completed: boolean;
    progress: number;
    topics: Topic[];
}