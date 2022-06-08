<template>
  <div class="card-course-admin">
    <img
      :src="`${
        data.thumbnail ? data.thumbnail.url : 'https://via.placeholder.com/350'
      }`"
      alt=""
    />

    <div class="content">
      <h3 :title="data.name">{{ data.name }}</h3>
      <span class="teacher">{{ data.teacher }}</span>
    </div>
    <div class="buttons">
      <button class="button delete" @click="deleteCourse">
        <img src="@/assets/img/X.svg" title="Excluir curso" alt="Excluir svg" />
      </button>

      <NuxtLink :to="`/admin/course/${data.id}`" class="button">
        <img src="@/assets/img/pen.svg" title="Editar curso" alt="Editar svg" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Course } from '@/models'
import { modalCourseDelete } from '@/store'
export default Vue.extend({
  props: {
    data: {
      type: Object as PropType<Course>,
      required: true,
    },
  },

  methods: {
    deleteCourse() {
      modalCourseDelete.setStateModal(true)
      modalCourseDelete.setCourseId(this.data.id)
    },
  },
})
</script>

<style lang="scss" scoped>
.card-course-admin {
  display: grid;
  align-items: center;
  background: color('dark-200');
  border-radius: 4px;
  max-width: 350px;
  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 100%;
    max-height: 400px;
  }
}

.content {
  display: grid;
  max-width: 480px;
  padding: 1rem 2rem;

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 47px;
    margin: 0;

    letter-spacing: 0.15em;
    text-transform: uppercase;

    color: color('light');
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .teacher {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: color('cinza');
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0.5rem 2rem 2rem 2rem;
  align-content: space-between;
  height: 100%;
  width: 100%;

  .button {
    background: color('roxo');
    border: none;
    display: block;
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    img {
      width: 24px;
      height: 24px;
    }
    &.delete {
      background: #e04949;
    }
  }
}
</style>
