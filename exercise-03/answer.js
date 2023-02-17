// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
  time = 10;
  const intervalId = setInterval(() => {
    dogTime.innerHTML = time;
    time--;
    if (time < 0) {
      url = "https://dog.ceo/api/breeds/image/random";
      getAPI(
        url,
        function onSuccess(res) {
          console.log(res.message);
          dogImg.src = res.message;
        },
        function onError(res) {
          console.log(res);
        }
      );
      clearInterval(intervalId);
    }
  }, 1000);
}

// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')
  const rainbow = document.getElementById("rainbow");
  setTimeout(() => {
    // STATE 1 color = 'has-text-primary'
    getResult().status == "success"
      ? ((rainbow.innerHTML = getResult().text),
        rainbow.classList.add("has-text-primary"),
        rainbow.classList.remove("has-text-danger"))
      : ((rainbow.innerHTML = "STATE 1"),
        rainbow.classList.add("has-text-danger"),
        rainbow.classList.remove("has-text-primary"));
    setTimeout(() => {
      // STATE 2 color = 'has-text-success'
      getResult().status == "success"
        ? ((rainbow.innerHTML = getResult().text),
          rainbow.classList.add("has-text-success"),
          rainbow.classList.remove("has-text-danger"))
        : ((rainbow.innerHTML = "STATE 2"),
          rainbow.classList.add("has-text-danger"),
          rainbow.classList.remove("has-text-success"));
      setTimeout(() => {
        // STATE 3 color = 'has-text-success'
        getResult().status == "success"
          ? ((rainbow.innerHTML = getResult().text),
            rainbow.classList.add("has-text-success"),
            rainbow.classList.remove("has-text-danger"))
          : ((rainbow.innerHTML = "STATE 3"),
            rainbow.classList.add("has-text-danger"),
            rainbow.classList.remove("has-text-success"));
      }, 2000);
    }, 2000);
  }, 2000);
}

function getResult() {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  if (num > 5) {
    return {
      status: "success",
      text: num,
    };
  } else {
    return {
      status: "error",
      text: num,
    };
  }
}

// ข้อ 3.3
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้
  const promiseNumber = new Promise((resolve, reject) => {
    num % 2 == 0
      ? resolve((result.innerHTML = `success : ${num} is an even number`))
      : reject((result.innerHTML = `Error : ${num} is not an even number`));
  });
}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000);
  // return promise
  let status = delay > 500 ? "NOTPASS!" : "PASS";
  setTimeout(() => {
    console.log(`task ${id}: ${delay}ms ...${status}`);
  }, delay);
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
  const id = [1, 2, 3, 4];
  id.forEach((id) => {
    task(id);
  });
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  return new Promise((resolve, reject) => {
    password == "Cisco" ? resolve(true) : reject(false);
  });

  promisePassword
    .then((value) => {
      return value;
    })
    .catch((error) => {
      return error;
    });
}

function fetchData(password) {
  checkAuth(password)
    .then((value) => {
      alert("รหัสผ่านถูกต้อง");
      const url = "https://api.thecatapi.com/v1/images/search";
      getAPI(
        url,
        (res) => {
          cat.src = res[0].url;
        },
        (res) => {
          console.log(res);
        }
      );
    })
    .catch((error) => {
      alert("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
    });
}

// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
