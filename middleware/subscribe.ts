import { Middleware } from '@nuxt/types'

const subscribe: Middleware = ({ redirect, store }) => {
  if (store.state.users.user.subscription.status !== 'active') {
    redirect('/')
  }
}

export default subscribe
