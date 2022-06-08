import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

interface UpdatePayload {
  file: Blob
  courseId: number
}

@Module({ name: 'Course/thumbnail', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private modalState = false

  get $modalState() {
    return this.modalState
  }

  @Mutation
  private UPDATE_STATE_MODAL(stateModal: boolean) {
    this.modalState = stateModal
  }

  @Action
  public setStateModal(state: boolean) {
    this.context.commit('UPDATE_STATE_MODAL', state)
  }

  @Action
  public async updateThumbnail(payload: UpdatePayload) {
    try {
      const formData = new FormData()
      formData.append('file', payload.file)
      const thumbnail = await $axios.$put(
        `/course/thumbnail/${payload.courseId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      this.context.commit('Course/update/UPDATE_THUMBNAIL', thumbnail.url, {
        root: true,
      })
    } catch (e) {
      console.log(e)
    }
  }
}
