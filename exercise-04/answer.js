// ข้อ4.1
async function getAllUser(){
    //TODO
    // 1. ให้ใช้ Try Catch
    // 2. เรียกใช้ฟังก์ชัน ApiDelay()
    // 3. หากเรียกฟังก์ชันสำเร็จให้ (status: 200) ให้นำ message แสดงในกล่องข้อความ
    // 4. หากเรียกฟังก์ชันไม่สำเร็จ (message: "SERVER ERROR") ให้นำ message แสดงในกล่องข้อความ
    try {
        let result = await ApiDelay();
        TA.innerHTML = result.message;
    } catch (e) {
        console.log(e.message)
        TA.innerHTML = e.message;
    }
    
}

// ข้อ 4.2 
function checkAuth(password) {
      return new Promise((resolve, reject) => {
        password == "In4matioN" ? resolve(true) : reject(false);
      });
}

async function fetchData(password) {
    checkAuth(password).then(async (value) => {
        alert("รหัสผ่านถูกต้อง");
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const image = await response.json()
        cat.src = image[0].url;

    })
}


/* 
    Function สำหรับ TA กับ อาจารย์
    นักศึกษากรุณา อย่าแก้ไข
*/

async function ApiDelay () {
      return new Promise(resolve => {
        setTimeout(() => resolve(_fakeAPI()), 2000)
    })
}

async function _fakeAPI() {
    const user = ["Bank", "Mac", "Takai", "Fluke"]
    
    if(Math.floor(Math.random() * 3) === 1){
        throw new Error("SERVER ERROR")
    }

    return {
        status: 200,
        message:user[Math.floor(Math.random() * 4)]
    }
}
