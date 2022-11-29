function forgotPasswordCheck() {
  const email_form = document.querySelector("#email_form");
  console.log("forgotPasswordCheck 클릭");

  if(email_form.value == "") {
    $("#reset_pw").attr("data-bs-target","");
    $("#reset_pw").attr("data-bs-toggle","");
    alert("이메일을 입력하세요.")
    email_form.focus();
    return false;
  }
}