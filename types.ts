
export interface Lesson {
  id: string;
  title: string;
  concept: string;
  syntax: string;
  example: string;
  proTip: string;
  miniExercise: string;
}

export interface Phase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  lessons: Lesson[];
  isLocked: boolean;
}

export interface Syllabus {
  phases: Phase[];
  capstone: {
    title: string;
    description: string;
    requirements: string[];
  };
}
