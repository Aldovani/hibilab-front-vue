<template>
  <div class="modal-classe-edit">
    <div class="modal-classe-edit__content">
      <h2 class="modal-classe-edit__content__header__title">Editar aula</h2>
      <div class="modal-classe-edit__content__body">
        <video :src="file" controls></video>
      </div>
      <div class="modal-classe-edit__content__inputs">
        <BaseInput
          id="classeName"
          v-model="name"
          label="Nome da aula"
          placeholder="Ex: Historia"
        />

        <label for="video" class="label-file">
          Carregar video
          <input id="video" type="file" @change="updateValue" />
        </label>
      </div>
      <div class="modal-classe-edit__content__buttons">
        <button
          class="modal-classe-edit__content__buttons__button delete"
          @click="closeModal"
        >
          Cancelar
        </button>
        <button
          class="modal-classe-edit__content__buttons__button cancel"
          @click="editClasse"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { modalClasseEdit, courseSearch } from '@/store'
export default Vue.extend({
  data() {
    return {
      uploadFile: {} as Blob,
      file: `${
        modalClasseEdit.$classe.video ? modalClasseEdit.$classe.video.url : ''
      }`,
      name: modalClasseEdit.$classe.name,
    }
  },
  computed: {
    $classe() {
      return courseSearch.$course
    },
  },
  beforeMount() {
    document.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('modal-classe-edit')) {
        this.closeModal()
      }
    })
  },
  methods: {
    closeModal() {
      modalClasseEdit.setStateModal(false)
      this.$notify({
        title: 'Atenção',
        text: 'Edição cancelada',
        type: 'warning',
      })
    },

    async editClasse() {
      try {
        await modalClasseEdit.update({
          file: this.uploadFile,
          name: this.name,
          classeId: modalClasseEdit.$classe.id,
        })
        this.$notify({
          title: 'Sucesso',
          text: 'Aula editada com sucesso',
          type: 'success',
        })
      } catch (e) {
        this.$notify({
          title: 'Erro',
          text: 'Erro ao editar aula',
          type: 'error',
        })
      }
      await courseSearch.show(courseSearch.$course.id)
      modalClasseEdit.setStateModal(false)
      console.log(courseSearch.$course)
    },
    updateValue(event: any) {
      const file = event.target.files[0]
      this.uploadFile = file
      this.file = URL.createObjectURL(file)
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-classe-edit {
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

  .modal-classe-edit__content {
    background-color: color('dark-200');
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    width: 600px;
    min-height: 600px;
    flex-direction: column;
    align-items: center;
    color: color('light');

    .modal-classe-edit__content__header__title {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      margin-bottom: 1rem;
    }

    .modal-classe-edit__content__body {
      display: flex;
      height: 100%;

      width: 100%;
      flex-direction: column;
      justify-content: space-around;

      video {
        aspect-ratio: 16/9;
      }
    }

    .modal-classe-edit__content__inputs {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      margin-top: 2rem;

      .label-file {
        background: color('roxo');
        border-radius: 8px;
        padding: 1rem;
        width: 100%;

        color: color('light');
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;

        text-align: center;
        letter-spacing: 0.15em;

        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }

        input[type='file'] {
          display: none;
        }
      }
    }
  }

  .modal-classe-edit__content__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    gap: 2rem;
    width: 100%;
  }
  .modal-classe-edit__content__buttons__button {
    flex: 1;
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
