# ad-cardreverse-css

연습용 레포

## 출처

https://velog.io/@gicomong/reverse-card
- 원본출처는 아마 코드펜에서 진행하는 100dayscss 인것 같다.
## 배운것

트랜지션 + 애니메이션 기타! (강의로 한번 쓱 훝어볼 필요가 있다)

- [x] absolute div를 center 에 배치하는 법에 대해서 
  - 원래 있던 코드로 작성하면 100% 뷰포트가 깨진다.
  - 아름답던 body의 viewport 에 스크롤 바가 생겼다.
  - 이를 수정하고자 많이 고생했다.
  - translate의 원리에 대해 고민할 수밖에 없었는데, 그냥 div는 내비두고 가상의 dom만 옮겨서 보여준거 같다.
  - https://stackoverflow.com/questions/8508275/how-to-center-a-position-absolute-element
  - 이것 저것 검색하다가 나온 사이트
  - 재미있었던 점은, 추천 600과 1200을 받은 답변 두개가 있는데,
  - 600은 본래 코드 1200은 내가 선택하고자 고른 코드였다.
  - 무엇이 옳은 코드인가는 더 많은 논쟁이 필요하지만, 내가 원하는건 100vh를 지키는 코드다.
- [x] 이 로직의 핵심은 absolute를 통해 두카드를 겹쳐놓고, transition-style로 preserve-3d를 사용하는 것.
- [x] flex 가 postion: absolute 를 disable 시키고 자동으로 block 으로 들어가는 것 같다.
- [x] transform-origin
- [x] backface-visivilty 에 대한 firefox의 오류가 있다. (해결하는데 한참 삽질했다.)
  - https://stackoverflow.com/questions/9604982/backface-visibility-not-working-properly-in-firefox-works-in-safari
  - 역시 코딩의 가장 큰 적은 **잘못된 확신**이다.
  - 이 경우엔 분명 잘 동작하리라 생각했던 로직이 작동하지 않았다.
- [x] 부모의 z-index 가 1이라고 해서 자식의 z-index 도 1은 아니다.
- [x] @keyframes 에 대해 배웠다.
- [x] transform: 에 대해 이것저것 실험해 볼 수 있었다.  
