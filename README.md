# kh_semi-project

# TerrGYM

#### kh정보교육원 팀 프로젝트
<p>
헬스장 회원/트레이너 관리 웹 사이트입니다. <br />
회원은 본인의 회원권을 확인하거나 구매할 수 있고, 헬스장 관리자는 트레이너와 회원의 정보를 조회, 수정할 수 있습니다.
</p>

## Description
- #### 개발 기간　　| 2022.07.19 ~ 22.08.25 (약 6주)
- #### 참여 인원　　| 4명
- #### 프로젝트설계 | 📗 <a href="https://docs.google.com/spreadsheets/d/1D0lDAN88kWvtd7l0krpHjMsW0LgO0Te_2Xc4S7comK0/edit?usp=sharing">Google Sheets </a><br />
  > ###### 요구사항정의서 & 공정표
- #### 화면정의서　 | 🎨 <a href="https://www.figma.com/file/P51gQAyCREGiiRUaVSaS4O/%EC%84%B8%EB%AF%B8-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1&t=TYoXj8cJKVI1hkGE-1">Figma </a><br />
- #### PPT 　　 | 🔊 <a href="https://www.miricanvas.com/v/11c5jbn">Miricanvas</a><br />
- #### 개발 환경 및 사용기술
    <table>
      <tr align=center>
        <th rowspan="2">개발환경</th>
        <th colspan="3">사용기술</th>
      </tr>
      <tr align=center>
        <th>백앤드</th>
        <th>프론트앤드</th>
        <th>협업툴</th>
      </tr>
      <tr>
        <td>Visual Studio Code</td>
        <td>Firebase</td>
        <td>JavaScript</td>
        <td>GitHub</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>BootStrap 5.2.2</td>
        <td>Whimsical</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>HTML5/CSS</td>
        <td>Figma</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>jQuery</td>
        <td>Slack</td>  
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Discord</td>
      </tr>
    </table>
    
    ![개발환경](https://user-images.githubusercontent.com/101934302/210562991-95f456f6-4bf3-4149-846d-16d5875914c8.PNG)

  
- #### 담당 구현 업무
  - 회원가입
  - 로그인
  - 비밀번호 찾기
  - 수업 일정 구현
  - 공지사항 구현
  - PPT 제작
  
## Implements

## 회원 가입, 로그인, 비밀번호 찾기
  
#### 회원 가입
유효성 검사를 위해 정규식을 사용하였습니다. <br>
관리자 체크박스를 선택하면 관리자 데이터베이스에 저장되고, 그렇지 않을 경우 회원 데이터베이스에 저장됩니다.
  ![회원가입](https://user-images.githubusercontent.com/101934302/211796423-9770b055-4111-4607-b645-678869b504a2.gif)
  
#### 로그인
라디오 버튼을 이용해 해당하는 권한을 선택 후 로그인할 수 있습니다. <br>
fontawesome의 아이콘을 사용하여 입력한 비밀번호를 보고 감출 수 있습니다.
  ![로그인](https://user-images.githubusercontent.com/101934302/211796436-bc054556-f8ba-4157-a522-e8a14bd8da52.gif)
  
#### 비밀번호 찾기
  ![비밀번호 찾기](https://user-images.githubusercontent.com/101934302/211796445-74cc89c3-46c1-46c4-9a20-50bc6b60ce5b.gif)  
  
## 수업 관리

#### 수업 등록
메인 화면의 달력을 통해 선택한 날짜의 수업을 열람할 수 있습니다. <br>
선택하는 담당 센터에 따라 선택할 수 있는 강의실이 달라집니다.
  ![수업등록](https://user-images.githubusercontent.com/101934302/211797927-7a15bf8f-c831-4d07-ba36-6c450884ad7c.gif)

#### 수업 수정
해당 수업을 선택하면 수정이 가능합니다.
  ![수업수정](https://user-images.githubusercontent.com/101934302/211797935-b4146204-d0ee-4620-92a7-6c6e869a0b20.gif)

#### 수업 삭제
  ![수업삭제](https://user-images.githubusercontent.com/101934302/211797943-cdc807b2-3247-4e78-b89f-11d4f36f10de.gif)

## 공지사항 관리

#### 공지사항 등록
수업 관리에서의 공지사항은 등록일 내림차순으로 상위 3개를 보여 줍니다. <br>
  ![공지등록](https://user-images.githubusercontent.com/101934302/211798169-3dc5db59-d4bf-4b69-85a9-cc3b068174a0.gif)

#### 공지사항 수정
공지사항을 등록할 때 작성자의 이메일을 수집하여 현재 로그인한 사용자의 이메일과 같을 경우에만 수정/삭제 버튼을 보여 줍니다.
  ![공지수정](https://user-images.githubusercontent.com/101934302/211798174-61fb44cd-3dc8-484b-857c-0b737c6cccbd.gif)

#### 공지사항 삭제
  ![공지삭제](https://user-images.githubusercontent.com/101934302/211798307-986127f0-3ad6-4fb9-8a6c-acdc17a056a4.gif)
    
---
    
### 와이어프레임
  ![와이어프레임](https://user-images.githubusercontent.com/101934302/210586195-a5f04cd7-129e-4827-a0c7-9be43a3e54f7.PNG)
  ![와이어프레임2](https://user-images.githubusercontent.com/101934302/210586287-b9394c4f-db08-4dbc-b0fc-43adbc985c5b.PNG)

### 요구사항정의서  
  ![요구사항정의서](https://user-images.githubusercontent.com/101934302/210586814-1bbc637c-dbcd-4c19-bf28-7aaa9af470c0.PNG)
  
### 유스케이스 다이어그램
  ![유스케이스다이어그램](https://user-images.githubusercontent.com/101934302/210585990-c0cc7122-7200-4132-939b-adb89541781b.PNG)

### 공정표
  ![공정표](https://user-images.githubusercontent.com/101934302/210585842-895de947-ead5-42db-a3e9-ff8f6ebe38a3.PNG)


