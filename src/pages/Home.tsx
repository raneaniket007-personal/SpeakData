import { useEffect, useState, useRef } from "react";
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Alert, Card, CardContent, IconButton, Button } from "@mui/material";
import { getDecodedToken } from "../utils/jwtDecoder";
import { DecodedToken } from "../utils/types";
import { getFlightApprovalRequests, approveFlightRequest, rejectFlightRequest } from "../services/flightService";
import LogoutButton from "../components/Logout";
import { UserAccessLevel, approvalStatusObj } from "../utils/enums";

interface FlightApprovalRequest {
    departureDest: string;
    arrivalDest: string;
    flightName: string;
    approvalStatusId: number;
    orgId: number;
    memberFirstName: string;
    memberLastName: string;
    flightApprovalRequestId: number;
}

const Home = () => {
    const [tokenData, setTokenData] = useState<DecodedToken | null>(null);
    const [flightRequests, setFlightRequests] = useState<FlightApprovalRequest[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const fetchCalled = useRef(false);

    useEffect(() => {
        if (fetchCalled.current) return; // Prevents duplicate API call
        fetchCalled.current = true;
        const token = getDecodedToken();
        setTokenData(token);

        if (token?.orgId && (token.accessId === UserAccessLevel.Owner || token.accessId === UserAccessLevel.Admin)) {
            fetchFlightApprovalRequests(token.orgId);
        } else {
            setLoading(false);
            setError("Access Denied or Organization ID is missing.");
        }
    }, []);

    const fetchFlightApprovalRequests = async (orgId: number) => {
        try {
            const data = await getFlightApprovalRequests(orgId);
            setFlightRequests(data);
        } catch (err) {
            setError("Failed to fetch flight requests.");
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (flightApprovalRequestId: number) => {
        try {
            await approveFlightRequest(flightApprovalRequestId);
            setFlightRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request.flightApprovalRequestId === flightApprovalRequestId
                        ? { ...request, approvalStatusId: 1 }
                        : request
                )
            );
        } catch (err) {
            setError("Failed to approve flight request.");
        }
    };

    const handleReject = async (flightApprovalRequestId: number) => {
        try {
            await rejectFlightRequest(flightApprovalRequestId);
            setFlightRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request.flightApprovalRequestId === flightApprovalRequestId
                        ? { ...request, approvalStatusId: 3 }
                        : request
                )
            );
        } catch (err) {
            setError("Failed to approve flight request.");
        }
    };

    return (
        <Container maxWidth="lg">
            <Box display="flex" flexDirection="column" gap={3} mt={5}>
                <Card>
                    <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h5" gutterBottom>
                            Welcome, {tokenData?.memberFirstName} {tokenData?.memberLastName}
                        </Typography>
                        <LogoutButton/>
                    </CardContent>
                </Card>

                {loading ? (
                    <Box display="flex" justifyContent="center" mt={3}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (
                    <TableContainer component={Paper} elevation={3} sx={{ mt: 3, borderRadius: 2, overflow: "hidden" }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#1976d2" }}>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Departure</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Arrival</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Flight Name</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Approval Status</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Member</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {flightRequests.map((request, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell>{request.departureDest}</TableCell>
                                        <TableCell>{request.arrivalDest}</TableCell>
                                        <TableCell>{request.flightName}</TableCell>
                                        <TableCell>{approvalStatusObj[request.approvalStatusId]}</TableCell>
                                        <TableCell>
                                            {request.memberFirstName} {request.memberLastName}
                                        </TableCell>
                                        <TableCell>
                                            <Button disabled={request.approvalStatusId !== 2} onClick={() => handleApprove(request.flightApprovalRequestId)} variant="contained" color="success" size="small" sx={{ mr: 1 }}>Approve</Button>
                                            <Button disabled={request.approvalStatusId !== 2} onClick={() => handleReject(request.flightApprovalRequestId)} variant="contained" color="error" size="small">Reject</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Container>
    );
};

export default Home;