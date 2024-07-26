//Leave Types
export const LeaveTypes = {
    ANNUAL: 'Annual',
    OFF_IN_LIEU: 'OffInLieu',
    MEDICAL: 'Medical',
} as const;

// Type for leave types
export type LeaveType = typeof LeaveTypes[keyof typeof LeaveTypes];

//Leave Statue
export const AllLeaveStatus = {
    PENDING: 'Pending',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
} as const;

export type LeaveStatus = typeof AllLeaveStatus[keyof typeof AllLeaveStatus];