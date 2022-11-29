document.querySelector("#nav_logout").addEventListener('click', (e) => {
  firebase.auth().signOut().then(() => {
  alert("로그아웃 완료")
  window.location.href = "./login.html";
}).catch((error) => {
  console.log(error);
});

})