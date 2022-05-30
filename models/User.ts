export default interface User {
  name: string
  email: string
  permission: string
  avatar: {
    url: string
  }
  stripeCustomers: {
    status: 'active' | 'inactive'
  }
}
