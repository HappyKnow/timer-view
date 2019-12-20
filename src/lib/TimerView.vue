<template>
  <div class="content-box" >
    <ul class="ul-rhombus">
      <li v-for="(item,index) in list" :style="'background: rgba('+patternRgb+','+1/patternNum*(index+1)+');margin-left:'+patternInterval"></li>

    </ul>
    <div :class="'timer '+layout">
      <div class="time" v-if="time" :style="'min-width:'+(timeFormat.length>7?'11rem':'9rem')">{{dateTime.time}}</div>
      <div class="detailed">
        <span class="date" v-if="date" >{{dateTime.date}}</span>
        <span class="week" v-if="week" :style="date?'margin-left:8px;':''">{{weeks[dateTime.week]}}</span>
      </div>
    </div>
    <ul class="ul-rhombus reversal">
      <li v-for="(item,index) in list" :style="'background: rgba('+patternRgb+','+1/patternNum*(index+1)+');margin-left:'+patternInterval"></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'timer-view',
  props:{
    dateFormat:{
      type:String,
      default:'YY-MM-DD',
    },
    timeFormat:{
      type:String,
      default:'hh:mm',
    },
    date:{
      type:Boolean,
      default:true,
    },
    time:{
      type:Boolean,
      default:true,
    },
    week:{
      type:Boolean,
      default:true,
    },
    layout:{
      type:String,
      default:'vertical',
    },
    patternNum:{
      type:Number,
      default:5,
    },
    patternRgb:{
      type:String,
      default:'0,134,234',
    },
    patternInterval:{
      type:String,
      default:'0px',
    }
  },
  created(){
    this.list=new Array(this.patternNum);
  },
  data() {
    return{
      nowDate:new Date(),
      timer:null,
      weeks : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
      list:[]
    }
  },
  methods: {
    setTimer: function () {
      //this.dateTime = new Date();
      let _this=this;
      this.timer = setInterval( () => {
        _this.nowDate = new Date();
      }, 1000)
    },
    dateFormatter:function (time,format) {
      if(typeof time === 'string'){
        time = time.replace(/-/g,"/");
      }
      var date = new Date(time);

      var year = date.getFullYear(),
        month = date.getMonth()+1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
      var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
        return '0'+index;
      });////开个长度为10的数组 格式为 00 01 02 03

      var newTime = format.replace(/YY/g,year)
      .replace(/MM/g,preArr[month]||month)
      .replace(/DD/g,preArr[day]||day)
      .replace(/hh/g,preArr[hour]||hour)
      .replace(/mm/g,preArr[min]||min)
      .replace(/ss/g,preArr[sec]||sec);

      return newTime;
    }
  },
  computed:{
    dateTime:function () {

      let date_obj = {
        date:this.dateFormatter(this.nowDate,this.dateFormat),
        week:this.nowDate.getDay(),
        time:this.dateFormatter(this.nowDate,this.timeFormat)
      }
      return date_obj;
    },

  },
  mounted:function () {
    this.setTimer();
  },
  beforeDestroy: function () {
    clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $color_main_txt:20px;
  *{padding:0;margin:0;}
  ul li{list-style: none;}

  .content-box{
    display: flex;
    justify-content: center;
    align-items: center;
    color:$color_main_txt;
    .ul-rhombus{
      overflow: hidden;
      /*max-width: 15vw;*/
      line-height: .8vw;
      height:.8vw;
      min-height:10px;
      li{
        width:3vw;
        height:100%;
        min-width:32px;
        float: left;
      }
      @for $i from 1 through 5 {
        li:nth-child(#{$i}){
         /* background: rgba(0,134,234,0.20*$i);*/
        }
      }
    }
    .ul-rhombus:nth-child(1){
      li{
        clip-path: polygon(0 0, 20% 100%, 100% 100%,80% 0);
      }
    }
    .ul-rhombus:nth-child(3){
      li{
        clip-path: polygon(20% 0, 0 100%, 80% 100%,100% 0);
      }

    }
    .reversal{
      transform: rotate(180deg);
    }
    .timer{
      white-space: nowrap;
      /*width:20%;*/
      padding: 0 2vw;
      text-align: center;
      .time{
        font-size: 2.8rem;
        min-width:11rem;
      }
      .date{
      }
    }
    .horizontal{

      .detailed{
        display: inline-block;
      }
      .time{
        display: inline-block;
        margin-right:1vw;
        vertical-align: middle;
      }
    }
  }
</style>
