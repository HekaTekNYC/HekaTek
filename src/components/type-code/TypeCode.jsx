import React, {useEffect, useState} from "react"
import "./type-code.scss"

const TypeCode = () => {
  const codeString = `function createFunWebsite() {
    console.log("Starting the fun website creation process...");

    // Fake lines of code for whimsical effect
    let theme = "Magic Unicorn";
    let excitementLevel = "high";
    let pixelsPainted = Math.floor(Math.random() * 1000);

    console.log("Applying " + theme + " theme...");
    console.log("Excitement level: " + excitementLevel);
    console.log("Pixels painted: " + pixelsPainted);

    // Final whimsical touch
    console.log("✨ Done! The website is now sparkling with joy! ✨");
  }

  // Example usage
  createFunWebsite();`

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
        /(document|const|function)/g,
        '<span class="code-keyword">$1</span>'
      )
      .replace(/('.*?')/g, '<span class="code-string">$1</span>')
      .replace(/(\/\/.*?$)/gm, '<span class="code-comment">$1</span>')
      .replace(
        /(getElementById|addEventListener|textContent|value)/g,
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
