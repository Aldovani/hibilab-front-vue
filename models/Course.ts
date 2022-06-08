import { Class } from '.'

export default interface Course {
  id: number
  name: string
  description: string
  teacher: string
  requirements: string
  difficulty: 'iniciante' | 'intermediário' | 'avançado'
  thumbnail: {
    url: string
  }
  classes: Class[]
  watched?: number
}
