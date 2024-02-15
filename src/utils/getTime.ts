export const getTime = (): string => {
  const currentTime = new Date()

  const hours = currentTime.getHours() % 12 || 12 // Convert 24-hour format to 12-hour format
  const minutes = currentTime.getMinutes().toString().padStart(2, '0')
  const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM'
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0')
  const day = currentTime.getDate().toString().padStart(2, '0')
  const year = currentTime.getFullYear()

  const formattedTime = `${hours}:${minutes} ${ampm}, ${month}/${day}/${year}`

  return formattedTime
}
