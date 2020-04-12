# Тесты

## Модульные тесты

**Логические блоки приложения:**

* Клиентская часть
    * Точка входа в приложение `client/src/index.js`
    * Компоненты `client/src/*.blocks`
    * Страницы `client/src/pages`
    * Хранилище `client/src/store`
    * Методы вызова API `client/src/api`
    * Компоненты Storybook `client/src/stories`
    * Утилиты `client/src/utils`
    * Документация `client/docs`

* Серверная часть
    * Точка входа в приложение `server/server.js`
    * Роутинг `server/routes/api.js`
    * Контроллеры `server/controllers`
    * Доступ к хранилищу `server/api`
    * Сервисы `server/services`
    * Утилиты `server/utils`
    * Документация API `server/swagger.json`

**Сценарии модульных тестов:**

Что тестируем? Какой сценарий? Что будет результатом?

* Клиентская часть
    * Главная страница возвращает историю билдов или пустую страницу в зависимости от того, заданы ли настройки в сторе
    * Страница истории билдов запрашивает билды при первом рендере
    * Кнопка Run build на странице истории билдов открывает диалог для ввода хеша коммита
    * Сабмит корректно заполненной формы для запуска билда диспатчит экшен с верными параметрами
    * Сабмит корректно заполненной формы настроек репозитория диспатчит экшен с верными параметрами
    * Страница билда запрашивает данные и лог билда при первом рендере
    * Утилиты для date работают корректно

* Серверная часть
    * CachedLog работает корректно
    * cloneRepo работает корректно
    * getCommitAuthorName работает корректно
    * getCommitMessage работает корректно
    * storageMethods делают запросы к хранилищу с корректными параметрами