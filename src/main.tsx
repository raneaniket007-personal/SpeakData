import React, { JSX, useRef } from "react";
import { CssBaseline } from '@mui/material';
import { AppBar, Toolbar, Typography, Button, Box, Container, Paper, TextField, Stack } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";



import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import EastIcon from '@mui/icons-material/East';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <CssBaseline />
      <LandingPage />
    </Provider>
  </React.StrictMode>
);


export default function LandingPage(): JSX.Element {
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const demoFormRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const primaryBg = "#0B0F19";
  const accentColor = "#14B8A6";
  const textGray = "#94A3B8";
  const titleGray = "#CBD5E1";

  const buttonHover = {
    '&:hover': {
      backgroundColor: accentColor,
      color: "#000"
    }
  };

  const navHoverStyle = {
    color: textGray,
    transition: "all 0.3s ease",
    "&:hover": {
      color: accentColor,
      backgroundColor: "rgba(20, 184, 166, 0.1)",
    }
  };

  return (
    <Box sx={{ bgcolor: primaryBg, color: textGray }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: primaryBg, borderBottom: `1px solid ${accentColor}` }} elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={2} sx={{ pl: { xs: 1, md: 4 } }}>
            <Paper variant="outlined" sx={{ px: 2, py: 0.7, borderColor: accentColor }}>Logo</Paper>
            <Typography variant="h6" fontWeight="bold" sx={{ color: titleGray, fontSize: "1.5rem" }}>
              SpeakData
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            <Button onClick={() => scrollToRef(featuresRef)} sx={{ ...navHoverStyle }}>Features</Button>
            <Button onClick={() => scrollToRef(pricingRef)} sx={{ ...navHoverStyle }}>Pricing</Button>
            <Button onClick={() => scrollToRef(resourcesRef)} sx={{ ...navHoverStyle }}>Resources</Button>
            <Button onClick={() => scrollToRef(aboutRef)} sx={{ ...navHoverStyle }}>About</Button>
            <Button onClick={() => scrollToRef(contactRef)} sx={{ ...navHoverStyle }}>Contact</Button>

          </Box>
          <Button variant="outlined" sx={{ borderRadius: 5, color: accentColor, borderColor: accentColor, ...buttonHover }} onClick={() => scrollToRef(demoFormRef)}>Book a Demo</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box py={10} px={2}>
        <Container>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent="space-between" gap={5}>
            <Box flex={1}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: titleGray }}>
                The Power of a Full Data Team.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: textGray }}>
                Enterprise-ready, secure, compliant, and integrated — SpeakData helps you build a true data culture with NLP.
              </Typography>
              <Button variant="outlined" size="large" sx={{ borderRadius: 5, color: accentColor, borderColor: accentColor, ...buttonHover }} onClick={() => scrollToRef(demoFormRef)}>
                Book a Demo
              </Button>
            </Box>
            <Box flex={1} textAlign="center">
              <img src="https://placehold.co/500x300?text=Hero+Image" alt="SpeakData Hero" style={{ maxWidth: "100%", borderRadius: 16 }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box py={10} px={2}>
        <Container>
          <Typography variant="h4" gutterBottom sx={{ color: titleGray, textAlign: "center" }}>
            How It Works
          </Typography>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={5} mt={5}>
            {[
              {
                title: "1. Connect your data",
                desc: "We support structured, semi-structured, and unstructured formats like PDFs, CSV, SQL, NoSQL, and even audio or video."
              },
              {
                title: "2. Ask questions in Natural Language",
                desc: "Use everyday language — no SQL required. SpeakData understands and queries your data automatically."
              },
              {
                title: "3. Receive instant insights",
                desc: "Get summaries, visualizations, predictions, and more in real time, ready to use or share."
              },
            ].map((item, idx) => (
              <Paper key={idx} elevation={3} sx={{ p: 3, bgcolor: "#1E293B", flex: 1 }}>
                <Typography variant="h6" sx={{ color: titleGray, mb: 1 }}>{item.title}</Typography>
                <Typography variant="body2" color={textGray}>{item.desc}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features */}
      <Box ref={featuresRef} py={10} px={2} sx={{ overflowX: "auto", bgcolor: "#F8FAFC" }}>
  {/* <Container> */}
    <Box
      justifyContent={"center"}
      alignItems={"center"}
    >

    {/* Main Flow Layout */}
    <Box
      // mt={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={1}
    >
      {/* Ask Question Block */}
    <Box display="flex" justifyContent="flex-end" sx={{width: "20%"}}>
      <Paper elevation={3} sx={{ px: 4, py: 3, borderRadius: 3, bgcolor: "#F1F5F9", textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          Ask Question in Natural Language
        </Typography>
      </Paper>
    </Box>
    <EastIcon sx={{ color: "#0F172A" }} />
      {/* Input Data Types */}
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          minWidth: 250,
          borderColor: "#CBD5E1",
          bgcolor: "white",
          textAlign: "center",
          borderRadius: 3
        }}
      >
        <Box border="1px solid #ef4444" borderRadius={2} p={2} mb={2}>
          <Typography fontWeight="bold" sx={{ color: "#ef4444" }}>
            Unstructured
          </Typography>
          <Typography variant="body2">PDFs, JPEGs, MP3, Movies...</Typography>
        </Box>
        <Box border="1px solid #3b82f6" borderRadius={2} p={2} mb={2}>
          <Typography fontWeight="bold" sx={{ color: "#3b82f6" }}>
            Semi-structured
          </Typography>
          <Typography variant="body2">CSV, JSON, XML, MongoDB...</Typography>
        </Box>
        <Box border="1px solid #f97316" borderRadius={2} p={2}>
          <Typography fontWeight="bold" sx={{ color: "#f97316" }}>
            Structured
          </Typography>
          <Typography variant="body2">Oracle, MSSQL, MySQL, DB2...</Typography>
        </Box>
      </Paper>

      {/* Arrow */}
      <EastIcon sx={{ color: "#0F172A" }} />

      {/* SpeakData.ai Center Box */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          minWidth: 220,
          textAlign: "center",
          bgcolor: "#1E293B",
          color: "white",
          borderRadius: 3
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          SpeakData.ai
        </Typography>
      </Paper>

      {/* Outputs */}
      <Box display="flex" flexDirection="column" gap={3}>
        <Box display="flex" alignItems="center" gap={2}>
          <NorthEastIcon sx={{ color: "#0F172A" }} />
          <Paper sx={{ p: 2, width: "90%", bgcolor: "#F1F5F9", borderRadius: 2, alignItems:"center",justifyContent:"center" }} elevation={1}>
            <Typography align={"center"} variant="body2">Data Visualization</Typography>
          </Paper>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <EastIcon sx={{ color: "#0F172A" }} />
          <Paper sx={{ p: 2, width: "90%", bgcolor: "#F1F5F9", borderRadius: 2 }} elevation={1}>
            <Typography align={"center"} variant="body2">ML Models & Predictive Insights</Typography>
          </Paper>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <SouthEastIcon sx={{ color: "#0F172A" }} />
          <Paper sx={{ p: 2, width: "90%", bgcolor: "#F1F5F9", borderRadius: 2 }} elevation={1}>
            <Typography align={"center"} variant="body2">Automated Reports and Insights in NL</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
    </Box>
  {/* </Container> */}
</Box>


      {/* Pricing */}
      <Box ref={pricingRef} py={10} px={2} textAlign="center">
        <Typography variant="h4" gutterBottom sx={{ color: titleGray }}>Pricing</Typography>
        <Typography color={textGray}>Custom plans available based on business needs.</Typography>
      </Box>

      {/* Resources */}
      <Box ref={resourcesRef} py={10} px={2} textAlign="center">
        <Typography variant="h4" gutterBottom sx={{ color: titleGray }}>Resources</Typography>
        <Typography color={textGray}>Access documentation, case studies, and tutorials.</Typography>
      </Box>

      {/* About */}
      <Box ref={aboutRef} py={10} px={2} textAlign="center">
        <Typography variant="h4" gutterBottom sx={{ color: titleGray }}>About</Typography>
        <Typography color={textGray}>SpeakData is designed to empower your data journey.</Typography>
      </Box>

      {/* Contact */}
      <Box ref={contactRef} py={10} px={2} textAlign="center">
        <Typography variant="h4" gutterBottom sx={{ color: titleGray }}>Contact</Typography>
        <Typography color={textGray}>Reach out to us at contact@speakdata.ai</Typography>
      </Box>

      {/* See SpeakData in Action */}
      <Box py={10} px={2} textAlign="center">
        <Typography variant="h4" gutterBottom sx={{ color: titleGray }}>See SpeakData in Action</Typography>
        <Typography color={textGray}>From raw data to clear insights — all in Natural Language.</Typography>
        <Box mt={4}>
          <img src="https://placehold.co/800x400?text=Demo+GIF" alt="SpeakData Demo GIF" style={{ maxWidth: "100%", borderRadius: 16 }} />
        </Box>
      </Box>

      {/* Demo Form */}
      <Box ref={demoFormRef} py={10} px={2} textAlign="center">
        <Typography variant="h4" gutterBottom sx={{ color: titleGray }}>
          The Power of a Full Data Team.
        </Typography>
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4, bgcolor: "#1E293B" }}>
            <Stack spacing={2}>
              <TextField
                label="Work Email"
                required
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: textGray } }}
                InputProps={{
                  sx: {
                    color: titleGray,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: textGray,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                  },
                }}
              />
              <TextField
                label="First Name"
                required
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: textGray } }}
                InputProps={{
                  sx: {
                    color: titleGray,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: textGray,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                  },
                }}
              />
              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: textGray } }}
                InputProps={{
                  sx: {
                    color: titleGray,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: textGray,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                  },
                }}
              />
              <TextField
                label="Company Name"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: textGray } }}
                InputProps={{
                  sx: {
                    color: titleGray,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: textGray,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: accentColor,
                    },
                  },
                }}
              />
            </Stack>
          </Paper>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: 5,
              mt: 4,
              color: accentColor,
              borderColor: accentColor,
              ...buttonHover,
            }}
          >
            Request a Demo
          </Button>
        </Container>
      </Box>
    </Box>
  );
}