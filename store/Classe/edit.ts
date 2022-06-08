import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Class } from '~/models'
import { $axios } from '~/utils/nuxt-instance'
import { courseSearch } from '@/store'
interface DestroyPayload {
  id: number
}
interface UpdatePayload {
  file: Blob
  classeId: number
  name: string
}

@Module({ name: 'Classe/edit', namespaced: true, stateFactory: true })
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
  private UPDATE_CLASSE(classe: Class) {
    this.classe = classe
  }

  private UPDATE_CLASSE_NAME(name: string) {
    this.classe.name = name
  }

  private UPDATE_CLASSE_VIDEO(url: string) {
    this.classe.video.url = url
  }

  @Mutation
  private UPDATE_STATE_MODAL(state: boolean) {
    this.stateModal = state
  }

  @Action
  public async update(payload: UpdatePayload) {
    try {
      const formData = new FormData()
      formData.append('file', payload.file)
      const result = await Promise.all([
        $axios.$put(`/classe/${payload.classeId}`, { name: payload.name }),
        $axios.$put(`/classe/video/${payload.classeId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      ])

      this.context.dispatch('UPDATE_CLASSE_NAME', result[0].name)

      // this.context.commit('UPDATE_COURSE_VIDEO', result[1])
    } catch (e) {
      console.log(e)
    }
  }

  @Action public setClasse(classeId: number) {
    courseSearch.$course.classes.find((classe) =>
      classe.id === classeId
        ? this.context.commit('UPDATE_CLASSE', classe)
        : null
    )
  }

  @Action public setStateModal(state: boolean) {
    this.context.commit('UPDATE_STATE_MODAL', state)
  }

  @Action
  public async destroy(payload: DestroyPayload) {
    await $axios.$delete(`/course/${payload.id}`)
    this.context.commit('Course/search/index', 1, { root: true })
  }
}
