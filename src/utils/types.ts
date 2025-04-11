export interface DecodedToken {
    memberId: string;
    memberFirstName: string;
    memberLastName: string;
    memberEmail: string;
    orgId: number;
    accessId: number;
    exp: number;
    iat: number;
  }