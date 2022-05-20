<template>
  <div class="carrousel">
    <div class="carrousel-container">
      <div class="container-carrousel-item">
        <div
          v-for="(item, index) in carrousel"
          :key="index"
          :class="`carrousel-item ${carrouselIndex === index ? 'active' : ''}`"
        >
          <img :src="item.img" alt="Carrousel 1" />
        </div>
      </div>

      <div class="carrousel-show">
        <img :src="carrousel[carrouselIndex].img" alt="" />
        <div class="course-info">
          <h2>{{ carrousel[carrouselIndex].name }}</h2>
          <span>{{ carrousel[carrouselIndex].teacher }}</span>
          <!-- <Link to="/" button text="Acessar" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      carrousel: [
        {
          img: 'https://picsum.photos/1080/1920/?image=4',
          name: 'Nome do curso 1',
          teacher: 'Nome do professor 1',
        },
        {
          img: 'https://picsum.photos/1080/1920/?image=3',
          name: 'Nome do curso 2',
          teacher: 'Nome do professor 2',
        },
        {
          img: 'https://picsum.photos/1080/1920/?image=2',
          name: 'Nome do curso 3',
          teacher: 'Nome do professor 3',
        },
        {
          img: 'https://picsum.photos/1080/1920/?image=1',
          name: 'Nome do curso 4',
          teacher: 'Nome do professor 4',
        },
        {
          img: 'https://picsum.photos/1080/1920/?image=10',
          name: 'Nome do curso 5',
          teacher: 'Nome do professor 5',
        },
      ],
      carrouselIndex: 0,
    }
  },
  mounted() {
    setInterval(() => {
      // alert('teste')
      if (this.carrouselIndex === this.carrousel.length - 1) {
        this.carrouselIndex = 0
      } else this.carrouselIndex++
    }, 3000)
  },
})
</script>

<style lang="scss" scoped>
.carrousel-container {
  display: grid;
  grid-template-columns: 180px 1fr;
  width: 100%;
  height: 350px;
}
.container-carrousel-item {
  display: grid;
  grid-auto-rows: 70px;

  img {
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    object-fit: cover;
  }

  .carrousel-item.active img {
    filter: brightness(1);
  }
}
.carrousel-show {
  position: relative;
  height: 350px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
}

.course-info {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: grid;
  padding: 2rem;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;

    color: color('light');
  }
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: color('cinza');
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
