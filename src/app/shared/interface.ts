export enum FilterTypes {
  Lower = 'lower',
  Faster = 'faster',
  Optimal = 'optimal'
}

export enum StopTypes {
  All = -1,
  Without = 0,
  One = 1,
  Two = 2,
  Three = 3
}

export interface Item {
  price: number;
  carrier: string;
  segments: Segment[];
}

export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}