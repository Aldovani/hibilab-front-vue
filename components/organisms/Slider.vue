<template>
  <div class="slider">
    <h2>Lançamentos</h2>
    <div class="container-sliders">
      <NuxtLink to="/" class="course">
        <!-- <img :src="'https://picsum.photos/400/300'" :alt="course.name" /> -->
        <img :src="'https://picsum.photos/400/300'" />
        <div class="course-info">
          <!-- <h3>{{ course.name }}</h3> -->
          <h3>sadasda</h3>
          <!-- <span>{{ course.teacher }}</span> -->
          <span>sadas</span>
        </div>
        <!-- <Difficulty :difficulty="course.difficulty" /> -->
        <Difficulty difficulty="iniciante" />
      </NuxtLink>
      <NuxtLink to="/" class="course">
        <!-- <img :src="'https://picsum.photos/400/300'" :alt="course.name" /> -->
        <img :src="'https://picsum.photos/400/300'" />
        <div class="course-info">
          <!-- <h3>{{ course.name }}</h3> -->
          <h3>sadasda</h3>
          <!-- <span>{{ course.teacher }}</span> -->
          <span>sadas</span>
        </div>
        <!-- <Difficulty :difficulty="course.difficulty" /> -->
        <Difficulty difficulty="iniciante" />
      </NuxtLink>
      <NuxtLink to="/" class="course">
        <!-- <img :src="'https://picsum.photos/400/300'" :alt="course.name" /> -->
        <img :src="'https://picsum.photos/400/300'" />
        <div class="course-info">
          <!-- <h3>{{ course.name }}</h3> -->
          <h3>sadasda</h3>
          <!-- <span>{{ course.teacher }}</span> -->
          <span>sadas</span>
        </div>
        <!-- <Difficulty :difficulty="course.difficulty" /> -->
        <Difficulty difficulty="iniciante" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  margin-top: 200px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    display: inline-block;

    color: color('light');
    margin-bottom: 2rem;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      background-color: color('roxo');
    }
  }

  .container-sliders {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
.course {
  width: 340px;
  height: 430px;
  position: relative;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    border-radius: 4px;
    inset: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 97.59%);
  }

  &:hover {
    &::after {
      opacity: 0.5;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  .course-info {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding: 0 1rem 2.5rem 1rem;
    width: 100%;

    h3,
    span {
      width: 100%;
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      font-family: 'Roboto';
      font-style: normal;
    }

    h3 {
      font-weight: 700;
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: color('cinza');
    }
  }
  .difficulty {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
</style>
