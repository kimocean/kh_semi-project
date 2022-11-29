function signUp_check() {

  
  const mem_email_left = document.querySelector("#mem_email_left");
  const mem_email_right = document.querySelector("#mem_email_right");
  const mem_pw = document.querySelector("#mem_pw");
const mem_pw_check = document.querySelector("#mem_pw_check");
const mem_name = document.querySelector("#mem_name");
const mem_tel = document.querySelector("#mem_tel");
const mem_adr_left = document.querySelector("#mem_adr_left");
const mem_adr_right = document.querySelector("#mem_adr_right");
const mem_birth = document.querySelector("#mem_birth");
const mem_gubun = document.querySelector("#mem_gubun");

if(mem_email_left.value == "") {
  alert("이메일을 입력하세요.")
  mem_email_left.focus();
  return false;
}

const mem_email_test = /^[a-zA-Z]|[a-z0-9]{4,50}$/g;

if(!mem_email_test.test(mem_email_left.value)) {
  alert("이메일은 영문, 숫자 조합만 입력 가능합니다.")
  mem_adr_left.focus();
  return false;
} // 이메일 영어 숫자 체크

if(mem_email_right.value == "") {
  alert("도메인을 입력하세요.")
  mem_email_right.focus();
  return false;
}

////////////// 이메일 /////////////

if(mem_pw.value == "") {
  alert("비밀번호를 입력하세요.")
  mem_pw.focus();
  return false;
}

if(mem_pw_check.value == "") {
  alert("비밀번호 확인이 필요합니다.")
  mem_pw_check.focus();
  return false;
}

const mem_pw_test = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,20}$/;

if(!mem_pw_test.test(mem_pw.value)) {
  alert("비밀번호는 영문, 숫자, 특수문자 조합으로 6~20자리까지 입력 가능합니다.")
  mem_pw.focus();
  return false;
} // 비밀번호 영어 숫자 특문 자리수 체크

if(mem_pw.value !== mem_pw_check.value) {
  alert("비밀번호가 일치하지 않습니다.")
  mem_pw_check.focus();
  return false;
} // 비밀번호 - 비밀번호 확인 불일치

////////////// 비밀번호 /////////////

if(mem_name.value == "") {
  alert("이름을 입력하세요.")
  mem_name.focus();
  return false;
}

////////////// 이름 /////////////

if(mem_tel.value == "") {
  alert("전화번호를 입력하세요.")
  mem_tel.focus();
  return false;
}

if(!(9 <= mem_tel.value.length && mem_tel.value.length <= 13)) {
  alert("전화번호를 다시 입력해 주세요.")
  mem_tel.focus();
  return false;
} // 전화번호 자릿수

////////////// 전화번호 /////////////

if(mem_adr_left.value == "") {
  alert("주소를 입력하세요.")
  mem_adr_left.focus();
  return false;
}

if(mem_adr_right.value == "") {
  alert("상세 주소를 입력하세요.")
  mem_pw.focus();
  return false;
}

////////////// 주소 /////////////

if(mem_birth.value == "") {
  alert("생년월일을 입력하세요.")
  mem_birth.focus();
  return false;
}

////////////// 생년월일 /////////////

} // end of function signUp check