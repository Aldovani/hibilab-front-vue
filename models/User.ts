export default interface User {
  name: string
  email: string
  permission: string
  avatar: {
    url: string
  }
  subscription: {
    status: 'active' | 'inactive'
  }
}
