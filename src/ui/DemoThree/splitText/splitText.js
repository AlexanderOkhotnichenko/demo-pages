export const splitText = (element) => {
  element.innerHTML = element.textContent.replace(/(\S*)/g, m => {
    return m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span>$&</span>")
  })
  return element
}