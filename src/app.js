Kakao.init('6d395deceefb445d914a013269bef873'); // 사용하려는 앱의 JavaScript 키 입력
function testFunc(){
      Kakao.Share.sendScrap({
        requestUrl: 'https://developers.kakao.com',
        templateId: 102174,
      });
}