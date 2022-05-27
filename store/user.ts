import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'user', namespaced: true, stateFactory: true })
export default class User extends VuexModule {
  private user = {
    name: 'sas',
    email: '',
    permission:''
  }

  // getters return values
  get $user() {
    return this.user
  }

  // mutations are functions that change state
  @Mutation
  private SETUSER(user: any) {
    this.user = user
  }

  // actions are functions that commit mutations
  @Action
  public setUser(user: any) {
    this.SETUSER(user)
  }
}
