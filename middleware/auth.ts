import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ redirect, store }) => {
  if (!store.state.auth.token) {
    redirect('/login')
  }
}

export default auth
