<template>
  <form class="form-edit-course" @submit.prevent="onSubmit">
    <div class="header">
      <Heading text="Editar curso" />
      <div>
        <Button text="Nova Aula" outline @onClick="openModalClasse" />
        <Button type="submit" text="Salvar" />
      </div>
    </div>
    <BaseInput
      id="course-name"
      v-model="course.name"
      label="Nome do curso"
      placeholder="Digite o nome do curso"
    />
    <BaseInput
      id="teacher-name"
      v-model="course.teacher"
      label="Nome do professor"
      placeholder="Digite o nome do professor"
    />
    <label for="Dificuldade" class="selection">
      Dificuldade
      <select id="Dificuldade" v-model="course.difficulty">
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
    </label>
    <label for="description" class="textarea">
      Descrição
      <textarea
        id="description"
        v-model="course.description"
        placeholder="Descrição"
      ></textarea>
    </label>
    <label for="required" class="textarea">
      Requisitos
      <textarea
        id="required"
        v-model="course.requirements"
        placeholder="Requisitos"
      ></textarea>
    </label>
    <button for="file" class="input-file" @click="openModal">
      Carregar imagem
    </button>
    <modal-thumbnail v-if="$modalState" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  courseSearch,
  courseUpdate,
  courseThumbnail,
  modalClasseRegister,
} from '@/store'
export default Vue.extend({
  data() {
    return {
      course: { ...courseSearch.$course },
    }
  },
  computed: {
    $modalState() {
      return courseThumbnail.$modalState
    },
  },

  created() {
    courseUpdate.update(courseSearch.$course)
  },
  methods: {
    async onSubmit() {
      await courseUpdate.update({
        id: this.course.id,
        name: this.course.name,
        teacher: this.course.teacher,
        difficulty: this.course.difficulty,
        description: this.course.description,
        requirements: this.course.requirements,
      })
      await courseSearch.show(this.course.id)

      this.course = { ...courseSearch.$course }
    },

    openModal() {
      courseThumbnail.setStateModal(true)
    },
    openModalClasse() {
      modalClasseRegister.setStateModal(true)
    },
  },
})
</script>

<style lang="scss" scoped>
.form-edit-course {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    grid-area: 1 / 1 / 2 / 3;
    div {
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
      height: 100%;
      border-radius: 8px;
      padding: 12px 16px;
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
    input {
      display: none;
    }
  }
}
</style>
