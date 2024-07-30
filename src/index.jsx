import React from "react"
import ReactDOM from "react-dom/client"
import {NavbarProvider} from "./contexts/Navbar.context"
import "./index.scss"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <NavbarProvider>
    <App />
  </NavbarProvider>
)
