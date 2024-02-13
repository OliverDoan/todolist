export interface TodoType {
  id: string
  name: string
  priority: priorityType
  completed: false
}

export enum priorityType {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}
