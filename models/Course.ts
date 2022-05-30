export default interface Course {
  id: number
  name: string
  description: string
  teacher: string
  requirements: string
  difficulty: 'iniciante' | 'intermediário' | 'avançado'
}
