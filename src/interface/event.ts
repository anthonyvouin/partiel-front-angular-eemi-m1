export interface Event {
  name: string;
  date: Date;
  location: string;
  description: string;
  capacity: number;
  finished?: boolean;
}
