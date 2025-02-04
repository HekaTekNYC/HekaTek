import {useEffect, useRef} from "react"
import {useIsVisible} from "../../hooks/use-is-visible"

const VideoComponent = ({src, alt}) => {
  const {isVisible, targetRef} = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  )

  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(e => {
          console.error("Failed to play video:, e")
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVisible])

  return (
    <span
      ref={targetRef}
      style={{
        position: "relative",
        minHeight: "50px",
        height: "100%",
      }}
    >
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={true}
        preload="none"
        playsInline
        aria-label={alt}
        style={{
          objectFit: "contain",
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
    </span>
  )
}

export default VideoComponent
