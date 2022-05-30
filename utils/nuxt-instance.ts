/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtCookies } from 'cookie-universal-nuxt'

let $axios: NuxtAxiosInstance
let $cookies: NuxtCookies

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}
export function initializeCookies(cookieInstance: NuxtCookies) {
  $cookies = cookieInstance
}

export { $axios, $cookies }
