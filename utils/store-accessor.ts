/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import User from '@/store/users'
import Auth from '@/store/auth'
import Courses from '@/store/courses'

let user: User
let auth: Auth
let courses: Courses

function initializeStores(store: Store<any>): void {
  user = getModule(User, store)
  auth = getModule(Auth, store)
  courses = getModule(Courses, store)
}

export { initializeStores, user, auth, courses }
