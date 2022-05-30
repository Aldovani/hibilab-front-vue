import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Course } from '~/models'
import { $axios } from '~/utils/nuxt-instance'

interface CreatePayload {
  name: string
  teacher: string
  description: string
  requirements: string
  difficulty: string
}
interface UpdatePayload {
  id: number
  name: string
  description: string
  teacher: string
  requirements: string
  difficulty: string
}
interface PaginationType {
  current_page: number
  last_page: number
  per_page: number
}
interface DestroyPayload {
  id: number
}

@Module({ name: 'courses', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private courses = [] as Course[]
  private course = {} as Course
  private pagination = {
    current_page: 1,
    last_page: 1,
    per_page: 10,
  }

  // getters return values
  get $courses() {
    return this.courses
  }

  get $course() {
    return this.course
  }

  get $pagination() {
    return this.pagination
  }

  // mutations are functions that change state
  @Mutation
  private UPDATE_COURSES(courses: Course[]) {
    this.courses = courses
  }

  @Mutation
  private UPDATE_PAGINATION(pagination: PaginationType) {
    this.pagination = pagination
  }

  @Mutation
  private UPDATE_COURSE(course: Course) {
    this.course = course
  }

  // actions are functions that commit mutations
  @Action
  public async index(page: number = 1) {
    const { meta, data } = await $axios.$get(`/course/?page=${page}`)
    this.context.commit('UPDATE_COURSES', data)
    this.context.commit('UPDATE_PAGINATION', meta)
  }

  @Action
  public async show(id: string) {
    const data = await $axios.$get(`/course/${id}`)
    this.context.commit('UPDATE_COURSE', data)
  }

  @Action
  public async create(payload: CreatePayload) {
    const data = await $axios.$post(`/course`, payload)
    this.context.commit('UPDATE_COURSE', data)
  }

  @Action
  public async update(payload: UpdatePayload) {
    const data = await $axios.$put(`/course/${payload.id}`, payload)
    this.context.commit('UPDATE_COURSE', data)
  }

  @Action
  public async destroy(payload: DestroyPayload) {
    await $axios.$delete(`/course/${payload.id}`)
    await this.context.dispatch('index', this.pagination.current_page)
  }
}
