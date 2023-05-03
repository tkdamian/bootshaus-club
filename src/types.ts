export type EventType = {
  id: string;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  info?: string;
  tickets?: string;
  ticketsStatus?: TicketsStatus;
  coverUrl?: string;
};

export enum TicketsStatus {
  SOLD_OUT,
  AVAILABLE,
  NOT_ONLINE_AVAILABLE,
}
