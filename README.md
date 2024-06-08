# React Headless UI 와 Polymorphic Components

이 프로젝트는 React 환경에서 Headless UI와 Polymorphic Component 사용하는 방법을 보여줍니다.

**유연하고 재사용 가능하며 접근성 있는 컴포넌트**를 개발하여 어느 프로젝트에서든 사용할 수 있는 것을 목표로 합니다.

## Project 구조

```plaintext
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.stories.tsx
│   │   ├── Card.test.tsx
│   │   └── index.ts
│   ├── FormControl/
│   │   ├── FormControl.tsx
│   │   ├── FormControl.stories.tsx
│   │   ├── FormControl.test.tsx
│   │   └── index.ts
│   ├── Text/
│   │   ├── Text.tsx
│   │   ├── Text.stories.tsx
│   │   ├── Text.test.tsx
│   │   └── index.ts
│   ├── Disclosure/
│   │   ├── Disclosure.tsx
│   │   ├── Disclosure.stories.tsx
│   │   ├── Disclosure.test.tsx
│   │   ├── useDisclosure.ts
│   │   └── index.ts
│   └── index.ts
├── styles/
│   └── global.css
├── hooks/
│   ├── useDisclosure.ts
│   └── index.ts
├── utils/
│   └── index.ts
└── App.tsx
```

## 컴포넌트

### Button

다양한 HTML 요소로 렌더링될 수 있는 폴리몰픽 버튼 컴포넌트입니다. 기본적으로 `button` 요소로 렌더링되지만, `as` prop을 통해 다른 요소로 변경할 수 있습니다.

**사용 예시**

```javascript
import Button from "./Button";

<Button as="a" href="https://example.com">
  링크 버튼
</Button>;
```

### Card

다양한 HTML 요소로 렌더링될 수 있는 폴리모픽 카드 컴포넌트입니다. 기본적으로 div 요소로 렌더링되지만, as prop을 통해 다른 요소로 변경할 수 있습니다.

**사용 예시**

```javascript
import Card from "./Card";

<Card as="section">
  <h2>카드 제목</h2>
  <p>카드 내용</p>
</Card>;
```

### FormControl

다양한 HTML 요소로 렌더링될 수 있는 폴리모픽 폼 컨트롤 컴포넌트입니다. 기본적으로 input 요소로 렌더링되지만, as prop을 통해 다른 요소로 변경할 수 있습니다.

**사용 예시**

```javascript
import FormControl from "./FormControl";

<FormControl as="textarea" name="description" />;
```

### Text

다양한 HTML 요소로 렌더링될 수 있는 폴리모픽 텍스트 컴포넌트입니다. 기본적으로 span 요소로 렌더링되지만, as prop을 통해 다른 요소로 변경할 수 있습니다.

```javascript
import Text from "./Text";

<Text as="p">단락 텍스트</Text>;
```
