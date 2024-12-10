import React from "react"

const LavaLamp = () => {
  const svg = document.querySelector(".lava-lamp")

  function createBubble() {
    const bubble = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    )
    bubble.setAttribute("cx", 100)
    bubble.setAttribute("r", Math.random() * 30 + 10)
    bubble.setAttribute("fill", "#69f0ae")
    bubble.classList.add("bubble")

    svg.appendChild(bubble)

    setTimeout(() => bubble.remove(), 5000) // Remove after animation
  }

  setInterval(createBubble, 2000) // Add a new bubble every 2 seconds

  return (
    <div>
      <div class="lava-lamp-container">
        <div class="lamp-body">
          <svg
            viewBox="0 0 200 400"
            xmlns="http://www.w3.org/2000/svg"
            class="lava-lamp"
          >
            {/* <!-- Lamp Shape --> */}
            <path
              d="M100 0 C60 0, 20 50, 50 300 Q100 400, 150 300 C180 50, 140 0, 100 0"
              fill="#3b3f63"
            ></path>

            {/* <!-- Bubbles --> */}
            <circle
              class="bubble bubble1"
              cx="100"
              cy="200"
              r="40"
              fill="#69f0ae"
            ></circle>
            <circle
              class="bubble bubble2"
              cx="90"
              cy="270"
              r="30"
              fill="#69f0ae"
            ></circle>
            <circle
              class="bubble bubble3"
              cx="110"
              cy="100"
              r="20"
              fill="#69f0ae"
            ></circle>
          </svg>
        </div>
        <div class="error-text">
          <h1>404</h1>
          <p>Take a deep long breath...</p>
          <a href="/" class="back-button">
            Back to home
          </a>
        </div>
      </div>
    </div>
  )
}

export default LavaLamp
