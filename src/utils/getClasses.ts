export const getClasses = (classes: (string | undefined)[]): string =>
  classes
    .filter((item) => item !== undefined && item !== '')
    .join(' ')
    .trim()
