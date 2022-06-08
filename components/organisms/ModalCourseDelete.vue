<template>
  <div class="modal-course-delete">
    <div class="modal-course-delete__content">
      <h2 class="modal-course-delete__content__title">
        Você tem certeza que deseja excluir o curso?
      </h2>
      <p class="modal-course-delete__content__description">
        Ao excluir o curso, todos os alunos que estão inscritos no curso serão
        excluídos.
      </p>

      <div class="modal-course-delete__content__buttons">
        <button
          class="modal-course-delete__content__buttons__button cancel"
          @click="closeModal"
        >
          Cancelar
        </button>
        <button
          class="modal-course-delete__content__buttons__button delete"
          @click="deleteCourse"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { modalCourseDelete } from '@/store'
export default Vue.extend({
  beforeMount() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('modal-course-delete')) {
        modalCourseDelete.setStateModal(false)
      }
    })
  },
  methods: {
    closeModal() {
      modalCourseDelete.setStateModal(false)
    },

    deleteCourse() {
      modalCourseDelete.Delete()
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-course-delete {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-course-delete__content {
    background-color: color('dark-200');
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: color('light');

    .modal-course-delete__content__title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      font-family: 'Roboto', sans-serif;
    }
    .modal-course-delete__content__description {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-family: 'Inter', sans-serif;
    }
  }

  .modal-course-delete__content__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    gap: 2rem;
  }
  .modal-course-delete__content__buttons__button {
    width: max-content;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;

    &.cancel {
      background-color: color('roxo');
      color: color('light');
    }
    &.delete {
      background-color: #df484a;
      color: color('light');
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
