export const useCalendlyPopup = () => {
  const openCalendlyPopup = () => {
    if (window.Calendly) {
      console.log("Calendly script loaded, opening popup.")
      Calendly.initPopupWidget({
        url: "https://calendly.com/hekatek-hekateknyc/30min",
      })
    } else {
      console.log("Calendly script not loaded yet.")
    }
  }

  return openCalendlyPopup
}
