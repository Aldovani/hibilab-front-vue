<template>
  <div class="modal-thumbnail">
    <div class="modal-body">
      <img :src="`${file}`" alt="Thumbnail" />
      <div>
        <label for="thumbnail">
          Alterar thumbnail
          <input
            id="thumbnail"
            type="file"
            accept="image/png, image/jpeg , image/jpg"
            @input="updateThumbnail"
          />
        </label>

        <div>
          <button class="cancel" @click="close">Cancelar</button>
          <button class="save" @click="save">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseThumbnail, courseSearch } from '@/store'
export default Vue.extend({
  data() {
    return {
      uploadFile: {} as Blob,
      file: `${
        courseSearch.$course.thumbnail
          ? courseSearch.$course.thumbnail.url
          : 'https://via.placeholder.com/350'
      }`,
    }
  },

  beforeMount() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('modal-thumbnail')) {
        courseThumbnail.setStateModal(false)
      }
    })
  },

  methods: {
    close() {
      courseThumbnail.setStateModal(false)
      this.file = `${
        courseSearch.$course.thumbnail
          ? courseSearch.$course.thumbnail.url
          : 'https://via.placeholder.com/350'
      }`
      this.$notify({
        title: 'Alteração cancelada',
        text: 'Nenhuma alteração foi feita',
        type: 'warning',
      })
      this.uploadFile = {} as Blob
    },
    updateThumbnail(event: any) {
      const file = event.target.files[0]
      this.uploadFile = file
      this.file = URL.createObjectURL(file)
    },
    async save() {
      console.log('save')
      if (!this.uploadFile) {
        this.$notify({
          type: 'success',
          duration: 2000,
          text: 'Foto alterada com sucesso',
        })
        courseThumbnail.setStateModal(false)
        return
      }

      try {
        const file = this.uploadFile

        await courseThumbnail.updateThumbnail({
          file,
          courseId: courseSearch.$course.id,
        })

        courseThumbnail.setStateModal(false)
        this.$notify({
          type: 'success',
          duration: 2000,
          text: 'Foto alterada com sucesso',
        })
        this.uploadFile = {} as Blob
      } catch (e) {
        this.$notify({
          type: 'error',
          duration: 2000,
          text: 'Erro ao alterar foto',
        })
        courseThumbnail.setStateModal(false)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-thumbnail {
  min-height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .modal-body {
    background: color('dark-200');
    border-radius: 8px;
    padding: 3rem;
    img {
      width: 300px;
      height: 300px;
      border: 4px solid color('roxo');
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
      color: color('light');
      border: 4px solid color('roxo');
      padding: 1rem;

      border-radius: 8px;

      font-family: 'Roboto';
      font-style: normal;
      font-size: 16px;

      text-align: center;
      letter-spacing: 0.15em;
      transition: all 0.3s ease-in-out;

      cursor: pointer;

      &:hover {
        background: #6247ebc2;
      }

      input {
        display: none;
      }
    }
    gap: 2rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
    button {
      color: color('light');
      padding: 1rem;

      border-radius: 8px;

      font-family: 'Roboto';
      font-style: normal;
      font-size: 16px;

      text-align: center;
      letter-spacing: 0.15em;

      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }
    .cancel {
      background: #e04949;
    }
    .save {
      background: color('roxo');
    }
  }
}
</style>
