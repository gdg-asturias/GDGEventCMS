import { getRedirectAdminPath } from '../utils/redirect'

export default function({ store, redirect, route }) {
  const isAuthenticated = store.getters['account/isAuthenticated']

  if (isAuthenticated && route.path.includes('login')) {
    return redirect(getRedirectAdminPath())
  }

  if (!isAuthenticated && isAdminRoute(route)) {
    return redirect('/admin/login')
  }
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path === '/admin')) {
    return true
  }
}
