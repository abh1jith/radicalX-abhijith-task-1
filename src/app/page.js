'use client'
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const user = {
    coins: 10000000,
    diamonds: 20000
};

function updateDisplay() {
  
  let screenWidth = window.innerWidth;
  let coinsElement = document.getElementById("userCoins");
  let diamondsElement = document.getElementById("userDiamonds");
  if(600 <= screenWidth && screenWidth < 800){
    document.getElementById("logo").setAttribute("src", "https://uploads-ssl.webflow.com/61a8d1d6f4ba145b578385f7/62ade6202da6393f23edcca0_32x232.png");
    document.getElementById("logo").setAttribute("width", "30px");
    document.getElementById("smallScreen").style.display = "flex";
    document.getElementById("bigScreen").style.display = "none";
  }
  else{
  if (screenWidth < 600) {
    document.getElementById("smallScreen").style.display = "flex";
    document.getElementById("bigScreen").style.display = "none";


    if(String(user.coins).length <= 6){
    coinsElement.innerHTML =" &#128178; " + String(Math.floor(Number(user.coins) / 1000)) + "K";
    }
    else{
    coinsElement.innerHTML =" &#128178; " + String(Math.floor(Number(user.coins) / 1000000)) + "M";
    } // 1000000
    if(String(user.diamonds).length <= 6){
      diamondsElement.innerHTML =" &#128142; " + String(Math.floor(Number(user.diamonds) / 1000)) + "K";
    }
    else{
      diamondsElement.innerHTML =" &#128178; " + String(Math.floor(Number(user.diamonds) / 1000000)) + "M";
    }
    // Changing text for smaller screens
    document.getElementById("logo").setAttribute("src", "https://uploads-ssl.webflow.com/61a8d1d6f4ba145b578385f7/62ade6202da6393f23edcca0_32x232.png");
    document.getElementById("logo").setAttribute("width", "30px");

  }
  // Reverting the changed text back to original, or leaving the original text as is
  else {
    coinsElement.innerHTML =" &#128178; " + user.coins;
    diamondsElement.innerHTML =" &#128142; " + user.diamonds;

    document.getElementById("logo").setAttribute("src", "https://uploads-ssl.webflow.com/61a8d1d6f4ba145b578385f7/62e25f0a74e45d39dd926f51_radialx%20course%20player%20logo.png");
    document.getElementById("logo").setAttribute("width", "120px");

    document.getElementById("bigScreen").style.display = "flex";
    document.getElementById("smallScreen").style.display = "none";

  }}
}
// Checking for the screen size every time the screen is loaded/reloaded or resized
window.addEventListener("load", updateDisplay);
window.addEventListener("resize", updateDisplay);

  // const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

export default function Home() {

// Trial Start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    console.log(value);
    setAnchorEl(null);
  };
const handleCloseP = () => {
    document.getElementById("basic-button").innerHTML = "&#9992; Missions"
    setAnchorEl(null);
  };
  const handleCloseA = () => {
    document.getElementById("basic-button").innerHTML = "&#127942; Leaderboard "
    setAnchorEl(null);
  };
  const handleCloseL = () => {
    document.getElementById("basic-button").innerHTML = "&#128176; Rewards"
    setAnchorEl(null);
  };


// Trial End


  const [invisible, setInvisible] = React.useState(false);
  const handleVisibility = () => {
    setInvisible(!invisible);
    if(!invisible){
      document.getElementById("visibility").innerText = "SHOW ACTIVE STATUS";
    }
    else{
      document.getElementById("visibility").innerText = "HIDE ACTIVE STATUS";
    }
  };

  return (
    <div >
      {/* <NavbarContainer>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer> */}
    <AppBar position="static" sx={{ my: 0, backgroundColor: "#1F222A", color: 'white', display: 'flex' }} >
        <Toolbar  >
     
          <img id="logo"
          width="120px"
          src='https://uploads-ssl.webflow.com/61a8d1d6f4ba145b578385f7/62e25f0a74e45d39dd926f51_radialx%20course%20player%20logo.png' />

          {/* <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
> */}
 {/* responsive menu starts */}
 <Box 
 id = "smallScreen"
sx={{flexGrow:1, display: "none"}}
 >
<Button
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
  
  variant='outlined'
  sx={{ 
      border: 'none',
      outline: 'none',
      position: 'relative',
      zIndex: '1',
      borderRadius: '15px',
      color: 'white',
      background: 'linear-gradient(to left, #00D9F5, #00F5A0)', 
      "&:before": {
        content: '""',
        position: 'absolute',
        left: '1px',
        right: '1px',
        top: '1px',
        bottom: '1px',
        borderRadius: '14px',
        backgroundColor: '#1F222A',
        zIndex: '-1',
        transition: '200ms'
      },
      my: {xs:0, md:0},
      display: 'flex',
      "&:after": {
        content: 'attr(data)',
        fontSize: '16px',
        background: 'linear-gradient(to left, #00D9F5, #00F5A0)',
        webkitBackgroundClip: 'text',
        color: 'transparent',
        transition: '200ms'
      },
      "&:hover": {
        // opacity: '50%',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        color: 'white'
      }
 }}
      >
        &#9992; Missions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        defaultValue={"Missions"}
        inputProps={{
            pageTitle: 'title'
          }}
        sx={{
          // backgroundColor: '#1F222A'
        }}
      >
        <MenuItem value={"Missions"} onClick={handleCloseP}
          sx={{backgroundColor: '#1F222A',
          color:'white',
          "&:hover": {
            backgroundColor: 'white',
              color: '#1F222A'
          }}}>&#9992; Missions</MenuItem>
        <MenuItem 
        value={"Leaderboard"} 
        onClick={handleCloseA}
        sx={{backgroundColor: '#1F222A',
          color:'white',
          "&:hover": {
            backgroundColor: 'white',
              color: '#1F222A'
          }}}>&#127942; Leaderboard </MenuItem>
        <MenuItem 
        value={"Rewards"} 
        onClick={handleCloseL}
        sx={{backgroundColor: '#1F222A',
          color:'white',
          "&:hover": {
              backgroundColor: 'white',
              color: '#1F222A'
          }}} >&#128176; Rewards</MenuItem>
      </Menu>
      </Box>
      {/* responsive menu ends */}
          <Box  
          id = "bigScreen"
          sx={{
            flexGrow: 1, 
            justifyContent: 'center', flexDirection:"row" , display: { xs: 'flex', md: 'flex' } }}>
              <Button
                sx={{ my: {xs:0, md:0},  color: 'white', display: 'block', "&:hover": {
                borderBottom: 2,
                borderColor: "#00F5A0"
              } }}
              >&#9992; Missions
              </Button>

              <Button
                sx={{ my: {xs:1, md:0}, color: 'white', display: 'block', "&:hover": {
                borderBottom: 2,
                borderColor: "#00F5A0"
              } }}
              >&#127942; Leaderboard 
              </Button>
              <Button
                sx={{ my: {xs:0, md:0}, color: 'white', display: 'block' , "&:hover": {
                  borderBottom: 2,
                  borderColor: "#00F5A0"
                }
              }}
              >&#128176; Rewards
              </Button>
               </Box>
{/* </Stack> */}
          
          <Box sx={{ 
            flexGrow: 0,
             flexDirection:  "row", display: { xs: 'flex', md: 'flex' }, wordSpacing:2 }}>
              <Button
                id="userDiamonds"
                sx={{ my: {xs:0, md:0}, color: 'white', display: 'flex', border: 2, borderColor: "#2478DC" , borderRadius:15 }}
              >&#128142; {user.diamonds}
              </Button>
              <Button
                id="userCoins"
                sx={{ my: {xs:0, md:0}, color: 'white', display: 'flex', border: 2, borderColor: "#EEBE14", borderRadius:15 }}
              >&#128178; {user.coins}
              </Button>
          </Box>
              <Badge variant="dot" color="success" invisible={invisible}>
              <img
                  alt="Remy Sharp"
                  src="./favicon.ico"
                  style={{height: "40px"}}
              />
              </Badge>
        </Toolbar>
    </AppBar>
    <Container>
    <Typography variant='h2'>Click the below button to </Typography>
    <h4>Click the below button to</h4>
    <Button 
    id='visibility'
    variant='contained'
    onClick={ handleVisibility }
    >HIDE ACTIVE STATUS</Button>
    </Container>
    </div>
  );
}
