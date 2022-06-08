<template>
  <div class="modal-classe-delete">
    <div class="modal-classe-delete__content">
      <h2 class="modal-classe-delete__content__title">
        Você tem certeza que deseja excluir a aula?
      </h2>

      <div class="modal-classe-delete__content__buttons">
        <button
          class="modal-classe-delete__content__buttons__button cancel"
          @click="closeModal"
        >
          Cancelar
        </button>
        <button
          class="modal-classe-delete__content__buttons__button delete"
          @click="deleteClasse"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { modalClasseDelete, courseSearch } from '@/store'
export default Vue.extend({
  beforeMount() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('modal-classe-delete')) {
        modalClasseDelete.setStateModal(false)
      }
    })
  },
  methods: {
    closeModal() {
      modalClasseDelete.setStateModal(false)
    },

    async deleteClasse() {
      await modalClasseDelete.Delete()
      await courseSearch.show(courseSearch.$course.id)
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-classe-delete {
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

  .modal-classe-delete__content {
    background-color: color('dark-200');
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: color('light');

    .modal-classe-delete__content__title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      font-family: 'Roboto', sans-serif;
    }
    .modal-classe-delete__content__description {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-family: 'Inter', sans-serif;
    }
  }

  .modal-classe-delete__content__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    gap: 2rem;
  }
  .modal-classe-delete__content__buttons__button {
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
