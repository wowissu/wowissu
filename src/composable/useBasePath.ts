

export function addBasePrefix (path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}