export default interface Course {
  name: string
  description: string
  teacher: string
  difficulty: 'iniciante' | 'intermediário' | 'avançado'
  img: string
}
