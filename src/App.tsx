import React from 'react';
import styles from './App.module.scss';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { createTheme, Link, ThemeProvider, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';


function HeaderLink({ children, to }: { children: React.ReactNode, to: string }) {
  return (
    <Link
      component={RouterLink}
      to={to}
      variant='button'
      color='inherit'
      sx={{ my: 1, mx: 1.5 }}>
      {children}
    </Link>
  )
}

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96000F",
    }
  }
})

function App() {
  return (
<<<<<<< HEAD
    <div className={styles.root}>
      <header className={styles.header}>
        <img src="/cinema-ico.png" className={styles.logo} alt="logo" />
        <ul>
          <li>
            <Link className={styles.link} to="/">Home</Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={styles.link} to="/movies">Movies</Link>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
=======
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar >
        <Toolbar>
          <LiveTvOutlinedIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color ="inherit" noWrap>
            The movies db
          </Typography>
          <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
>>>>>>> df679a3b9d11fa8cc107f0c0c99aef3e7cef3e42
        <Outlet />
      </main>

    </ThemeProvider >
  );
}

export default App;
