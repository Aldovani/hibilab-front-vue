import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '~/utils/nuxt-instance'

interface CreatePayload {
  email: string
  password: string
}
interface UpdatePayload {
  token?: string | null
}

type token = string | null

@Module({ name: 'auth', namespaced: true, stateFactory: true })
export default class Auth extends VuexModule {
  private token = null as token

  // getters return values
  get $token() {
    return this.token
  }

  // mutations are functions that change state
  @Mutation
  private UPDATE(token: string | null) {
    this.token = token
  }

  // actions are functions that commit mutations
  @Action
  public async create(payload: CreatePayload) {
    const { token } = await $axios.$post('/auth', payload)
    $cookies.set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    })

    this.context.commit('UPDATE', token)
  }

  @Action
  public update(payload: UpdatePayload) {
    const token = payload?.token ? payload.token : $cookies.get('token')
    this.context.commit('UPDATE', token || null)
  }

  @Action
  public async destroy() {
    await $axios.$delete('/auth')
    $cookies.remove('token')
    this.context.commit('UPDATE', null)
  }
}
