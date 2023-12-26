<template>
  <q-page class="flex justify-center items-start column">
    <img src="~assets/main-image.png" alt="" srcset="">
    <q-btn class="share-button" @click="shareKakao" flat></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage'
})

</script>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  Kakao.init('f5c45ef031d839cd5d6763b12b7adfc1');
});

 const shareKakao = ()=>{
      Kakao.Share.sendScrap({
        requestUrl: 'https://developers.kakao.com',
        templateId: 102185,
        serverCallbackArgs: {
          key: 'value', // 사용자 정의 파라미터 설정
        },
        callback:()=>{
          alert("공유 완료")
        }
      });
}
</script>
<style>
.q-page-container{
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
img{
    margin-bottom: auto;
}
.share-button{
  position: absolute;
  top: 552px;
  z-index: 1;
  width: 280px;
  height: 10vh;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
}
</style>