# Gravity Project

React + Vite 기반의 웹 프로젝트입니다. 아래 절차만 따르면 다른 개발자가 클론한 뒤 바로 실행할 수 있습니다.

## 요구 사항
- Node.js 18 이상 (권장: LTS)
- npm 9 이상

## 설치 및 실행
1) 저장소 클론 후 프로젝트 루트로 이동합니다.
2) 의존성 설치: `npm install`
3) 개발 서버 실행: `npm run dev`
4) 터미널에 표시되는 로컬/네트워크 주소로 접속합니다. 기본 포트는 5173입니다.

## 자주 쓰는 npm 스크립트
- `npm run dev` : Vite 개발 서버 실행 (HMR)
- `npm run build` : 프로덕션 번들 빌드
- `npm run preview` : 빌드 결과 미리보기 서버
- `npm run lint` : ESLint 검사

## 문제 해결
- `vite: command not found`가 나오면 `npm install`이 제대로 완료되었는지 확인하세요.
- 포트 충돌 시 `npm run dev -- --port <원하는포트>` 형태로 실행할 수 있습니다.
