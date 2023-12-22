<template>
  <q-page class="flex flex-center">
    <q-btn label="공유하기" @click="shareKakao"></q-btn>
    <a id="kakaotalk-sharing-btn" href="javascript:;">
  <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
    alt="카카오톡 공유 보내기 버튼" />
</a>
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
  Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: '딸기 치즈 케익',
      description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
      imageUrl:
        'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });
});

 const shareKakao = ()=>{
      Kakao.Share.sendScrap({
        requestUrl: 'https://developers.kakao.com',
        templateId: 102185,
      });
}
</script>
