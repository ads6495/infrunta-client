/**
 * Copyright (c) [Albert Strange] [2024]
 * 
 * This source code is licensed under the CC BY-NC-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
