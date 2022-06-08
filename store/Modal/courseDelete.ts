import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'Modal/courseDelete', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private stateModal = false
  private classeId = 0

  // getters return values
  get $stateModal() {
    return this.stateModal
  }

  get $courseId() {
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
  public setCourseId(classeId: number) {
    this.context.commit('UPDATE_CLASSE_ID', classeId)
  }

  @Action
  public Delete() {
    this.context.dispatch(
      'Course/update/destroy',
      { id: this.classeId },
      { root: true }
    )
    this.context.commit('UPDATE_STATE_MODAL', false)
  }
}
