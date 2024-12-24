import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";

import '@mantine/core/styles.css'; // applying mantine ui global styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider theme={{ fontFamily: 'JetBrains Mono'}} withGlobalStyles withNormalizeCSS>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </MantineProvider>
  </StrictMode>,
)
