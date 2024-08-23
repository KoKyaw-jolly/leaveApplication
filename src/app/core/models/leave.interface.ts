export interface LeaveRecord {
  id: String;
  staffId: String;
  fullName: String;
  applyDate: Date;
  leaveType: 'Annual' | 'Off-In-Lieu' | 'Medical';
  takenDays: number;
  startDate: Date;
  endDate: Date;
  phoneDuringLeave: string;
  reason?: string;
  leaveStatus: 'Pending' | 'Approved' | 'Rejected';
}

export interface LeaveTypeDetails {
  leaveType: 'Annual' | 'Off-In-Lieu' | 'Medical';
  totalDays: number;
  remainingDays: number;
}