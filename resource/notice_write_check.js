function notice_write_Check() {
  const notice_title = document.querySelector("#notice_title");
  const notice_content = document.querySelector("#notice_content");

  if(notice_title.value == "") {
    alert("제목을 입력하세요.")
    notice_title.focus();
    return false;
  }

  if(notice_content.value == "") {
    alert("내용을 입력하세요.")
    notice_content.focus();
    return false;
  }

}