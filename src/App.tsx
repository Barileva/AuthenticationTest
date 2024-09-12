import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importera nödvändiga MSAL-komponenter
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from './authConfig'; // Konfigurationen du definierade
import { SignInButton } from './components/SignInButton';
import { SignOutButton } from './components/SignOutButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MsalProvider instance={msalInstance}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Här kan du inkludera autentiseringsknapparna */}
      <SignInButton />
      <SignOutButton />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </MsalProvider>
  )
}

export default App;
