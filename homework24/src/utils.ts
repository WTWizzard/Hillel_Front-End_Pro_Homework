export const truncate = (text: string, length = 5) =>
  `${text.slice(0, length)}...`;