
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {HashRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
<HashRouter>
    <App />
  </HashRouter>,
)
