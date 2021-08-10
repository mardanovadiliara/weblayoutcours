// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758552263891424,37.601360083094136],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });

        var myPlacemark = new ymaps.Placemark([55.758333414732974,37.6011094651502], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.svg',
          iconImageSize: [20, 20],

      });

      myMap.geoObjects.add(myPlacemark);
    }

new JustValidate('.callback', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },

    tel: {
      required: true,
      minLength: 10,
      maxLength: 10
    }
  },

  messages: {
    name: 'Недопустимый формат',
    tel: 'Введите телефон'
  }
});
