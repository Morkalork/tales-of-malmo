<template>
  <div :class="overlayClass" v-on:click="onClose">
    <div :class="notificationClass" v-if="title !== ''">
      <p class="close" v-on:click="onClose">✖</p>
      <h4>{{ title }}</h4>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Notification",
  props: {
    title: String,
    message: String,
    notificationType: String
  },
  data() {
    return {
      isClosing: false
    };
  },
  methods: {
    ...mapActions({
      clearNotification: "clearNotification"
    }),
    onClose: function() {
      this.isClosing = true;
      setTimeout(() => {
        this.isClosing = false;
        this.clearNotification();
      }, 500);
    }
  },
  computed: {
    notificationClass() {
      return `notification ${this.notificationType &&
        this.notificationType.toLocaleString().toLowerCase()}`;
    },
    overlayClass() {
      return `overlay ${this.isClosing ? "closing" : ""}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);

  &.closing {
    transition: 500ms;
    opacity: 0;
  }

  .notification {
    position: fixed;
    top: 0;
    left: 1rem;
    right: 1rem;
    padding: 1rem;
    box-shadow: 0 0 0.5rem $blue-3;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;

    &.info {
      background-color: $notification-info;
    }

    &.varning {
      background-color: $notification-warning;
    }

    &.fel {
      background-color: $notification-error;
    }

    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      opacity: 0.75;

      &:active {
        opacity: 1;
      }
    }
  }
}
</style>
