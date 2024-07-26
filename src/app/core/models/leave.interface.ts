export interface LeaveRecord {
  id: String;
  staffId: String;
  fullName: String;
  applyDate: Date;
  leaveType: 'Annual' | 'Off-In-Lieu' | 'Medical';
  takenDays: number;
  startDate: Date;
  endDate: Date;
  reason?: string;
  leaveStatus: 'Pendding' | 'Approved' | 'Rejected';
}

export interface LeaveTypeDetails {
  leaveType: 'Annual' | 'Off-In-Lieu' | 'Medical';
  totalDays: number;
  remainingDays: number;
}