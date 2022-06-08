<template>
  <form class="form-create-course" @submit.prevent="onSubmit">
    <div class="header">
      <Heading text="Cadastra curso" />
      <div>
        <Button text="Nova Aula" :disabled="true" outline />
        <Button :text="`${$disabled ? 'Atualizar' : 'Criar'}`" type="submit" />
      </div>
    </div>
    <BaseInput
      id="course-name"
      v-model="course.name"
      label="Nome do curso"
      placeholder="Ex: Desenvolvimento de aplicações para web"
    />
    <BaseInput
      id="teacher-name"
      v-model="course.teacher"
      label="Nome do professor"
      placeholder="Ex: Iruil da silva"
    />
    <label for="Dificuldade" class="selection">
      Dificuldade
      <select id="Dificuldade" v-model="course.difficulty">
        <option value="Iniciante" selected>iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
    </label>
    <label for="description" class="textarea">
      Descrição
      <textarea
        id="description"
        v-model="course.description"
        placeholder="Ex: O curso irá ensinar o desenvolvimento de aplicações para web"
      ></textarea>
    </label>
    <label for="required" class="textarea">
      Requisitos
      <textarea
        id="required"
        v-model="course.requirements"
        placeholder="Ex: O aluno deve ter conhecimento em algum framework ou linguagem de programação"
      ></textarea>
    </label>
    <label :data-disable="true" for="file" class="input-file">
      Carregar imagem
      <input id="file" :disabled="true" type="file" value="Carregar imagem" />
    </label>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseRegister } from '@/store'
import { Course as Courses } from '@/models'
export default Vue.extend({
  data() {
    return {
      course: { difficulty: 'iniciante' } as Courses,
    }
  },
  methods: {
    async onSubmit() {
      try {
        if (
          !this.course.name &&
          !this.course.teacher &&
          !this.course.difficulty &&
          !this.course.description &&
          !this.course.requirements
        ) {
          this.$notify({
            title: 'Erro',
            text: 'Preencha todos os campos',
            type: 'error',
          })
          return
        }

        await courseRegister.create(this.course)
        this.course = { ...courseRegister.$course }
        this.$router.push(`/admin/course/${this.course.id}`)
      } catch (e) {
        console.log(e)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.form-create-course {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    grid-area: 1 / 1 / 2 / 3;
    > div {
      flex: 0.5;
      display: flex;
      gap: 1rem;
    }
  }

  .base-input[for='course-name'] {
    grid-area: 2 / 1 / 3 / 3;
  }
  .selection {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    color: color('light');

    font-family: 'Inter';
    gap: 0.5rem;

    select {
      color: color('dark');
      height: 100%;
      border-radius: 8px;
      padding: 12px 16px;

      &:focus {
        outline: 4px solid color('roxo');
      }
    }
  }

  .textarea {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    color: color('light');
    font-family: 'Inter';
    gap: 1rem;
    textarea {
      border-radius: 8px;
      padding: 1rem;
      height: 350px;
    }
  }

  .input-file {
    justify-self: flex-start;
    background: color('roxo');
    color: color('light');
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;

    text-align: center;
    letter-spacing: 0.15em;
    padding: 13px 23px;
    border-radius: 8px;
    &[data-disable='true'] {
      cursor: not-allowed;
      opacity: 0.5;
    }
    input {
      display: none;
    }
  }
}
</style>
