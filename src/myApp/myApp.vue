<template>
  <div id="app">
    <vue-markdown class="md-header">
类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶:

# 这是 H1

## 这是 H2

###### 这是 H6
    </vue-markdown>
    <vue-markdown class="md-verbos-Blockquotes">
### This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
    </vue-markdown>
    <vue-markdown class="md-Blockquotes">

### This is a *simple* blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
    </vue-markdown>

    <vue-markdown class="nested-quoting">
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
    </vue-markdown>
    <vue-markdown class="blockquotes-nested-other-syntax">
> ## 这是一个标题。
>
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
>
> 给出一些例子代码：
>
>     return shell_exec("echo $input | $markdown_script");
    </vue-markdown>
    <vue-markdown>
### 无序列表使用星号、加号或是减号作为列表标记：
*   Red
*   Green
*   Blue
    </vue-markdown>
    <vue-markdown>
### 等同于：
-   Red
-   Green
-   Blue
    </vue-markdown>
    <vue-markdown>
### 也等同于：
-   Red
-   Green
-   Blue
    </vue-markdown>
    <vue-markdown>
### 有序列表则使用数字接着一个英文句点：
1.  Bird
2.  McHale
3.  Parish
    </vue-markdown>
    <vue-markdown>
```
        <ol>
            <li>Bird</li>
            <li>McHale</li>
            <li>Parish</li>
        </ol>
```
    </vue-markdown>

    <vue-markdown>
####  如果你的列表标记写成：
1.  Bird
1.  McHale
1.  Parish
    </vue-markdown>
    <vue-markdown>
#### 或甚至是：
3. Bird
1. McHale
8. Parish
    </vue-markdown>
    <vue-markdown>
> 你都会得到完全相同的 HTML 输出。重点在于，你可以让 Markdown 文件的列表数字和输出的结果相同，或是你懒一点，你可以完全不用在意数字的正确性。

> 如果你使用懒惰的写法，建议第一个项目最好还是从 1. 开始，因为 Markdown 未来可能会支持有序列表的 start 属性。

>  列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。

    </vue-markdown>
    <vue-markdown>
### 要让列表看起来更漂亮，你可以把内容用固定的缩进整理好：
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
    </vue-markdown>
    <vue-markdown>
### 但是如果你懒，那也行：
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
    </vue-markdown>
    <vue-markdown>
### 如果列表项目间用空行分开，在输出 HTML 时 Markdown 就会将项目内容用p标签包起来，举例来说：
*   Bird
*   Magic
    </vue-markdown>
    <vue-markdown>
### 但是这个：

*   Bird

*   Magic
    </vue-markdown>
    <vue-markdown>
### 会被转换为：
```
        <ul>
    <li><p>Bird</p></li>
    <li><p>Magic</p></li>
</ul>
```
    </vue-markdown>
    <vue-markdown>
### 列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空格或是 1 个制表符：
1.  This is a list item with two paragraphs. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit. Aliquam hendrerit
mi posuere lectus.

Vestibulum enim wisi, viverra nec, fringilla in, laoreet
vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
    </vue-markdown>
    <vue-markdown>
### 如果你每行都有缩进，看起来会看好很多，当然，再次地，如果你很懒惰，Markdown 也允许：

*   This is a list item with two paragraphs.

This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.
    </vue-markdown>
    <vue-markdown>
### 如果要在列表项目内放进引用，那 > 就需要缩进：

*   A list item with a blockquote:

> This is a blockquote
> inside a list item.
    </vue-markdown>
    <vue-markdown>
### 如果要放代码区块的话，该区块就需要缩进两次，也就是 8 个空格或是 2 个制表符：

*   一列表项包含一个列表区块：

        代码写在这
    </vue-markdown>
    <vue-markdown>
当然，项目列表很可能会不小心产生，像是下面这样的写法：

999. What a great season.
    </vue-markdown>
<vue-markdown>
换句话说，也就是在行首出现数字-句点-空白，要避免这样的状况，你可以在句点前面加上反斜杠。

999\. What a great season.
</vue-markdown>
<vue-markdown>
代码区块

和程序相关的写作或是标签语言原始码通常会有已经排版好的代码区块，通常这些区块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 &lt;pre&gt; 和 &lt;code&gt; 标签来把代码区块包起来。

要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以，例如，下面的输入：

这是一个普通段落：

这是一个代码区块。
</vue-markdown>
      <vue-markdown>
```
Markdown 会转换成：

<p>这是一个普通段落：</p>

<pre><code>这是一个代码区块。
</code></pre>
```
      </vue-markdown>
    <vue-markdown>
这个每行一阶的缩进（4 个空格或是 1 个制表符），都会被移除，例如：

Here is an example of AppleScript:

    tell application "Foo"
    beep
    end tell
    </vue-markdown>
    <vue-markdown>
        会被转换为：

        <p>Here is an example of AppleScript:</p>

        <pre><code>tell application "Foo"
    beep
end tell
</code></pre>
    </vue-markdown>
    <vue-markdown>
分隔线

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：

* * *

***

*****

- - -

---------------------------------------
    </vue-markdown>
    <vue-markdown>

    </vue-markdown>


  </div>
</template>

<script>
  // import VueMarkdown from '../../../src/VueMarkdown' // development
  import VueMarkdown from 'vue-markdown' // production

  export default {
    name: 'app',
    data() {
      return {
        source: new Date().toLocaleTimeString(),
        anchorAttrs: {
          target: '_blank',
          rel: 'noopener noreferrer nofollow'
        }
      }
    },
    components: {
      VueMarkdown
    },
    mounted() {
      setInterval(() => {
        this.source = new Date().toLocaleTimeString();
      }, 1000);
    }
  }
</script>
