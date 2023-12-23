<template>
  <q-page class="flex flex-center column">
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
      });
}
</script>
<style>
.share-button{
  position: absolute;
  top: 552px;
  z-index: 1;
  width: 280px;
  height: 10vh;
}
</style>