<template>
  <q-page class="flex flex-center">
    <q-btn label="공유하기" @click="shareKakao"></q-btn>
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
  Kakao.init('6d395deceefb445d914a013269bef873'); 
});

 const shareKakao = ()=>{
      Kakao.Share.sendScrap({
        requestUrl: 'https://developers.kakao.com',
        templateId: 102174,
      });
}
</script>
