/*텍스트 회전*/
var stream = document.getElementById("stream");
stream.style.color = "green";

var timerID = setInterval("doRotate()", 500); // 500밀리초 주기로 doRotate() 호출

stream.onclick = function (e) {
  // 마우스 클릭 이벤트 리스너
  clearInterval(timerID); // 타이머 해제. 문자열 회전 중단
};

function doRotate() {
  var str = stream.innerHTML;
  var firstChar = str.substr(0, 1);
  var remains = str.substr(1, str.length - 1);
  str = remains + firstChar;
  stream.innerHTML = str; // str 텍스트를 stream 객체에 출력
}
/*텍스트 회전*/

/*오디오 제어기*/
function control(e) {
  var id = e.target.id;
  if (id == "play") {
    // play 버튼
    audio.play(); // 재생
  } else if (id == "pause") {
    // pause 버튼
    audio.pause(); // 일시 중지
  } else if (id == "replay") {
    // replay 버튼
    audio.load(); // src에 지정된 미디어 다시 로딩
    audio.play(); // 처음부터 다시 재생
  }
}
/*오디오 제어기*/

/*innerHTML을 이용한 HTML 동적 변경 */
function change1() {
  var p = document.getElementById("firstP");
  p.style.fontSize = "30px";
  p.style.backgroundColor = "aliceblue";
  p.innerHTML =
    "사실: COVID-19 백신은 COVID-19 원인 바이러스의 변이를 생성하거나 유발하지 않습니다. <br>대신, COVID-19 백신은 새로운 변이가 출현하는 것을 방지하는 데 도움이 될 수 있습니다.";
}

function change2() {
  var p = document.getElementById("secondP");
  p.style.fontSize = "30px";
  p.style.backgroundColor = "aliceblue";
  p.innerHTML =
    "사실: 백신이 문제를 일으켰는지 여부가 확실하지 않더라도 누구나 백신 부작용 보고 시스템(VAERS)에 사건을 보고할 수 있습니다. 이 때문에 VAERS 데이터만으로는 보고된 부작용이 COVID-19 백신에 의한 것인지 여부를 결정할 수 없습니다.";
}

function change3() {
  var p = document.getElementById("thirdP");
  p.style.fontSize = "30px";
  p.style.backgroundColor = "aliceblue";
  p.innerHTML =
    "사실: 화이자-바이오앤텍 및 모더나와 같은 mRNA 백신은 다른 유형의 백신과 작용 방식이 다르지만 여전히 체내에서 면역 반응을 유발합니다.";
}

function change4() {
  var p = document.getElementById("fourthP");
  p.style.fontSize = "30px";
  p.style.backgroundColor = "aliceblue";
  p.innerHTML =
    "사실: 사실: COVID-19 백신에는 마이크로칩이 포함되어 있지 않습니다. 백신은 질병과 싸우기 위해 개발되며 접종자의 움직임을 추적하기 위해 투여되지 않습니다.";
}

function change5() {
  var p = document.getElementById("fifthP");
  p.style.fontSize = "30px";
  p.style.backgroundColor = "aliceblue";
  p.innerHTML =
    "사실: 백신 배출은 신체 내부 또는 밖으로 백신 성분이 방출 또는 배출되는 현상을 설명하기 위해 사용되는 용어입니다. 백신 배출은 백신에 약화된 형태의 살아있는 바이러스가 포함된 경우에만 발생할 수 있습니다.";
}

function change6() {
  var p = document.getElementById("sixthP");
  p.style.fontSize = "30px";
  p.style.backgroundColor = "aliceblue";
  p.innerHTML =
    "사실: 미국에서 승인을 받은 어떠한 COVID-19 백신도 살아있는 COVID-19 원인 바이러스를 포함하지 않습니다. 즉, 백신을 맞고 COVID-19에 감염되어 아플 일은 없습니다.";
}
/*innerHTML을 이용한 HTML 동적 변경 */
