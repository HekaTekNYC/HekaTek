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
        console.log("Video is isVisible, playing video")
        videoRef.current.play().catch(e => {
          // Handle the error, possibly log it or display a message
          console.error("Failed to play video:, e")
        })
      } else {
        console.log("Video is not visible, video is paused")
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
        // poster={poster}
        aria-label={alt}
        style={{
          objectFit: "contain",
          display: "block",
          width: "100%",
          height: "100%",
          //   ...style,
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
