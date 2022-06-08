/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import User from '@/store/users'
import Auth from '@/store/auth'
import CourseRegister from '@/store/Course/register'
import CourseSearch from '@/store/Course/search'
import CourseThumbnail from '@/store/Course/thumbnail'
import CourseUpdate from '@/store/Course/update'
import CoursePlay from '@/store/Course/play'
import ModalAvatar from '@/store/Modal/avatar'
import ModalClasseDelete from '@/store/Modal/classeDelete'
import ModalClasseRegister from '@/store/Classe/register'
import ModalClasseEdit from '@/store/Classe/edit'
import ModalCourseDelete from '@/store/Modal/courseDelete'
import UserAvatar from '@/store/user/avatar'

let user: User
let auth: Auth
let courseUpdate: CourseUpdate
let courseSearch: CourseSearch
let coursePlay: CoursePlay
let courseThumbnail: CourseThumbnail
let courseRegister: CourseRegister
let modalAvatar: ModalAvatar
let modalCourseDelete: ModalCourseDelete
let modalClasseDelete: ModalClasseDelete
let modalClasseRegister: ModalClasseRegister
let modalClasseEdit: ModalClasseEdit
let userAvatar: UserAvatar

function initializeStores(store: Store<any>): void {
  user = getModule(User, store)
  auth = getModule(Auth, store)
  courseRegister = getModule(CourseRegister, store)
  courseSearch = getModule(CourseSearch, store)
  courseThumbnail = getModule(CourseThumbnail, store)
  courseUpdate = getModule(CourseUpdate, store)
  coursePlay = getModule(CoursePlay, store)
  modalAvatar = getModule(ModalAvatar, store)
  userAvatar = getModule(UserAvatar, store)
  modalCourseDelete = getModule(ModalCourseDelete, store)
  modalClasseDelete = getModule(ModalClasseDelete, store)
  modalClasseEdit = getModule(ModalClasseEdit, store)
  modalClasseRegister = getModule(ModalClasseRegister, store)
}

export {
  initializeStores,
  user,
  auth,
  modalAvatar,
  coursePlay,
  userAvatar,
  courseRegister,
  courseSearch,
  courseUpdate,
  modalCourseDelete,
  courseThumbnail,
  modalClasseEdit,
  modalClasseDelete,
  modalClasseRegister,
}
