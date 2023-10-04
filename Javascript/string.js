// 문자열 선언
var greeting = "Hello!";
var farewell = 'Bye!' ;
var myname = '김테킷';

var sentence = greeting + '\n' myname;
console.log(sentence);

console.log(farewell + 2);


//이스케이프 시퀀스
var sentence = greeting + '\n' + myname;
var sentence = greeting + '\t' + myname;
var sentence = greeting + '\' ' + myname;
var sentence = greeting + "'\t'" + myname;
var sentence = greeting + "\\" + myname;
console.log(sentence);


//템플릿 리터럴
//멀티라인 텍스트 작업 가능
//이스케잎 시퀀스 필요 X

//var a = ` 안녕하세요!`;
var a = `안녕하세요!`
여러분 :0`; 
console.log(a); 
var price = 1000;
var b = '이 물건은 'price + '원 입니다.'
console.log(b);

var c = ` 이 물건은 ${price}원 입니다.`
console.log (c);

var d = `이 물건은 {$200 + 450} 원 입니다.`; 

//문자열 함수




// index0f
abc.index0f("man");
console.log(abc.index0f("man"));
