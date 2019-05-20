export const getRedirectAdminPath = () => {
  let path = localStorage.getItem('route')
  if (!path) {
    path = '/admin'
  }

  return path
}
