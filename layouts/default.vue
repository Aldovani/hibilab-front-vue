<template>
  <div>
    <ClientOnly>
      <notifications
        position="top-right"
        classes="notifications"
        effect="slide-up"
        :max="2"
      />
    </ClientOnly>
    <Nuxt />
  </div>
</template>
