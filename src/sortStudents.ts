
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades:number[],
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}
type SortOrder = 'asc' | 'desc';

export type SortOrder;


export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder) {
  const studentsCopy = [...students];

  const averageGrade = (grades: number[]): number => {
    const sum = grades.reduce((avg, grade) => avg + grade);
    return sum / grades.length;
  }

  studentsCopy.sort((a, b) => {
    let count = 0;
    switch (sortBy) {
      case SortType.Name:
        count = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        count = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        count = a.age - b.age;
        break;
      case SortType.Married:
        count = (a.married === b.married) ? 0 : (a.married ? 1 : -1);
        break;
      case SortType.AverageGrade:
        count = averageGrade(a.grades) - averageGrade(b.grades);
        break;
    }

    return order === 'asc' ? count : -count;
  });

  return studentsCopy;
}
