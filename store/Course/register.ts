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

@Module({ name: 'Course/register', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private course = {} as Course

  // getters return values

  get $course() {
    return this.course
  }

  // mutations are functions that change state

  @Mutation
  private UPDATE_COURSE(course: Course) {
    this.course = course
  }

  @Action
  public async create(payload: CreatePayload) {
    const data = await $axios.$post(`/course`, payload)
    this.context.commit('UPDATE_COURSE', data)
  }
}
