import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'virtual:svg-icons-register';
import App from './App.tsx'
import './index.css';

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
