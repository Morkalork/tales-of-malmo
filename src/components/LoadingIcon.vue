<template>
  <div class="loading-icon">
    <div class="loading-icon-balls">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
export default {
  name: "LoadingIcon",
  props: {
    text: {
      type: String,
      default: "Laddar data..."
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.loading-icon {
  text-align: center;
  .loading-icon-balls {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
      position: absolute;
      top: 27px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #fff;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);

      &:nth-child(1) {
        left: 6px;
        animation: loading-icon-balls1 0.6s infinite;
      }

      &:nth-child(2) {
        left: 6px;
        animation: loading-icon-balls2 0.6s infinite;
      }

      &:nth-child(3) {
        left: 26px;
        animation: loading-icon-balls2 0.6s infinite;
      }

      &:nth-child(4) {
        left: 45px;
        animation: loading-icon-balls3 0.6s infinite;
      }
    }
  }

  h4 {
    white-space: nowrap;
    font-weight: bold;
    font-style: italic;
    color: $white;
  }
}
@keyframes loading-icon-balls1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loading-icon-balls3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loading-icon-balls2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
