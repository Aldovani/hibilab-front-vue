import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Class } from '~/models'
import { $axios } from '~/utils/nuxt-instance'

interface seeClasse {
  classeId: number
  courseId: number
}

@Module({ name: 'Course/play', namespaced: true, stateFactory: true })
export default class Courses extends VuexModule {
  private classes = [] as Class[]
  private currentClass = {} as Class

  get $classes() {
    return this.classes
  }

  get $currentClass() {
    return this.currentClass
  }

  @Mutation
  private UPDATE_CLASSES(classes: Class[]) {
    this.classes = classes
  }

  @Mutation
  private SET_CURRENT_CLASS(classes: Class) {
    this.currentClass = classes
  }

  @Action
  public async getClasses(id: number) {
    const data = await $axios.$get(`/classe/${id}`)
    this.context.commit('UPDATE_CLASSES', data)
  }

  @Action
  public async markAsSeen(payload: seeClasse) {
    await $axios.$post('/inscribe/classe', payload)
  }

  @Action
  public async unMarkAsSeen(payload: seeClasse) {
    await $axios.$delete('/inscribe/classe', {
      data: payload,
    })
  }

  @Action
  public setCurrentClass(id: number) {
    this.$classes.forEach((classItem) => {
      if (classItem.id === id) {
        this.context.commit('SET_CURRENT_CLASS', classItem)
      }
    })
  }
}
