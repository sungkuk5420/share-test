Kakao.init('6d395deceefb445d914a013269bef873'); 
 const shareKakao = ()=>{
      Kakao.Share.sendScrap({
        requestUrl: 'https://developers.kakao.com',
        templateId: 102174,
      });
}