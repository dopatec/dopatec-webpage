export interface CoursePrice {
  individual: number;
  member: number;
  company: number;
  companyMember: number;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  bulletPoints: string[];
  price: CoursePrice;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  memberType: 'paid' | 'support';
  courses: {
    applied: string[];
    completed: string[];
  };
  personalInfo: {
    address: string;
    city: string;
    dateOfBirth: string;
    areaOfInterest: string;
  };
}
