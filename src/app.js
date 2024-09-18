import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
    window.otpless = (otplessUser) => {
      if(otplessUser.identities[0].methods[0] != 'WHATSAPP'){
        localStorage.setItem('name',otplessUser.identities[0].name);
      }else{
        localStorage.setItem('name','');
      }
      window.location.reload();
    };
  if (localStorage.getItem("nekoTssel-PTO") === null ) {
    return <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <div id="otpless-login-page"></div>
    </div>
  }
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
