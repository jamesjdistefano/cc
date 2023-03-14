<template>
  <div class="grid-row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>

  .grid-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 6rem;
  }

  @media (max-width: 800px) {
    .grid-row {
      flex-direction: column;
    }
  }

</style>

<script></script>