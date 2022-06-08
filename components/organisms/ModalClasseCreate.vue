<template>
  <div class="modal-classe-create">
    <div class="modal-classe-create__content">
      <h2 class="modal-classe-create__content__header__title">Criar aula</h2>
      <div class="modal-classe-create__content__body">
        <video :src="file" controls></video>
      </div>
      <div class="modal-classe-create__content__inputs">
        <BaseInput
          id="ClasseName"
          v-model="name"
          label="Nome da aula"
          placeholder="Ex: Historia"
        />

        <label for="video" class="label-file">
          Carregar video
          <input id="video" type="file" @change="updateValue" />
        </label>
      </div>
      <div class="modal-classe-create__content__buttons">
        <button
          class="modal-classe-create__content__buttons__button delete"
          @click="closeModal"
        >
          Cancelar
        </button>
        <button
          class="modal-classe-create__content__buttons__button cancel"
          @click="createClasse"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { modalClasseRegister, courseSearch } from '@/store'
export default Vue.extend({
  data() {
    return {
      uploadFile: {} as Blob,
      file: '',
      name: '',
    }
  },
  beforeMount() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('modal-classe-create')) {
        modalClasseRegister.setStateModal(false)
      }
    })
  },
  methods: {
    closeModal() {
      modalClasseRegister.setStateModal(false)
    },

    createClasse() {
      try {
        modalClasseRegister.create({
          file: this.uploadFile,
          name: this.name,
          courseId: courseSearch.$course.id,
        })
        courseSearch.show(courseSearch.$course.id)
        this.$notify({
          group: 'notify',
          title: 'Sucesso',
          text: 'Aula criada com sucesso',
          type: 'success',
        })
        // modalClasseRegister.setStateModal(false)
      } catch (e) {
        this.$notify({
          group: 'notify',
          title: 'Erro',
          text: 'Erro ao criar aula',
          type: 'error',
        })
      }
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
.modal-classe-create {
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

  .modal-classe-create__content {
    background-color: color('dark-200');
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    width: 600px;
    min-height: 600px;
    flex-direction: column;
    align-items: center;
    color: color('light');

    .modal-classe-create__content__header__title {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      margin-bottom: 1rem;
    }

    .modal-classe-create__content__body {
      display: flex;
      height: 100%;

      width: 100%;
      flex-direction: column;
      justify-content: space-around;

      video {
        aspect-ratio: 16/9;
      }
    }

    .modal-classe-create__content__inputs {
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

  .modal-classe-create__content__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    gap: 2rem;
    width: 100%;
  }
  .modal-classe-create__content__buttons__button {
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
