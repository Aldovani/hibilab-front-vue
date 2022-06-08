import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User, Course } from '@/models'
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
  private erros = {} as { [key: string]: string }
  private courses = [] as Course[]

  // getters return values
  get $user() {
    return this.user
  }

  get $courses() {
    return this.courses
  }

  get $avatar() {
    return (
      this.user.avatar?.url ||
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    )
  }

  // mutations are functions that change state
  @Mutation
  private UPDATE_USER(user: User) {
    this.user = user
  }

  @Mutation
  private UPDATE_COURSES(courses: Course[]) {
    this.courses = courses
  }

  @Mutation
  private SET_USER_AVATAR(avatar: User['avatar']) {
    this.user.avatar = avatar
  }

  @Mutation
  private SET_ERRORS(erros: { [key: string]: string }) {
    this.erros = erros
  }

  @Action
  public async getCourses() {
    try {
      const data = await $axios.$get('/inscribe/course')

      this.context.commit('UPDATE_COURSES', data)
    } catch (e) {
      console.error(e)
    }
  }

  @Action
  public async update(user: UpdatePayload | null) {
    if (!user) {
      this.context.commit('UPDATE_USER', {})
      return
    }

    try {
      const data = await $axios.$put('/user', user)
      this.context.commit('UPDATE_USER', data)
    } catch (e) {
      console.log(e)
    }
  }

  @Action
  public async create(payload: CreatePayload) {
    try {
      const data = await $axios.$post('/user/register', payload).catch((e) => {
        console.log(e.response)
        this.context.commit('SET_ERRORS', e.response.data.errors)
      })

      this.context.commit('UPDATE_USER', data)
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
