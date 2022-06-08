<template>
  <li class="classe">
    <span>{{ classe.name }}</span>
    <div>
      <button @click="edit">
        <img src="@/assets/img/pen.svg" alt="Editar" />
      </button>
      <button @click="deleteClasse">
        <img src="@/assets/img/X.svg" alt="Excluir" />
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { modalClasseDelete, modalClasseEdit } from '@/store'
interface Props {
  id: number
  name: string
}

export default Vue.extend({
  props: {
    classe: {
      type: Object as PropType<Props>,
      required: true,
    },
  },
  methods: {
    edit() {
      modalClasseEdit.setClasse(this.classe.id)
      modalClasseEdit.setStateModal(true)
    },
    deleteClasse() {
      modalClasseDelete.setStateModal(true)
      modalClasseDelete.setClasseId(this.classe.id)
    },
  },
})
</script>

<style lang="scss" scoped>
.classe {
  width: 100%;
  border-radius: 8px;
  background: color('dark-200');

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.15em;
  padding: 32px;
  color: color('light');
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    & + button {
      margin-left: 1rem;
    }
  }
}
</style>
