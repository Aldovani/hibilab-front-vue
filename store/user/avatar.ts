import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

interface UpdatePayload {
  file: Blob
}

@Module({ name: 'user/avatar', namespaced: true, stateFactory: true })
export default class Users extends VuexModule {
  @Action
  public async update(payload: UpdatePayload) {
    const formData = new FormData()
    formData.append('file', payload.file)

    const avatar = await $axios.$put('/user/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    this.context.commit('users/SET_USER_AVATAR', avatar, { root: true })
  }
}
