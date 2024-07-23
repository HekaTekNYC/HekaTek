import React, {useEffect, useState} from "react"
import "./type-code.scss"

const TypeCode = () => {
  const codeString = `function createBusinessWebsite() {
  console.log("Starting the business website creation process...");

  // Fake lines of code for business effect
  let theme = "Professional";
  let clientName = "Small Business Inc.";
  let numberOfPages = Math.floor(Math.random() * 10) + 1;

  console.log("Applying " + theme + " theme...");
  console.log("Client: " + clientName);
  console.log("Number of pages: " + numberOfPages);

  // Final business touch
  console.log("🚀 Done! The business website is now live and thriving! 🚀");
}

// Example usage
createBusinessWebsite();`

  const [displayedCode, setDisplayedCode] = useState("")

  useEffect(() => {
    let index = 0
    const typingSpeed = 10

    const typeCode = () => {
      if (index < codeString.length) {
        setDisplayedCode(prev => prev + codeString[index])
        index++
        setTimeout(typeCode, typingSpeed)
      }
    }

    typeCode()
  }, [])

  const highlightCode = code => {
    return code
      .replace(
        /(let|const|function|console|log)/g,
        '<span class="code-keyword">$1</span>'
      )
      .replace(/('.*?')/g, '<span className="code-string">$1</span>')
      .replace(/(\/\/.*?$)/gm, '<span class="code-comment">$1</span>')
      .replace(
        /((getElementById)|addEventListener|textContent|value)/g,
        '<span class="code-function">$1</span>'
      )
      .replace(/({|}|\(|\))/g, '<span class="code-bracket">$1</span>')
  }

  return (
    <div className="hero-glass">
      <div className="hero-code">
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: highlightCode(
                displayedCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")
              ),
            }}
          />
        </pre>
      </div>
    </div>
  )
}

export default TypeCode
