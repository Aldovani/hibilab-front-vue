import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

interface CreatePayload {
  courseId: number
}

@Module({ name: 'user/course', namespaced: true, stateFactory: true })
export default class Users extends VuexModule {
  @Action
  public async create(payload: CreatePayload) {}
}
