import { useEffect, useState } from 'react'

export const useNearRef = ({
  distance = '1000px',
  externalRef = '',
  once = true,
}) => {
  const [isNearScreen, setNearScreen] = useState(false)

  useEffect(() => {
    const onIntersection = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setNearScreen(true)
        once && observer.unobserve(el.target)
      } else {
        !once && setNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: distance,
    })

    if (externalRef !== null) observer.observe(externalRef.current)

    return () => observer && observer.disconnect()
  })
  return { isNearScreen }
}
