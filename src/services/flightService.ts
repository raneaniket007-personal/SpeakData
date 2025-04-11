import api from "../utils/axiosInterceptor";

export const getFlightApprovalRequests = async (orgId: number) => {
  const response = await api.get("/getFlightApprovalRequests", {
    params: { orgId: orgId },
  });
  return response.data;
};

export const approveFlightRequest = async (flightApprovalRequestId: number) => {
  const response = await api.post("/approveFlightBookingRequest", { flightApprovalRequestId });
  return response.data;
};

export const rejectFlightRequest = async (flightApprovalRequestId: number) => {
    const response = await api.post("/rejectFlightBookingRequest", { flightApprovalRequestId });
    return response.data;
  };
