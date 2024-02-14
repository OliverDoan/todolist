export interface TodoType {
  id: string
  name: string
  priority: priorityType
  completed: boolean
}

export enum priorityType {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}

export enum statusType {
  All = 'All',
  Todo = 'Todo',
  Completed = 'Completed'
}
