import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MantineProvider } from "@mantine/core";
import { HashRouter} from "react-router-dom";

import '@mantine/core/styles.css'; // applying mantine ui global styles

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider
            theme={{
                fontFamily: 'JetBrains Mono, monospace',
                primaryColor: 'blue',
                defaultRadius: 'xl',
                components: {
                    Button: {
                        defaultProps: {
                            size: 'md',
                        }
                    },
                    Container: {
                        defaultProps: {
                            size: 'lg'
                        }
                    }
                }
            }}
            defaultColorScheme="dark"
        >
            <HashRouter>
                <App />
            </HashRouter>
        </MantineProvider>
    </StrictMode>,
)
