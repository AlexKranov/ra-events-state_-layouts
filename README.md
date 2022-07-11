## Расположение товаров

Вам необоходимо сделать приложение для отображение товаров в интернет-магазине. 
Заказчик хочет, чтобы пользователь мог увидеть товары в виде карточек или в виде списка, в зависимости от того, какое расположение выберет пользователь.

### Описание проекта

Реализуйте компонент Store, который управляет состоянием приложения, (хранит список товаров в атрибуте products).

Иконка разметки, которая указывает на переключение между типами расположения товаров реализована в компоненте без состояния IconSwitch, которому от Store мы передаем два свойства:

* icon - название иконки, которую хотим показать. Название иконки соответствует названию класса из библиотеки material icons. В нашем случае это - либо view_list, либо view_module.
* onSwitch() - обработчик события, который реагирует на нажатие пользователем на иконку.

Сами товары отображаются в компонентах без состояния CardsView или ListView.

Компоненту CardsView от Store мы передаем свойство cards - массив с данными, каждый элемент из которого затем уже отображается с помощью карточки товара ShopCard.

Т.е. CardsView отображает много карточек ShopCard. На один товар - одна карточка ShopCard.

Компоненту ListView от Store мы передаем всего одно свойство items - массив с данными, каждый элемент из которого затем уже отображается с помощью ShopItem для товаров, которые мы хотим отобразить.

Т.е. ListView отображает много ShopItem. На один товар - один ShopItem.

Чтобы компонент Store мог реагировать на выбор пользователем вида разметки, в класс Store необходимо добавить состояние (state).

Ваша задача:

* установить состояние выбранного типа разметки в обработчике события который Store передает в свойство onSwitch компонента IconSwitch
* из компонента Store передать правильную иконку в свойство icon компонента IconSwitch
* в компоненте Store отобразить товары в компоненте CardsView или ListView соответсвенно состоянию компонента App
