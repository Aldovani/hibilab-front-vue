import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

@Module({ name: 'Modal/classeDelete', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private stateModal = false
  private classeId = 0

  // getters return values
  get $stateModal() {
    return this.stateModal
  }

  get $classeId() {
    return this.classeId
  }

  // mutations are functions that change state
  @Mutation
  private UPDATE_STATE_MODAL(stateModal: boolean) {
    this.stateModal = stateModal
  }

  @Mutation
  private UPDATE_CLASSE_ID(id: number) {
    this.classeId = id
  }

  // actions are functions that commit mutations
  @Action
  public setStateModal(state: boolean) {
    this.context.commit('UPDATE_STATE_MODAL', state)
  }

  @Action
  public setClasseId(classeId: number) {
    this.context.commit('UPDATE_CLASSE_ID', classeId)
  }

  @Action
  public async Delete() {
    await $axios.$delete(`/classe/${this.classeId}`)

    this.context.commit('UPDATE_STATE_MODAL', false)
  }
}
