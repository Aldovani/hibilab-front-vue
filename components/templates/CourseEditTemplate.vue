<template>
  <div class="course-edit-template">
    <FormEditCourse />
    <Classes />
    <ModalClasseCreate v-if="registerModal" />
    <ModalClasseDelete v-if="deleteModal" />
    <ModalClasseEdit v-if="editModal" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  modalClasseEdit,
  modalClasseDelete,
  modalClasseRegister,
} from '@/store'
export default Vue.extend({
  computed: {
    editModal() {
      return modalClasseEdit.$stateModal
    },
    deleteModal() {
      return modalClasseDelete.$stateModal
    },
    registerModal() {
      return modalClasseRegister.$stateModal
    },
  },
})
</script>

<style lang="scss" scoped>
.course-edit-template {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    div {
      flex: 0.5;
      display: flex;
      gap: 1rem;
    }
  }
  .form-edit-course {
    margin-bottom: 8rem;
  }
}
</style>
