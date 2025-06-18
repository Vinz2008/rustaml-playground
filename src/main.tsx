import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

(window as any).wasmLog = (msg: string) => {
  // Forward to React or store in a log buffer
  window.dispatchEvent(new CustomEvent("wasm-log", { detail: msg }));
};

(window as any).wasmError = (msg : string) => {
  window.dispatchEvent(new CustomEvent("wasm-error", { detail: msg }));
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
