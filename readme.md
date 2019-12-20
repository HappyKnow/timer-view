# timer-view

基于vue的时钟显示组件

## 使用

安装
``` bash
npm install timer-view -S
```

全局应用组件
``` javascript
import TimerView from 'timer-view'
Vue.use(TimerView)
```

使用组件
```

<div class="container">
    <timer-view />
</div>
```

组件属性
```
layout:布局（vertical/horizontal）默认‘horizontal’
dateFormat:日期格式 <String> 默认‘YY-MM-DD’
timeFormat:时间格式<String> 默认‘hh:mm’
date:是否显示日期 true/false 默认 true
time:是否显示时间 true/false 默认 true
week:是否显示星期 true/false 默认 true
patternNum:图形数量<Number> 默认 5
patternRgb:图形rgb色值<String> 默认 ‘0,134,234’
patternInterval:图形间距<String> 默认‘0px’
```

## 效果
![image](https://raw.githubusercontent.com/HappyKnow/timer-view/master/screen.png)