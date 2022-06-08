import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Class } from '~/models'
import { $axios } from '~/utils/nuxt-instance'

interface DestroyPayload {
  id: number
}
interface CreatePayload {
  file: Blob
  courseId: number
  name: string
}

@Module({ name: 'Classe/register', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private classe = {} as Class

  private stateModal = false

  public get $stateModal() {
    return this.stateModal
  }

  get $classe() {
    return this.classe
  }

  // mutations are functions that change state

  @Mutation
  private UPDATE_COURSE(course: Class) {
    this.classe = course
  }

  @Mutation
  private UPDATE_STATE_MODAL(state: boolean) {
    this.stateModal = state
  }

  @Action
  public async create(payload: CreatePayload) {
    try {
      const classe = await $axios.$post(`/classe`, {
        name: payload.name,
        id: payload.courseId,
      })
      const formData = new FormData()
      formData.append('file', payload.file)
      await $axios.$put(`/classe/video/${classe.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      this.context.dispatch('Course/search/show', payload.courseId, {
        root: true,
      })
    } catch (e) {
      console.log(e)
    }
  }

  @Action public setStateModal(state: boolean) {
    this.context.commit('UPDATE_STATE_MODAL', state)
  }

  @Action
  public async destroy(payload: DestroyPayload) {
    await $axios.$delete(`/classe/${payload.id}`)
    // this.context.commit('Course/search/index', 1, { root: true })
  }
}
