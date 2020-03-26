## Вопросы:

### Правильное использование БЭМ-сущностей

>какие части макета являются одним и тем же блоком?

* Header - текст слева и кнопки справа
* Footer
* Content box - пустой контейнер с ограниченной максимальной шириной (824px)
* Link - ссылка в футере, ссылка хэш коммита
* Icon text - для мета-информации в карточках истории
* Button - все кнопки
* Text field - все текстовые поля ввода
* Start screen placeholder
* History card - целиком карточка
* Build log

>какие стили относятся к блокам, а какие к элементам и модификаторам?

* Header - к блоку относится расположение элементов внутри, внутри 2 элемента - текст и контейнер для кнопок. Элемент текста может быть primary или secondary в зависимости от модификатора блока.
* Footer - к блоку относится расположение элементов внутри, модификаторов нет. Похоже на то, как сделано в хедере, но объединять не вижу смысла, слишком разные по смыслу элементы.
* Content box - элементов и модификаторов нет
* Link - элементов и модификаторов нет
* Icon text - к стилям блока относятся стиль текста и отступ от левого края элемента до текста. И пусть будет модификатор на иконку.
* Button - к стилям блока относятся скругления границ, дефолтный цвет фона и стиль текста. Модификаторы - на цвет фона, на размер кнопки, на присутствие иконки.
* Text field - к стилям блока относятся границы и их скругление, высота поля, внутренние отступы. К модификаторам относятся наличие крестика для очистки поля, выравнивание текста.
* Start screen placeholder - тут вроде все очевидно
* History card - к стилям блока относятся скругления границ, тень, расположение элементов внутри. Модификаторы на статус билда.
* Build log - тут тоже все очевидно

>где нужно использовать каскады и почему?

* В хедере на кнопке, которая в адаптиве становится без текста, поскольку вне хедера кнопка так делать не обязана
* Для контентного блока на странице build-details, поскольку у него нет внутренних отступов, тогда как во всех остальных случаях они есть

### Консистентность

>какие видите базовые и семантические константы?

* Скругления для карточек (6px) и скругления для интерактивных элементов (4px)
* Совпадающая высота больших кнопок и полей ввода (36px)
* Внутренние боковые отступы больших (20px) и маленьких (13px) кнопок
* Основный (#FFCC00) и второстепенный (#E6E6E6) цвета кнопок
* Основный (#000) и второстепенный (#7F8285) цвета текста
* Цвета статусов сборки (success, running, failed)
* Основный (#000) и второстепенный (#B3B3B3) цвета иконок. Иконка человека почему-то отличается, но я подумаю об этом позже.
* Основной цвет фона (#FFF)
* Основные размеры шрифта - заголовочный H1 (24px), заголовочный H2 (15px), обычный текст (13px).

>какие видите закономерности в интерфейсе?

* Фиксированная максимальная ширина контента
* В адаптиве элементы перемещаются вниз, а кнопки занимают всю ширину экрана
* Хедер не фиксированный, страница будет скроллиться целиком (хотя это мб не очень удобно с точки зрения пользователя)

### Адаптивность

>где видите вариативность данных и как это обрабатываете?

* В первую очередь, это History card. Сообщение коммита, имя автора могут быть слишком длинными. В макете сообщение коммита переносится на след строку, так я и реализую это. А имя автора, если оно будет слишком длинное, обрежу с помощью `text-overflow: ellipsis;` и добавлю атрибут `title` элементу, чтобы была возможность посмотреть имя полностью.
* Заголовок в блоке Header на страницах build history и build details также может быть очень длинным, и это тоже решается переносом текста на след строку.
* Показ кнопки 'Show more' не нужен, если история не слишком длинная. Но тут я это пока никак не обрабатываю.

>какие видите особенности, связанные с размером экрана?

* Для ширины 856px и меньше большинство элементов растягиваются на 100%
* Для mobile многие элементы перестраиваются друг под другом, а кнопки растягиваются во всю ширину экрана
* Также, в мобильном виде скрывается текст в кнопках в блоке Header, чтобы оставить больше места заголовку, но при этом не урезать функциональность

>что еще повлияло на вашу вёрстку?

* Желание уделять внимание деталям
* Желание сделать максимально просто

>По каждому пункту кратко напишите принципы/правила, которыми вы руководствуетесь. Укажите места макета, которые их иллюстрируют. Примените эти правила в своей вёрстке.

* Желание уделять внимание деталям - мне нравится добавлять небольшие CSS анимации для интерактивных элементов. Это очень просто и сразу добавляет интерфейсу приятности в использовании.
* Желание сделать максимально просто - мне нравится верстать по принципу "необходимо и достаточно"

### Поддержка браузеров:

Две последние версии Chrome, Firefox

### Дополнительно

* Я использовала normalize.css, чтобы сократить свою работу по адаптации к браузерам
* Я использовала storybook, что сверстать сначала отдельно компоненты, а потом из них построить все
* Я использовала 2 брейкпоинта: 856px и 480px - этого показалось достаточно.
* Я оставила один line-height для заголовков первого уровня (в макете они отличались)
* Я ничего не имею против того, чтобы мою работу использовали в качестве примера или антипримера