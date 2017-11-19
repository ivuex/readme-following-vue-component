<template>
  <div id="over-show-sub">
    <div class="row">

      <div
        style="
        position: relative;
        width:100%;
        height:60px;
        background:lightblue
        "
        class="fa-hover col-md-3 col-sm-4"
        @mouseover="inMe"
        @mouseout="outMe"
      >

        <hideShow
          v-show="isInMe || isInBar"
          @updateIsInBar="setIsInBar"
        ></hideShow>
      </div>
    </div>

    <div style="
          /*position: absolute;*/
          color: rgba(80, 80, 80, .20);
        ">
      数据状态:
      {{
      JSON.stringify({
          isInMe:this.isInMe,
          isInBar:this.isInBar,
      })
      }}
    </div>

    <readme-over-show-sub></readme-over-show-sub>
  </div>
</template>

<script>
  import hideShow from './hideShow/hideShow.vue'
  import readmeOverShowSub from './readmeOverShowSub/readmeOverShowSub.vue';

  export default {
    name: "overShowSub",
    data() {
      return {
        isInBar: false,
        isInMe: false,
      }
    },
    components: {
      hideShow,
      readmeOverShowSub,
    },
    methods: {
      fn() {
      },
      inMe() {
        this.isInMe = true;
      },
      outMe() {
        this.isInMe = false;
      },
      setIsInBar(bool) {
        console.log(arguments);
        console.log('above is the arguments in setIsInBar method, is it right? outputed by hideShow.vue.');
        this.isInBar = bool;
      }
    },
  }
</script>

<style scoped>

</style>
