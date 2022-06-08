<template>
  <section class="card-course-details">
    <img src="https://picsum.photos/400/300" alt="" />
    <div class="content">
      <Button :text="textButton" @onClick="inscribe" />

      <span>Quantidade de aulas: {{ $quantity }}</span>
      <span>Dificuldade: <Difficulty :difficulty="$difficulty" /></span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch, user, auth } from '@/store'
export default Vue.extend({
  data() {
    return {
      textButton: 'Matricular-se',
    }
  },
  computed: {
    $difficulty() {
      return courseSearch.$course.difficulty.toLowerCase()
    },
    $quantity() {
      return String(courseSearch.$course.classes.length).padStart(2, '0')
    },
  },
  async created() {
    if (!auth.$token) {
      this.textButton = 'Fazer login'
      return
    }
    if (user.$user.subscription.status !== 'active') {
      this.textButton = 'Assine um plano'
      return
    }

    if (user.$user.subscription.status === 'active') {
      const response = await this.$axios.get(
        '/inscribe/course/' + courseSearch.$course.id
      )
      if (response.status === 200) {
        this.textButton = 'Ir para o curso'
      }
      return
    }

    this.textButton = 'Matricular-se'
  },
  methods: {
    async inscribe() {
      if (this.textButton === 'Ir para o curso') {
        this.$router.push(`/cursos/play/${courseSearch.$course.id}`)
        return
      }

      if (!auth.$token) {
        this.$router.push('/login')
        return
      }
      if (user.$user.subscription.status !== 'active') {
        this.$router.push('/plans')
        this.$notify({})
        return
      }

      const response = await this.$axios.post(`/inscribe/course`, {
        courseId: courseSearch.$course.id,
      })

      if (response.data.status === 'success') {
        this.$notify({
          title: 'Sucesso',
          text: 'Inscrição realizada com sucesso',
          type: 'success',
        })
      } else {
        this.$notify({
          title: 'Erro',
          text: 'Não foi possível realizar a inscrição',
          type: 'error',
        })
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.card-course-details {
  display: grid;
  background: color('dark-200');

  img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
  }
  .content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 32px;

    color: color('light');
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
  }
}
</style>
