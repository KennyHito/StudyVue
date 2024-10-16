<h2>记录学习Vue之路</h2>

B站尚硅谷在线学习视频链接: 
[尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通](
https://www.bilibili.com/video/BV1Zy4y1K7SH/?p=6&spm_id_from=pageDriver&vd_source=0aba82a4002c00e3a072b82df5f53868)

<h3>一、初识 Vue</h4>

```
1.想让vue工作，就必须创建一个vue实例，且要传入一个配置对象;
2.root容器里的代码依然符合html规范，只不过混入了一些特殊的vue语法;
3.root容器里的代码被称为【vue 模板】;
4.Vue实例和容器是一一对应的； 
5.真实开发中只有一个Vue实例，并且会配合着组件一起使用； 
6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到 data中的所有属性； 
7.一旦 data 中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

注意区分：js表达式和js代码（语句） 
  1.表达式:一个表达式会产生一个值，可以放在任何一个需要值的地方：
    (1).a
    (2).a+b
    (3).demo (1)
    (4).x===y?'a':'b'
  2.js 代码（语句）
    (1).if(){}
    (2).for(){}
```

<h3>二、Vue模板语法有2大类</h4>

```
1.插值语法：
功能:用于解析标签体内容。
写法:{{xxx}}了，xxx 是 js 表达式，且可以直接读取到 data 中的所有属性。 

2.指今语法：
功能:用于解析标签（包括：标签属性、标签体内容、绑定事件.....）
举例:v-bind:href="xxx” 或 简写为 :href="xxx”，xxx 同样要写 js 表达式，且可以直接读取到 data 中的所有属性。

备注:vue 中有很多的指今，且形式都是：v-????，此处我们具体拿 v-bind 举个例子。
```

<h3>三、Vue中有2种数据绑定的方式</h4>

```
1.单向绑定(v-bind)：数据只能从 data 流向页面 
2.双向绑定(v-model)：数据不仅能从 data 流向页面，还可以从页面流向 data。

备注： 
1.双向绑定一般都应用在表单类元素上（如：input、select 等）
2.v-model:value可以简写为v-model，因为v-model默认收集的就是value值。
```

<h3>四、data与el的2种写法</h4>

```
1.e1有2种写法
  a.new vue时候配置el属性。
  b.先创建vue实例，随后再通过vm.$mount（’#root’)指定e1的值。

2.data有2种写法
  a.对象式
  b.函数式
  如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

3.一个重要的原则：
  由vue管理的函数,一定不要写箭头函数，一旦写了箭头函数，this就不再是vue实例了。
```

<h3>五、MVVM模型</h4>

```
1. M：模型(Model): data中的数据
2. V: 视图(View) : 模版代码
3. VM：视图模型 (ViewModel)：vue实例
观察发现：
  1.data中所有的属性，最后都出现在了vm身上，
  2.vm身上所有的属性及vue原型上所有属性，在vue模板中都可以直接使用。
```

<h3>六、数据代理</h4>

1、通过举例的方式回顾Object.defineProperty方法

```
let number = 18;
    let person = {
      name: "王五",
      sex: "男",
      // age:"18"
    };

    Object.defineProperty(person, "age", {
      // 基本属性
      // value: "18",
      // enumerable: true, //控制属性是否可以枚举，默认值是false
      // writable: true, //控制属性是否可以被修改，默认值是false
      // configurable: true, //控制属性是否可以被删除，默认值是false

      // 高级属性
      // 当有人读取person的age属性时，get两数(getter)就会被调用，且返回值就是age的值
      get() {
        console.log("有人读取了age属性");
        return number;
      },

      //当有人修改person的age属性时，set两数(setter）就会被调用，且会收到修改的具体值
      set(value) {
        console.log("有人修改了age属性,且值为", value);
        number = value;
      },
    });

    console.log(person);
```

2、何为数据代理:通过一个对象代理对另一个对象中属性的操作(读/写)
```
let obj = { x: 100 };
let obj2 = { y: 200 };
Object.defineProperty(obj2, "x", {
  get() {
    return obj.x;
  },
  set(value) {
    obj.x = value;
  },
});
```

3、vue中数据代理
```
1.Vue中的数据代理：
  通过vm对象来代理data对象中属性的操作（读/写）
2.Vue中数据代理的好处：
  更加方便的操作data中的数据
3.基本原理：
  通过object.defineProperty()把data对象中所有属性添加到vm上。
  为每一个添加到vm上的属性，都指定一个getter/setter。
  在getter/setter内部去操作（读/写）data中对应的属性。  
```
![数据代理图示](https://github.com/KennyHito/StudyVue/blob/main/img/%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86%E5%9B%BE%E7%A4%BA.png)


<h3>七、事件处理</h4>

一、事件的基本使用

```
1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
2.事件的回调需要配置在methods对象中，最终会在vm上；
3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；
4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参； 
```

二、Vue中的事件修饰符

```
1.prevent:阻止默认事件（常用）;
2.stop：阻止事件冒泡（常用）;
3.once：事件只触发一次（常用）;
4.capture：使用事件的捕获模式;
5.self：只有event.target是当前操作的元素时才触发事件;
6.passive：事件的默认行为立即执行，无需等待事件回调执行完牛;
```

三、键盘事件
```
1.vue中常用的按键別名：
  回车 => enter
  删除 => delete（捕获“删除”和“退格”键）
  退出 => esc
  空格 => space
  换行 => tab(特殊,必须配合keydown使用)
  上 => up
  下 => down
  左 => 1eft
  右 => right
2.vue未提供別名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
3.系统修饰键（用法特殊）：ctrl、alt、shift、meta
  a.配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
  b.配合keydown使用：正常触发事件。
4. 也可以使用keycode去指定具体的按键（不推荐）;
5.Vue.config.keycodes. 自定义键名=键码，可以去定制按键别名（不推荐）;
```

<h3>八、计算属性</h4>

```
1.定义：要用的属性不存在，要通过己有属性计算得来。
2.原理：底层借助了objcet.defineproperty方法提供的getter和setter。
3.get两数什么时候执行？
  a.初次读取时会执行一次,之后会取缓存,除非b条。
  b.当依赖的数据发生改交时会被再次调用。
4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
5.备注：
  a.计算属性最终会出现在vm上，直接读取使用即可。
  b.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
  ```

<h3>九、监视属性watch</h3>

```
1.当被监视的属性变化时，回调函数自动调用，进行相关操作
2.监视的属性必须存在，才能进行监视！！
3.监视的两种写法：
  a.new Vue吋传入watch配置
  b.通过vm.$watch监视
```

**总结: computed和watch之间的区别**

```
1.computed能完成的功能，watch都可以完成。
2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作,比如下方的定时器。

两个重要的小原则：
1.所有被vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象。
2.所有不被vue所管理的函数（定时器的回调函数、ajax的回调函数、Promise的回调函数等），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。
```

<h3>十、绑定样式</h3>

```
1. class样式(常用)
  写法:class="xxx" xxx可以是字符串、对象、数组。
  字符串写法适用于：类名不确定，要动态获取。
  对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
  数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
2.style样式
  :style="{fontSize: xxx}"其中xxx是动态值。
  :style="[a,b]" 其中a、b是样式对象。
```

<h3>十一、条件渲染</h3>

```
1.v-if
写法：
  (1).v-if="表达式"
  (2).v-else-if="表达式"
  (3).v-else="表达式"
  适用于：切换频率较低的场景。
  特点：不展示的DOM元素直接被移除。
  注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。

2.v-show
  写法：v-show="表达式"
  适用于：切换频率较高的场景。
  特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。
```

<h3>十二、列表渲染</h3>

1、基本列表
```
v-for指令:
  1.用于展示列表数据
  2.语法：v-for="(item, index) in xxx" :key="yyy"
  3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
```

2、key属性的作用与原理
```
(1).虚拟DOM中key的作用：
  key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】,随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下。

(2).对比规则：
  a.旧虚拟DOM中找到了与新虚拟DOM相同的key：
    * 若虚拟DOM中内容没变, 直接使用之前的真实DOM！
    * 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
  b.旧虚拟DOM中未找到与新虚拟DOM相同的key创建新的真实DOM，随后渲染到到页面。

(3).用index作为key可能会引发的问题
  a. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
  b. 如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题。

(4).开发中如何选择key?
  a.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
  b.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。
```
![图示1](https://github.com/KennyHito/StudyVue/blob/main/12_%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/index%E4%BD%9C%E4%B8%BAkey%E6%97%B6dom%E9%94%99%E4%B9%B1%E5%88%86%E6%9E%90%E5%9B%BE.PNG)
![图示2](https://github.com/KennyHito/StudyVue/blob/main/12_%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/%E6%95%B0%E6%8D%AEid%E4%BD%9C%E4%B8%BAkey%E7%9A%84%E7%9C%9F%E5%AE%9Edom%E6%B8%B2%E6%9F%93%E6%AD%A3%E7%A1%AE%E7%9A%84%E5%8E%9F%E7%90%86%E5%9B%BE.PNG)