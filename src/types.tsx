export type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

export type Announcement = {
  id: string;
  title: string;
  body: string;
  timestamp: Timestamp;
};

export type Shift = {
  startDate: Date;
  endDate: Date;
};

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  admin: boolean;
};

export enum MessageType {
  Approve = 'APPROVE',
  ShiftChange = 'SHIFT_CHANGE',
  ShiftCancel = 'SHIFT_CANCEL',
  ShiftSignUp = 'SHIFT_SIGN_UP',
}

export type Message = {
  sender: string;
  body: string;
  type: MessageType;
  timestamp: Timestamp;
};

export type MessageFilter = {
  name: string;
  color: string;
  targetVal: MessageType | null;
};
