<template>
  <div>
    <button @click="show = !show">Toggle show</button>
    <br />
    <transition
      :name="name"
      :duration="duration"     
      appear
      v-on:after-enter="afterEnter"
      v-on:after-leave="afterLeave"
    >
      <div v-if="show" id="my-toast" :style="{color:fontColor,fontSize:fontSize}">{{ msg }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    name: {
      type: String,
      default: "bounce",
    },
    fontColor:{
      type:String,
      default: '#2c3e50'
    },
    fontSize:{
      type:String,
      default: '12px'
    },
    msg: {
      type: String,
      default: "消息提示框",
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      show: true,
      time: 0,
    };
  },
  methods: {
    afterEnter() {
      //弹框内容 持续显示的时间
      this.time = setTimeout(() => {
        this.show = !this.show;
      }, this.duration);
    },
    afterLeave() {
      clearTimeout(this.time);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* fade 淡入淡出的效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* bounce 放大缩小的效果 */
.bounce-enter-active {
  animation: bounce-in 0.5s forwards;
}
.bounce-leave-active {
  animation: bounce-out 0.5s forwards;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out{
  from{
     transform: scale(1);
     opacity: 1;
  }
  to{
     transform: scale(0.5);
    opacity: 0;
  }
}
</style>
