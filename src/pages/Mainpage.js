import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>
    document.getElementById('root')
);
// ReactDOM~('root'); 이 부분은 App.js파일에서 작성한 코드를 index.html의 아이디가 root인 element에 넣어 달라는 것입니다.

function Mainpage() {
    return (
      <MainContainer>
        <MainWrapper>
            <div> 
                <div data-collapse="small" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav-bar w-nav">
                    <div class="nav-container w-container">
                    <div class="logo-div">
                        <a href="../index.html" class="nav-logo w-inline-block"><img src="../images/002.png" width="178" alt="" sizes="(max-width: 479px) 66vw, 178px" srcset="../images/002-p-500.png 500w, ../images/002-p-800.png 800w, ../images/002.png 800w" class="logo"></a>
                    </div>
                        <nav role="navigation" class="nav-content w-nav-menu">
                        <div class="search-banner">
                        
                        <div class="search-section">
                            <form action="/search" class="search w-form">
                            <input type="search" class="search-bar w-input" autofocus="true" maxlength="256" name="query" placeholder="검색어를 적고 엔터를 눌러주세요" id="search" required=""><input type="submit" value="Search" class="hidden w-button"></form></div>
                        </div>
                        <div class="nav-menu">
                        <a href="../newfolder/resources.html" class="nav-link w-nav-link">홈으로 돌아가기</a>
                        <a href="../newfolder/resources.html" class="nav-link w-nav-link">마이페이지</a><button class="nav-link" data-wf-user-logout="로그아웃" data-wf-user-login="로그인" type="button">로그아웃</button>
                        </div>
                        <div class="nav-cta-button-container">
                        <a href="../sign-up.html" class="nav-link cta-button w-nav-link">무료 회원가입</a>
                        </div>
                    </nav>
                    <div class="menu-button w-nav-button"><img src="../images/Menu-Icon.svg" loading="lazy" width="24" alt="" class="menu-icon"></div>
                    </div>
                </div>
                <div class="section light-color-gradient wf-section">
                    <div class="container">
                    <div class="w-layout-grid hero-grid">
                        <div class="text-box _500px">
                        <h1 class="heading h1">당신의 약을 알아보세요.</h1>
                        <p class="paragraph large">반드시 의사 또는 약사와 의약품 복용에 대한 진료를 받으시고 결정하세요.</p>
                        <div class="spacer _16"></div>
                        <a href="../sign-up.html" class="button w-button">의약품 상세검색</a>
                        </div><img src="../images/020.png" loading="eager" width="337" id="w-node-_1f971b8f-d935-4208-4f58-63e5ab11cedb-f5f87cee" srcset="../images/020-p-500.png 500w, ../images/020.png 500w" sizes="(max-width: 767px) 120px, 337px" alt="" class="hero-illustration">
                    </div>
                    </div>
                </div>
                <div class="section wf-section">
                    <div class="container">
                    <div class="section-top">
                        <h2 class="heading h3">의약품 찾기</h2>
                        <a href="../newfolder/resources.html" class="button light mobile-hidden w-button">See All Resources</a>
                    </div>
                    </div>
                </div>
                <div class="footer wf-section">
                    <div class="footer-container w-container">
                    <div class="w-layout-grid footer-grid">
                        <div id="w-node-b8d7be4a-ce45-83ab-5947-02d204c8bff0-cf3fcb86" class="footer-logo-block">
                        <a data-ix="logo" href="../index.html" class="footer-logo w-nav-brand"><img src="../images/pill-finder-로고-2-1ssaf.png" width="204" alt=""></a>
                        <div class="spacer _16"></div>
                        <div class="paragraph small">© 2023 Pill Finder projecct team. All Rights Reserved.</div>
                        <p class="paragraph small">Built by. Kang-too,Kim-garam,<br> Son-donghwan, Jeon-Hyeseong</br></p>
                        </div>
                    </div>
                    </div>
                </div>
                <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=640e9bbd4d74997d100d75c6" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
                <script src="../js/webflow.js" type="text/javascript"></script>
            </div>  
        </MainWrapper>
    </MainContainer>
  );
}

export default Mainpage;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #d3b9eb;
`;

const MainWrapper = styled.div`
  width: 450px;
  height: 600px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
  }
`;
