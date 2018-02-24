$(document).ready(function () {

    var body = document.getElementById('body');

    function createEcommercePage(myArray) {

        var headerTitle = document.createElement('div');
        var headerDescription = document.createElement('div');
        var header = document.createElement('div');
        var filters = document.createElement('div');
        var mainDiv = document.createElement('div');
        var productsDiv = document.createElement('div');
        var cardDiv = document.createElement('div');
        var closeCard = document.createElement('div');

        header.setAttribute('class', 'header');
        headerTitle.setAttribute('class', 'headerTitle');
        headerDescription.setAttribute('class', 'headerDescription');
        filters.setAttribute('class', 'filters');
        mainDiv.setAttribute('class', 'mainDiv');
        productsDiv.setAttribute('class', 'productsDiv');
        cardDiv.setAttribute('class', 'cardDiv');
        closeCard.setAttribute('class', 'closeCard');

        headerTitle.innerHTML = '<h1> Lorem Ipsum </h1>';
        headerDescription.innerHTML = '<h3 id="filtersButton"> Show Filters </h3>';
        closeCard.innerHTML = '<p> X </p>';

        for (var i = 0; i < myArray.length; i++) {

            var productsGeneralDiv = document.createElement('div');
            var productsImageDiv = document.createElement('div');
            var productsImageInfoDiv = document.createElement('div');
            var productsImageAddDiv = document.createElement('div');
            var productsbannerDiv = document.createElement('div');

            productsGeneralDiv.setAttribute('class', 'productsGeneralDiv');
            productsImageDiv.setAttribute('class', 'productsImageDiv');
            productsImageInfoDiv.setAttribute('class', 'productsImageInfoDiv');
            productsImageAddDiv.setAttribute('class', 'productsImageAddDiv');
            productsbannerDiv.setAttribute('class', 'productsbannerDiv');

            productsbannerDiv.innerHTML = '<p>' + myArray[i].Name + '</p>' + '<p>' + myArray[i].Price + '</p>'
            productsImageAddDiv.innerHTML = '<div id:"addCard"> Add to Card </div>';
            productsImageInfoDiv.innerHTML = '<p>50%</p>'

            productsImageDiv.append(productsImageInfoDiv, productsImageAddDiv);
            productsGeneralDiv.append(productsImageDiv, productsbannerDiv);
            productsDiv.append(productsGeneralDiv);

            if (myArray[i].Discount == 'true') {
                productsImageInfoDiv.style.display = 'flex';
            } else {
                productsImageInfoDiv.style.display = 'none';
            }
        }
        cardDiv.append(closeCard);
        mainDiv.append(productsDiv);
        header.append(headerTitle, headerDescription);
        body.append(header, filters, mainDiv, cardDiv);

    }

    createEcommercePage(data.products);

    $('#filtersButton').on('click', function () {
        $('.filters').toggle(500);
    })

    $('.productsImageAddDiv').on('click', function () {
        $('.cardDiv').css('width', '25%');
        $('.closeCard').css('display', 'block');
    })
    
    $('.closeCard').on('click', function () {
        $('.cardDiv').css('width', '0%');
        $('.closeCard').css('display', 'none');
    })
});
