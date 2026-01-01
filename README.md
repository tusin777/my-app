# Урок 1.5. JSX: синтаксис и правила

## Теория-резюме (по видео)

- JSX выглядит как смесь HTML и JavaScript, но на самом деле это чистый JavaScript и синтаксический сахар для создания React-элементов.
- В JSX можно вставлять любые валидные JS-выражения в фигурных скобках `{}`.
  - Пример из урока: строковая переменная `name`, элемент `element = <h1>Алексей и {name} - друзья</h1>`, выражение `{3 + 8}`.
- Можно создавать отдельные компоненты (пример: `Email`) и использовать их в `App`.

### Правила JSX из урока

1. **Все теги закрываются**
   - Даже `img`, `input`, `br` — только в виде `<img />`, `<input />`, `<br />`. Иначе будет ошибка.
2. **Имена свойств в camelCase**
   - Например, в `label` вместо `for` используется `htmlFor`.
3. **Списки и ключи**
   - Рендерим массив через `map`. У каждого элемента списка должен быть `key`.
4. **Условный рендеринг**
   - `undefined`, `null`, `true/false` не отображаются.
   - Используем `condition && <Component />`.
5. **Inline-стили**
   - Стили задаются объектом: `style={{ color: "blue", fontSize: 20 }}`.
   - Свойства — camelCase, значения могут быть числом (без кавычек).
6. **Безопасность**
   - JSX экранирует HTML-теги.
   - Для принудительного HTML используется `dangerouslySetInnerHTML={{ __html: ... }}`.
7. **Один родительский элемент**
   - Весь JSX должен быть в одной обертке.
   - Можно использовать фрагмент `<>...</>`.
8. **Булевы атрибуты**
   - `checked` и `disabled` можно писать без значения (это `true`).
   - Для `false` явно писать `checked={false}`.

### Дополнительно из урока

- Есть онлайн-конвертер HTML -> JSX, который исправляет закрытие тегов и обертки.
- В конце урока автор делает коммит и push.  
  `node_modules` не пушится (есть в `.gitignore`).  
  После клонирования проекта нужно выполнить `npm install` (или `npm i`).

## Практическое ТЗ (повторяем за автором)

0. Ветка урока

- Создать ветку `React_Lesson_1.5` от `main` и работать в ней.

1. Встраивание выражений (App)

- Открыть `src/components/App/App.jsx`.
- Оставить базовые элементы из предыдущего урока: `<h1>Привет, React!</h1>` и `<p>Это мой первый React-проект с Vite</p>`.
- Внутри `App` объявить переменную `name` со строкой `Вася Пупкин`.
- Создать переменную `element` и сохранить туда JSX: `<h1>Алексей и {name} - друзья</h1>`.
- В JSX вставить `{element}` сразу после базового абзаца.
- Добавить `<span>` с выражением `{3 + 8}`.

2. Создать компонент `Email`

- Файл: `src/components/Email.jsx`.
- Именованный экспорт `Email`.
- Проверка email через regex, возврат email или `null`.
- Порядок действий:
  1. В папке `src/components` создать файл `Email.jsx`.
  2. Файл лежит прямо в `src/components`, без отдельной папки.
  3. Объявить именованный экспорт через `export function Email() { ... }`.
  4. Внутри функции создать переменную `email` со строкой `alexei@gmail.com`.
  5. Создать переменную `emailRegex` и записать регулярное выражение:
     `/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/`
  6. Создать переменную `check` и вызвать `emailRegex.test(email)`.
  7. Вернуть `email`, если `check` равен `true`, иначе вернуть `null`.

3. Подключить `Email` в App

- В `src/components/App/App.jsx` добавить импорт `Email` из `../Email`.
- В JSX вставить `<Email />` (после блока с выражениями).

4. Правило закрытия тегов

- В `App.jsx` добавить: `<br />`, `<input type="checkbox" />`, `<img src="" alt="" />`, `<br />`.
- Убедиться, что все теги закрыты через `/>`.

5. Правило camelCase для атрибутов

- В `App.jsx` добавить `<label htmlFor="email"></label>`.

6. Списки и ключи (MyName)

- Открыть `src/components/MyName/MyName.jsx`.
- Создать массив `cats`: `["Лев", "Тигр", "Пума"]`.
- Заменить вывод на список `<ul>` и сделать `cats.map(...)` с `<li key={cat}>`.

7. Условный рендеринг

- В `App.jsx` объявить `condition = true`.
- Обернуть вывод `MyName` в `{condition && <MyName />}`.

8. Inline-стили

- В `MyName.jsx` добавить inline-стиль для `<ul>`: `color: "blue"`, `fontSize: 32`, `backgroundColor: "green"`.

9. Безопасность (dangerouslySetInnerHTML)

- В `App.jsx` создать переменную `response` со строкой `"<div>alert('Вы взломаны!')</div>"`.
- В JSX добавить `<div dangerouslySetInnerHTML={{ __html: response }}></div>` сразу после `{element}`.

10. Обертка (фрагмент)

- Убедиться, что весь JSX в `App` обернут в один родительский элемент.
- Использовать фрагмент `<>...</>` (как в видео).

11. Булевы атрибуты

- Для `<input>` добавить `checked={false}`.
- Добавить кнопку `<button disabled>Просто кнопка</button>`.

4. Git

- Сделать коммит и push в GitHub.
- Сообщение коммита: `Урок 1.5`.

## Проверка

- `App.jsx`, `Email.jsx`, `MyName.jsx` совпадают с кодом из раздела "Сверка после выполнения".
- В браузере показываются: заголовок, текст, список котов, email (если валиден), результат `{3 + 8}`.
- `MyName` выводится только если `condition = true`.
- Все теги закрыты (`br`, `input`, `img`).
- Используются `htmlFor`, `checked`, `disabled`, `dangerouslySetInnerHTML`.
- Коммит `Урок 1.5` сделан и отправлен в GitHub.

## Сверка после выполнения (не читать заранее)

**`src/components/App/App.jsx`:**

````jsx
import { MyName } from "../MyName/MyName";
import { Email } from "../Email";
import "./App.css";

function App() {
  const name = "Вася Пупкин";
  const element = <h1>Алексей и {name} - друзья</h1>;
  const condition = true;

  const response = "<div>alert('Вы взломаны!')</div>";

  return (
    <>
      <h1>Привет, React!</h1>
      <p>Это мой первый React-проект с Vite</p>
      {element}
      <div dangerouslySetInnerHTML={{ __html: response }}></div>
      <span>{3 + 8}</span>
      {condition && <MyName />}

      <Email />
      <br />
      <input type="checkbox" checked={false} />
      <img src="" alt="" />
      <br />
      <label htmlFor="email"></label>
      <button disabled>Просто кнопка</button>
    </>
  );
}

export default App;

**`src/components/Email.jsx`:**

```jsx
export function Email() {
  const email = "alexei@gmail.com";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = emailRegex.test(email);

  return check ? email : null;
}
````

**`src/components/MyName/MyName.jsx`:**

```jsx
import "./MyName.css";

export function MyName() {
  const cats = ["Лев", "Тигр", "Пума"];
  return (
    <ul style={{ color: "blue", fontSize: 32, backgroundColor: "green" }}>
      {cats.map((cat) => (
        <li key={cat}>{cat}</li>
      ))}
    </ul>
  );
}
```
