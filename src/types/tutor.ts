export enum AgeGroups {
    PRESCHOOLERS = '4-6',
    PRIMARY = '6-12',
    HIGHSCHOOL = '12-17',
    STUDENTS = '17-22',
    ADULTS = '23-40',
    OLDER = '40+'
  }
  
  export interface StudentLevel {
    id: number;
    name: 'beginner' | 'pre_beginner' | 'intermediate' | 'upper_intermediate' | 'advanced' | 'not_specified';
    checked: boolean;
  }
  
  export interface TutorProfile {
    name: string;
    avatar: string;
    phone: string;
    timezone: string;
    videoLink: string;
    videoThumbnail: string;
    birthCountry: string;
    yearsOfExperience: number;
    introduce_yourself: string;
    teaching_experience: string;
    motivate_student: string;
    catchy_title: string;
    studentLevels: StudentLevel[];
    ageGroups: AgeGroups[];
  }