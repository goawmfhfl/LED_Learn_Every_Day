# 6월 1주차 피드백

링크: https://www.notion.so/6-1-a2a1d5fda8cb493a8ae37768e7180973
주차: 6-1 주차

JavaScript Challenge 피드백 노트입니다.

> 배운점

오늘은 프로토타입에 대하여 서로 배워보는 시간을 가져보았습니다. 생활코딩 이고잉 강사님을 통해서 프로토타입에 전반적으로 이해하게 되었고 팀원들에게 제가 이해한 내용을 설명함으로써 다시 리마인딩 해보는 시간이 되었습니다 

# `팀원들에게 배운점`


`노가혜님에게 배운점`

가혜님께서는 Array의 객체도 Array라는 포로토를 상속하고 있다는 사실을 알려주셨습니다.

또한 number, string, boolean, null, undefined를 제외한 모든 아이들은 다 object! 라는 사실은 다시 한번 복습하는 시간이 되었습니다.

# `팀원들에게 배운점`


prototype chain

`김수진님에게 배운점`

프로토타입 체인에 대하여 배우게 되었습니다. 프로토타입을 체인을 걸어 사용함으로써 무한 상속이 가능해지며 또한 불필요한 코드를 제거할 수 있다는 사실을 쉽고 간결하게 설명해 주셨습니다. 프로퍼티 뿐만아니라 메서드 또한 프로토타입 체인을 통해서 활용이 가능하니 이는 엄청난 이점으로 작동할 것 같습니다.

> 피드백

> `가혜님께서 질문해주셨습니다`

person.prototype.sum=function(){}을 할 때 person.prototype에 cunstructor가 생기는건가요?

# 영상 링크

[prototype vs __proto__ - JavaScript 객체 지향 프로그래밍](https://opentutorials.org/module/4047/24629)

4분 08초 내용 ! person.prototype 객체 또한 자신이 person에 소속이라는 것을 표시하기 위해서 어딘가에 기록을 해야한다 그러기위해서 cunstructor라는 프로퍼티를 만들고 프로퍼티는 person을 가리킨다고 합니다!

# 영상 내용



function person(){} 객체(분홍색박스)를 생성하는 순간 person객체(분홍색박스)에는 prototyepe이 생기며 그 prototype은 person.prototype(초록색 박스)을 가리키고 person.prototype(초록색 박스)에 cuntructor가 생기며 그 cuntructor은 person객체(분홍색 박스)를 가리킨다고 한다 ㅎㅎ !!