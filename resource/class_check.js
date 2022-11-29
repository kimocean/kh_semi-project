function class_Check() {

  
  const class_type = document.querySelector("#class_type");
  const class_name = document.querySelector("#class_name");
  const class_teacher = document.querySelector("#class_teacher");
  const class_date = document.querySelector("#class_date");
  const class_time = document.querySelector("#class_time");
  const class_center = document.querySelector("#class_center");
  const class_room = document.querySelector("#class_room");
  
  if(class_type.value == "선택") {
    alert("수업 종류를 선택하세요.");
    class_type.focus();
    return false;
  }

  if(class_name.value == "") {
    alert("수업 이름을 입력하세요.");
    class_name.focus();
    return false;
  }

  if(class_teacher.value == "") {
    alert("강사명을 입력하세요.");
    class_teacher.focus();
    return false;
  }

  if(class_date.value == "") {
    alert("수업 일자를 선택하세요.");
    class_date.focus();
    return false;
  }
  
  if(class_time.value == "시간") {
    alert("수업 시간을 선택하세요.");
    class_time.focus();
    return false;
  }
  
  if(class_center.value == "담당 센터") {
    alert("담당 센터를 선택하세요.");
    class_center.focus();
    return false;
  }
  
  if(class_room.value == "강의실") {
    alert("강의실을 선택하세요.");
    class_room.focus();
    return false;
  }
  


}
