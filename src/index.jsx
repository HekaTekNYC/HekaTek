import ReactDOM from "react-dom/client"
import {NavbarProvider} from "./contexts/Navbar.context"

import App from "./App"
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <NavbarProvider>
    <App />
  </NavbarProvider>
)
