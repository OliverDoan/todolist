export enum Status {
  ALL = 'ALL',
  INCOMPLETE = 'INCOMPLETE',
  COMPLETED = 'COMPLETED'
}

export interface ITodo {
  id: string
  title: string
  status: Status
  time: string
}
