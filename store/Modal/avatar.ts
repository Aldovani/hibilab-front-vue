import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'Modal/avatar', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private stateModal = false

  // getters return values
  get $stateModal() {
    return this.stateModal
  }

  // mutations are functions that change state
  @Mutation
  private UPDATE_STATE_MODAL(stateModal: boolean) {
    this.stateModal = stateModal
  }

  // actions are functions that commit mutations
  @Action
  public toggleStateModal() {
    const newState = !this.stateModal
    this.context.commit('UPDATE_STATE_MODAL', newState)
  }
}
