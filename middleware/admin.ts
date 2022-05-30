import { Middleware } from '@nuxt/types'

const admin: Middleware = ({ redirect, store }) => {
  if (store.state.users.user.permission !== 'admin') {
    return redirect('/')
  }
}

export default admin
