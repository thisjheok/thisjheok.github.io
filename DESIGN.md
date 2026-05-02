# design.md

## 1. Design Goal

이 웹사이트는 2000년대 초반 Apple Store / 포털형 웹사이트 감성을 기반으로 한다.

핵심 방향은 다음과 같다.

- 2000년대 초반 웹사이트 특유의 고정폭 레이아웃
- 상단 글로벌 내비게이션 바
- 좌측 카테고리 사이드바
- 중앙 메인 콘텐츠 영역
- 선택적으로 우측 보조 패널 영역
- 회색, 흰색, 연한 파란색 중심의 차분한 색상
- 얇은 테두리, 박스형 UI, 작은 폰트
- 그라디언트, bevel, inset border를 활용한 초기 웹 UI 감성
- 정보가 카드/박스 단위로 정리된 레이아웃

전체적인 느낌은 최신 SaaS 대시보드가 아니라, 2004~2006년 사이의 Apple Store, 포털 사이트, 소프트웨어 다운로드 사이트에 가깝게 구성한다.

---

## 2. Layout Structure

기본 레이아웃은 다음 구조를 따른다.

```txt
[ Page Wrapper - Fixed Width ]

[ Top Global Navigation ]
[ Optional Sub Navigation ]

[ Main Layout ]
  [ Left Sidebar ] [ Main Content ] [ Right Sidebar - optional ]

[ Footer ]