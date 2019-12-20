<template>

    <div>
        <div>
            <p>默认</p>
            <timer-view></timer-view>
        </div>
        <div >
            <p>日期横向排列</p>
            <timer-view layout="horizontal" dateFormat="YY年MM月DD日"></timer-view>
        </div>
        <div >
            <p>只显示时间</p>
            <timer-view :date="false" :week="false" timeFormat="hh:mm:ss" ></timer-view>
        </div>
        <div >
            <p>自定义图形数量、颜色、间距</p>
            <timer-view timeFormat="hh:mm:ss" patternRgb="0, 255, 149" :patternNum="10" patternInterval="10px"></timer-view>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {

            }
        },
      methods:{

      },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p{
        margin-top:2vw;
    }
</style>
