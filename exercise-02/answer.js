// ข้อ 2.1

function display(msg) {
  let div = document.getElementById("ex01-div");
  div.innerHTML = msg;
}

function showConfirm(callback) {
  // You code here
  callback(confirm("ยืนยันไหม???") ? "ยืนยันจ้า" : "ไม่ดีกว่า");
}

// ข้อ 2.2
function start() {
  // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()

  setTimeout(() => {
    let start = document.getElementById("start");
    start.innerHTML = "Program started";
  }, 0);

  setTimeout(() => {
    let process = document.getElementById("process");
    process.innerHTML = "Hello World";
  }, 2000);

  setTimeout(() => {
    let end = document.getElementById("end");
    end.innerHTML = "Program ended";
  }, 3000);
}

// ข้อ 2.3
function stopTime(time) {

    time = document.getElementById("Time").value;    

    const intervalId = setInterval(function () {

        let min = Math.floor(time / 60);
        let sec = time - (min * 60);

        let minFormat = min < 10 ? "0" + min : min;
        let secFormat = sec < 10 ? "0" + sec : sec

        document.getElementById("setMinute").innerHTML = minFormat;
        document.getElementById("setSecond").innerHTML = secFormat;

        time--;
        if (time < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}
