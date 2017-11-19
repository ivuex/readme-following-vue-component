<template>
      <div
        style="
        position: absolute;
        right: 0;
        width: 40%;
        height:60px;
        background:rgba(192, 192, 192, .6);
        "
        @mouseenter="inBar"
        @mouseleave="outBar"
        class="hideShow"
      >
      </div>
</template>
<script>
  export default {
    name: "hideShow",
    data() {
      return {
        isInBar: false,
      }
    },
    methods: {
      inBar() {
        this.isInBar = true;
        this.$emit('updateIsInBar', this.isInBar);
      },
      outBar() {
        this.isInBar = false;
        this.$emit('updateIsInBar', this.isInBar);
      },
    },
  }
</script>

<style scoped>

</style>
