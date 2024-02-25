
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-r5jzew1wdvvejf84.us.auth0.com"
  clientId="qUmKLBfy2Swtrua3X1bcXFTHPIFQHliY"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </Auth0Provider>,
)
