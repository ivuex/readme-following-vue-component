# readme-following-vue-component

## 页面结构
- 顶部放单页内 *vue demo*;
- 颈部放 *JSON.stringify* 处理过的数据状态 ;
- 页面剩余部分放 *vue readme* 编辑器/阅读器 ;
## 特别依赖: 
- vue
- vue-simplemde 
## 目录结构
－ 除了 *src* 以外的目录结构 请阅读 *webpack.README.md* ;
- *src* 是本项目特有源码 ;

> *vue 组件目录结构*由*vue-sass-cli*生成;
> 详见:
> - npm: https://www.npmjs.com/package/vue-sass-cli
> - github: https://github.com/ivuex/vue-sass-cli
>
> why?
> - 为了方便that.webpack.config.js启动和编译任意子组件;
> - 为了方便webpack.config.js编译所有组件(根组件和子孙组件),并生成静态html;
>
> 详见
> - *webpack.README.md* ;
> - git@github.com:ivuex/vue-sass-that-all-webpack.git
> - https://github.com/ivuex/vue-sass-that-all-webpack

## example 例子介绍
###  overShowSub
- 功能: 监听mouseOver和mouseOut事件,　切换hideShow组建的显示和隐藏状态;
+ 实现逻辑: 
#### overShowSub 组件:
  - 操作overShowSub的this.isInMe属性;
  - 如果mouseOver事件触发，将组件overShowSub的this.isInMe赋值为true;
  - 如果mouseOver事件触发，将组件overShowSub的this.isInMe赋值为false;
  - 引入hideShow组件;
  + 在overShowSub的作用域内的template中为hideShow组件加一个自定义事件updateIsInBar;
    - 将该事件绑定上setIsInBar方法,该方法接受一个布尔值参数,并将该该布尔值参数赋值给this.isInBar;
  + 如果this.isInMe和hideShow组件通过$emit的方式决定的this.isInBar同时被判断为真,则显示hideShow组件；
    - 反之,则隐藏该组件；
    
#### hideShow　组件    
  - 操作hideShow的this.isInBar属性;
  + 如果mouseOver事件触发,
    - 将组件overShowSub的this.isInBar赋值为true;
    - 通过$emit的方式将this.isInBar传给父组件的updateIsInBar事件；
  + 如果mouseOver事件触发，
    - 将组件overShowSub的this.isInMe赋值为false;
    - 通过$emit的方式将this.isInBar传给父组件的updateIsInBar事件；

#### readmeOverShowSub　组件
  + 实现demo在当前页面显示: 引入 vue-simplemde 实现markdown编辑和解析;
    - vue-simplemde 详见: https://github.com/F-loat/vue-simplemde
    - 引入　highlight.js 实现编译后的markdown代码高亮显示;  
    - 高亮主题可选列表：https://github.com/isagalaev/highlight.js/tree/master/src/styles
    + vue-simplemde 配置详情:
      - 中文： https://github.com/F-loat/vue-simplemde/blob/master/doc/configuration_zh.md
      - 英文： https://github.com/F-loat/vue-simplemde/blob/master/doc/configuration_en.md
  + vue-simplemde 引进来会在顶部出现一个text-area, 我是这样使之隐藏的:    
```
mounted() {
      this.$nextTick(() => {
        const ele = this.$refs.markdownEditor.$el;
        const mustHiddenTextarea = ele.getElementsByTagName('textarea')[0]
        mustHiddenTextarea.style.visibility = 'hidden';
      });
    },
```  
  + 为vue-simplemde 内容区域赋值:
```

  export default {
    name: "readmeOverShowSub",
    data() {
      return {
        content: `
        
###  overShowSub
- 功能: 监听mouseOver和mouseOut事件,　切换hideShow组建的显示和隐藏状态;
+ 实现逻辑:
#### overShowSub 组件:
  - 操作overShowSub的this.isInMe属性;
  - 如果mouseOver事件触发，将组件overShowSub的this.isInMe赋值为true;
  - 如果mouseOver事件触发，将组件overShowSub的this.isInMe赋值为false;
  - 引入hideShow组件;
  + 在overShowSub的作用域内的template中为hideShow组件加一个自定义事件updateIsInBar;
    - 将该事件绑定上setIsInBar方法,该方法接受一个布尔值参数,并将该该布尔值参数赋值给this.isInBar;
  + 如果this.isInMe和hideShow组件通过$emit的方式决定的this.isInBar同时被判断为真,则显示hideShow组件；
    - 反之,则隐藏该组件；

#### hideShow　组件
  - 操作hideShow的this.isInBar属性;
  + 如果mouseOver事件触发,
    - 将组件overShowSub的this.isInBar赋值为true;
    - 通过$emit的方式将this.isInBar传给父组件的updateIsInBar事件；
  + 如果mouseOver事件触发，
    - 将组件overShowSub的this.isInMe赋值为false;
    - 通过$emit的方式将this.isInBar传给父组件的updateIsInBar事件；
        `,
        
        
        configs: {
          styleSelectedText: true,
        }
        
      }
    },
    
    mounted: {
      this.$refs.markdownEditor.initialize(); // init
    }
  }
```    
