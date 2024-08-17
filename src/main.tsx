import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App/App.tsx'
import { ConfigProvider } from 'antd';
import { theme } from './Data/theme.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
