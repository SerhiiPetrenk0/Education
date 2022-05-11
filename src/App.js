import React, { useState } from 'react';
import { Header } from './components/Header';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerLeft } from './components/Drawer'
import { HeaderDrawer } from './components/HeaderDrawer'
export default function App() {
  const [ DrawerOpen, setDraverOpen ] = useState(false)
  return (<>
        <HeaderDrawer />
{/*         <Header setDraverOpen={setDraverOpen} />
        <DrawerLeft DrawerOpen={DrawerOpen} /> */}
  </>
  );
}
