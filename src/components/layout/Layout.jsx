import Navigation from "../navigation/Navigation"
import Footer from "../footer/Footer"

const Layout = ({children}) => (
  <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
    <Navigation />
    <main
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        marginTop: "70px",
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
