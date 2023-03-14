<template>
  <div class="grid-item">
    <slot>
      <img src="http://www.placekitten.com/100/100/?image=15" />
    </slot>

    <div v-if="this.$slots.label">
      <p class="description"><slot name="label">Grid Item Label</slot></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20rem;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  text-align: center;

  img {
    max-height: 10rem;
    display: block;
    object-fit: contain;
    width: 100%;
  }

  &.circle img {
    border-radius: 50%;
  }
}

.description {
  font-size: 1.4rem;
  line-height: 1.6;
}
</style>
