export interface Holiday {
    id: string;
    name: string;
    date: Date;
    description?: string;
}

export const holidayEmptyInitalObj: Holiday = {
    id: '',
    name: '',
    date: new Date(),
    description: ''
  }