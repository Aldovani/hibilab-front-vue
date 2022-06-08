import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Course } from '~/models'
import { $axios } from '~/utils/nuxt-instance'
interface UpdatePayload {
  id: number
  name: string
  description: string
  teacher: string
  requirements: string
  difficulty: string
}
interface DestroyPayload {
  id: number
}
@Module({ name: 'Course/update', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private course = {} as Course
  private thumbnail = {} as { url: string }

  get $course() {
    return this.course
  }

  get $thumbnail() {
    return this.thumbnail
  }

  // mutations are functions that change state

  @Mutation
  private UPDATE_COURSE(course: Course) {
    this.course = course
  }

  @Mutation
  private UPDATE_THUMBNAIL(thumbnail: string) {
    this.thumbnail.url = thumbnail
  }

  @Action
  public async update(payload: UpdatePayload) {
    const data = await $axios.$put(`/course/${payload.id}`, payload)
    this.context.commit('UPDATE_COURSE', data)
  }

  @Action
  public async destroy(payload: DestroyPayload) {
    await $axios.$delete(`/course/${payload.id}`)
    this.context.commit('Course/search/index', 1, { root: true })
  }
}
