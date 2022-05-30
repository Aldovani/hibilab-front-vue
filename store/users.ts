import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User } from '@/models'
import { $axios, $cookies } from '~/utils/nuxt-instance'

interface CreatePayload {
  email: string
  name: string
  password: string
  passwordConfirmation: string
}
interface UpdatePayload {
  email: string
  name: string
}

@Module({ name: 'users', namespaced: true, stateFactory: true })
export default class Users extends VuexModule {
  private user = {} as User

  // getters return values
  get $user() {
    return this.user
  }

  // mutations are functions that change state
  @Mutation
  private UPDATE_USER(user: User) {
    this.user = user
  }

  @Action
  public async update(user: UpdatePayload | null) {
    if (!user) {
      this.context.commit('UPDATE_USER', {})
      return
    }

    try {
      const data = await $axios.$put('/user', user)
      return this.context.commit('UPDATE_USER', data)
    } catch (e) {
      console.log(e)
    }
  }

  @Action
  public async create(payload: CreatePayload) {
    try {
      const data = await $axios.$post('/user/register', payload)
      return this.context.commit('UPDATE_USER', data)
    } catch (e) {
      console.log(e)
    }
  }

  // actions are functions that commit mutations
  @Action
  public async show() {
    if (!$cookies.get('token')) return

    try {
      const data = await $axios.$get('/user')

      return this.context.commit('UPDATE_USER', data)
    } catch (e) {
      console.log(e)
    }
  }
}
