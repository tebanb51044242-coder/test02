export interface ScheduleDay {
  day: string;
  enabled: boolean;
  start: string;
  end: string;
}

export interface EventAccess {
  code: string;
  name: string;
  quantity: number;
}

export interface CreatePlanData {
  name: string;
  description: string;
  active: boolean;

  priceBase: number;
  currency: string;
  cycle: string;
  periodicity: string;
  userLimit: number;
  prorate: boolean;
  discountDuration: number;
  discountPercent: number;
  enrollmentFee: number;

  centers: string;
  facilities: string;
  sameSchedule: boolean;
  schedule: ScheduleDay[];

  trainingPlan: boolean;
  nutritionPlan: boolean;
  guestInvites: number;
  centerAccesses: number;

  events: EventAccess[];

  internalNotes: string;
}