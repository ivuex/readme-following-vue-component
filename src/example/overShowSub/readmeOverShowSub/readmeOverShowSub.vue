<template>
  <div class="readme-over-show-sub">
    <!-- 通过 v-model 控制 value -->

    <markdown-editor
      preview-class="markdown-body"
      :highlight="true"
      v-model="content"
      ref="markdownEditor"
    ></markdown-editor>

    <!--&lt;!&ndash; 通过事件控制 value &ndash;&gt;-->
    <!--<markdown-editor  :highlight="true" :value="content" @input="handleInput"></markdown-editor>-->

    <!-- 添加配置 -->
    <!--<markdown-editor-->
      <!--preview-class="markdown-body"-->
      <!--:highlight="true" :configs="configs"></markdown-editor>-->

    <!--&lt;!&ndash; 不自动初始化 &ndash;&gt;-->
    <!--<markdown-editor  :highlight="true" :autoinit="false"></markdown-editor>-->
  </div>
</template>

<script>
  // import Vue from 'vue';
  // const bus = new Vue();
  import markdownEditor from 'vue-simplemde/src/markdown-editor.vue';
  import  hljs from 'highlight.js';
  window.hljs = hljs;

  export default {
    name: "readmeOverShowSub",
    data() {
      return {
        content: '',
        configs: {
          status: false, // 禁用底部状态栏
          spellChecker: false, // 禁用拼写检查
          styleSelectedText: true,
        }
      }
    },
    components: {
      markdownEditor,
    },
    computed: {
      simplemde: {
        get: function () {
          const ele = this.$refs.markdownEditor.$el;
            console.log(ele);
            const textarea = ele.getElementsByTagName('textarea')[0]
          console.log(textarea);
          textarea.style.visibility = 'hidden';
          return this.$refs.markdownEditor.simplemde;
        },
        set: function () { }
      }
    },
    methods: {
      handleInput() {
        // do some things
      },
    },
    mounted() {
      console.log(this);
      const that = this;
      console.log(this.simplemde);
      this.simplemde.togglePreview();

      // 'change'事件已经绑定，可以通过@input指定处理器
      // 如果需要，你可以自行绑定这个列表中的其他事件: https://codemirror.net/doc/manual.html#events
      this.simplemde.codemirror.on('beforeChange', (instance, changeObj) => {
        // do some things
      });

      // 移除SimpleMDE，组件销毁时会自动调用
      // this.simplemde = null;

      // 一些有用的方法
      this.$refs.markdownEditor.initialize(); // init
      this.simplemde.toTextArea();
      this.simplemde.isPreviewActive(); // returns boolean
      // this.simplemde.isSideBySideActive(); // returns boolean
      this.simplemde.isFullscreenActive(); // returns boolean
      this.simplemde.clearAutosavedValue(); // no returned value
      this.simplemde.markdown(this.content); // returns parsed html
      this.simplemde.codemirror.refresh(); // refresh codemirror

      this.$nextTick(()=>{

      });
    },
  }
</script>

<style scoped>
  @import '~simplemde/dist/simplemde.min.css';
  @import '~github-markdown-css';
  @import '~highlight.js/styles/atom-one-dark.css';
  @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
  .markdown-editor textarea{
    display: none;
    visibility: hidden;
  }

</style>
