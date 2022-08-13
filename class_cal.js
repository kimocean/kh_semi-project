
      ////////////////// 달력 이벤트 ////////////////////

      let CDate = new Date();
    let today = new Date();
    let selectCk = 0;

    let buildcalendar = function () { // 달력 만드는 함수
      let htmlDates = '';
      let prevLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0); //지난 달의 마지막 날 
      let thisFirst = new Date(CDate.getFullYear(), CDate.getMonth(), 1); //이번 달의 첫쨰 날
      let thisLast = new Date(CDate.getFullYear(), CDate.getMonth() + 1, 0); //이번 달의 마지막 날
      document.querySelector(".year").innerHTML = CDate.getFullYear() + "년";  // year에 년도 출력
      document.querySelector(".month").innerHTML = (CDate.getMonth() + 1) + "월";  //month에 월 출력

      const dates = [];
      if (thisFirst.getDay() != 0) {
        for (let i = 0; i < thisFirst.getDay(); i++) {
          dates.unshift(prevLast.getDate() - i); // 지난 달 날짜 채우기
        }
      }
      for (let i = 1; i <= thisLast.getDate(); i++) {
        dates.push(i); // 이번 달 날짜 채우기 
      }
      for (let i = 1; i <= 13 - thisLast.getDay(); i++) {
        dates.push(i); // 다음 달 날짜 채우기 (나머지 다 채운 다음 출력할 때 42개만 출력함)
      }

      for (let i = 0; i < 42; i++) { // 달력 채우는 포문...인듯? 아마도?
        if (i < thisFirst.getDay()) {
          htmlDates += '<div class="date last">' + dates[i] + '</div>';
        } else if (today.getDate() == dates[i] && today.getMonth() == CDate.getMonth() && today.getFullYear() == CDate.getFullYear()) {
          htmlDates += '<div id="date_' + dates[i] + '" class="date today" onclick="fn_selectDate(' + dates[i] + ');">' + dates[i] + '</div>';
        } else if (i >= thisFirst.getDay() + thisLast.getDate()) {
          htmlDates += '<div class="date next">' + dates[i] + '</div>';
        } else {
          htmlDates += '<div id="date_' + dates[i] + '" class="date" onclick="fn_selectDate(' + dates[i] + ');">' + dates[i] + '</div>';
        }
        // console.log(htmlDates);
      }
      document.querySelector(".dates").innerHTML = htmlDates; // div 안에 날짜 넣기
    }

    function prevCal() {
      CDate.setMonth(CDate.getMonth() - 1);
      buildcalendar();
    }
    function nextCal() {
      CDate.setMonth(CDate.getMonth() + 1);
      buildcalendar();
    }
    
    function fn_selectDate(date) { // 특정 날짜를 클릭하면...
      // console.log("함수 바로 다음 " + date); // 이 데이트는 딱 일만 가져옴
      
      let year = CDate.getFullYear();
      let month = CDate.getMonth() + 1;
      let date_txt = "";
      
      if (CDate.getMonth() + 1 < 10) {
        month = "0" + (CDate.getMonth() + 1);
      }
      if (date < 10) {
        date_txt = "0" + date;
      } else {
        date_txt = date;
      }
      
      // console.log(year + "-" + month + "-" + date_txt);

      if (selectCk == 0) {
        $(".date").css("background-color", "");
        $(".date").css("color", "");
        $("#date_" + date).css("background-color", "red");
        $("#date_" + date).css("color", "white");

      }
      
      // const selectDay = year + "-" + month + "-" + date_txt;
      // return selectDay;
      $("#period_1").text(year + "-" + month + "-" + date_txt);
      
    } // end of fn_selectDate
    
    buildcalendar();
    
    
    document.getElementById('dates').addEventListener('click', () => {
      const refresh = ``;
      $("#click_class_list").html(refresh);
      db.collection("class").orderBy("class_time").get().then((snapshot) => {
        snapshot.forEach((item) => {
          if (item.data().class_date == ($('#period_1').text())) {
            const template = `
              <div class="${item.id}" id="input_class_detail" onclick="window.open('./class_upd.html?id=${item.id}')">
                <span id="span_class_name">[${item.data().class_type}] ${item.data().class_name}</span><br>
                <span id="span_class_time">${item.data().class_time}&nbsp;-&nbsp${item.data().class_time_plus}</span>
                <br>
                <span id="span_class_center">${item.data().class_center}</span>
                <span id="span_class_teacher">${item.data().class_teacher}</span>
                <span id="span_class_room">${item.data().class_room}</span>
              </div>
            `;
            $("#click_class_list").append(template);
          } 

        })
      }) // end of then

    }) // end of eventListener


      ////////////////// 달력 이벤트 ////////////////////