function mapToSquare(input) {
  // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
  return input.map((x) => x ** 2);
}

function convertTemperature(input) {
  // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
  function fah_to_celsius(fah) {
    let cel = ((fah - 32) * 5) / 9;
    return Number(cel.toFixed(1));
  }

  const answer = input.map((data) => {
    const dataCon = {};

      dataCon.date = data.date;
      dataCon.temperature = fah_to_celsius(data.temperature);

      return dataCon;
  });
    
  return answer;
}

function filterEvenNumber(input) {
  // TODO: filter input เอาเลขคู่เท่านั้น
    return input.filter(number => number % 2 ==0);
}

function filterAgeRange(input) {
  // TODO: กรอง input.people ตามช่วงอายุ
    return input.people.filter((age) => age.age >= input.min && age.age <= input.max);
}

function removeByFilter(input) {
  // TODO: ลบ Object ใน Array ด้วยการ filter
    return input.people.filter((id) => id.id != input.removeId);
}

function replaceBySplice(input) {
  // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array
  // เรียงลำดับตัวเลขให้ถูกต้อง
    input.splice(4, 1, 4);
    return input;
}
