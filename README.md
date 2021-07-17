# КОМПОНЕНТ ДЛЯ ВЫБОРА РЕГИОНОВ

## [DEMO on GitHub Pages](https://rrev4ge.github.io/region-selector)

## ![demo_screenshot](./public/region_selector_(desktop_demo).png)

## ТЗ на компонент для выбора регионов

### Примеры


Компонентов с такой функциональностью я не видел (логично, иначе бы
такой задачи не возникло). Самое близкое, что я нашел:
* https://github.com/DominicTobias/react-image-crop#readme 
* https://fengyuanchen.github.io/cropperjs/


### Задача

Разработать компонент для выбора/изменения нескольких прямоугольных регионов в области.

Необходимая фунциональность:

* создать новый регион:
  * левая кнопка нажимается за пределами существующего региона
  * мышь передвигается. при этом пунктиром рисуется прямоугольник,
    соответствующий будущим границам. Если указатель выходит за пределы
    компонента, регион ограничивается границами компонента (регион не может
    быть больше изначально заданного размера)
  * если пользователь не отпуская левую кнопку нажимает правую
    или escape, операция отменяется
  * когда пользователь отпускет левую кнопку, создается регион с углами в начальной 
    и конечной точке
* переместить регион: 
  * левая кнопка нажимается внутри существующего региона
  * мышь передвигается. при этом регион следует за мышью. Регион не может покинуть 
  границ компонента.
  * если в этот момент нажимается правая кнопка, операция отменяется.
  * левая кнопка отпускается. Регион окончательно передвиагется в новое место.
* изменить размер
  * левая кнопка нажимается в пределах "квадратиков" в углах региона или на серединах
    его сторон
  * мышь передвигаетя, при этом меняется размер региона. Регион не может выйти за пределы
    компонента
  * если нажимается правая кнопка, операция отменяется
  * левая кнопка отпускается. Размер региона окончательно меняется
* удалить регион -- нажатие правой кнопки в пределах региона.


### Пример вызова
```jsx
<RegionSelector 
    width="100"
    height="100"  
    regions=[{x:10, y:10, width: 20, height:20}, {x:50, y:50, width: 30, height:25}]
    onRegionChange=onRegionChange
/>
```