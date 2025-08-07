export interface User {
  id: number
  name: string
  email: string
  active: boolean
}

export interface UserFilter {
  search?: string | null
  active?: boolean | null
}
