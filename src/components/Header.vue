<template>
  <div :style="variation">
    <div
      class="header"
      :style="{
        'background-color': bgColor,
        'border-bottom': borderColor + ' solid 8px',
        padding: padding,
      }">

      <div class="bgImage" :style="{'background-image': bgImage}"></div>

      <div class="content" :style= "{ 'background-color': colColor }">

        <span  v-if="this.$slots.label" class="label"><slot name="label">Label</slot></span>

        <h1 class="heading1">
          <slot>Here we have a page title</slot>
        </h1>

        <p v-if="this.$slots.support" class="support display">
          <slot name="support">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </slot>
        </p>

        <div  v-if="this.$slots.context" class="context">
          <slot name="context">Context</slot>
        </div>
      </div>

    </div>

    <div v-if="this.$slots.intro" class="intro">
      <p class="intro-txt">
        <slot name="intro"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    align: {
      type: String,
    },
    variation: {
      type: String,
    },
    bgColor: {
      type: String,
    },
    colColor: {
      type: String,
    },
    borderColor: {
      type: String,
    },
    bgImage: {
      type: String,
    },
    padding: {
      String,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/css/variables.scss";

.header {
  padding: 0rem 5rem;
  min-height: 40rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;

  .bgImage {
    position: absolute;
    top: -10%; left: -10%;
    width: 150%; height: 150%;
    background-position: center;
    background-size: cover;
    filter: blur(5px);
    z-index: 0;
  }

  .label {
    margin-bottom: 3rem;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0rem;
  }

  .content {
    padding: 3rem;
    max-width: 80rem;
    z-index: 1;
    position: relative;
  }

  .context {
    font-size: 1.4rem;
    margin-top: 3rem;
    line-height: clamp(1.6rem, 5vw, 2.4rem);
    border-left: 3px $light-blue solid;
    padding-left: 1.6rem;
    max-width: 64rem;
  }

  @media (max-width: 800px) {
    padding: 2rem;
  }
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 3rem;
  background: rgba(255, 255, 255, 0.9);
}

.intro-txt {
  color: $med-blue;
  text-align: left;
  max-width: 80rem;
  font-size: 4rem;
  line-height: 6rem;
}

.v1 {
  .header {
    background-size: cover;
  }
}

.v2 {
  .content {
    background-size: contain;
  }

  img {
    display: block;
  }
}

.v3 {
  .header {
    background-position: center;
  }

  .content {
    padding: 5rem 5rem;
  }

  .support {
    line-height: clamp(2.6rem, 7vw, 4rem);
  }
}

.v4 {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    max-width: 90rem;
    min-height: 36rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.v5 {
  .content {
    max-width: 120rem;
  }
}

@media (max-width: 800px) {

  .v3 {
    .content {
      padding: 1rem;
    }
  }
}
</style>