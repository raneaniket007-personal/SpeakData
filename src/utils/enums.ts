export enum UserAccessLevel {
    Owner = 1,
    Admin = 2,
    Member = 3,
  }
  
export const approvalStatusObj: Record<number, string> = {
    1: "Approved",
    2: "Pending",
    3: "Rejected",
    4: "Cancelled"
  };