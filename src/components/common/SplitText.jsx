// Renders text with each word wrapped in .mask-wrap > .word for kinetic GSAP animations
export default function SplitText({ text, className = '' }) {
  if (!text) return null
  const lines = text.split('\n')

  return (
    <span className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex}>
          {line.split(/(\s+)/).map((segment, segIndex) => {
            if (segment.trim().length > 0) {
              return (
                <span key={segIndex} className="mask-wrap">
                  <span className="word">{segment}</span>
                </span>
              )
            }
            return segment
          })}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  )
}
