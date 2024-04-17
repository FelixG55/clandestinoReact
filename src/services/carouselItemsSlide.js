import { useState } from 'react'

export const carouselItemsSlide = (items, carouselItemsSlide) => {
  const [startIndex, setStartIndex] = useState(0)
  const totalItems = carouselItemsSlide.length
  const itemsToShow = items

  const nextItems = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalItems)
  }

  const prevItems = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
  }

  const visibleItems = startIndex + itemsToShow <= totalItems
    ? carouselItemsSlide.slice(startIndex, startIndex + itemsToShow)
    : [...carouselItemsSlide.slice(startIndex), ...carouselItemsSlide.slice(0, itemsToShow - (totalItems - startIndex))]

  return { visibleItems, nextItems, prevItems }
}
