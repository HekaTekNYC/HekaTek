import { createContext, useState } from "react"

export const NavbarContext = createContext({
  isMobileNavOpen: false,
  toggleMobileNav: () => {},
})

export const NavbarProvider = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  const value = {
    isMobileNavOpen,
    setIsMobileNavOpen,
    toggleMobileNav,
  }

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  )
}
