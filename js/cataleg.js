$(document).ready(function(){
    
    var body = document.getElementById('body');
    
    function createEcommercePage(myArray){
        var headerTitle = document.createElement('div');
        var headerDescription = document.createElement('div');
        var header = document.createElement('div');
        var mainDiv = document.createElement('div');
        var productsDiv = document.createElement('div');
        
        header.setAttribute('class', 'header');
        headerTitle.setAttribute('class', 'headerTitle');
        headerDescription.setAttribute('class', 'headerDescription');
        mainDiv.setAttribute('class', 'mainDiv');
        productsDiv.setAttribute('class', 'productsDiv');
        
        headerTitle.innerHTML = '<h1> Lorem Ipsum </h1>';
        headerDescription.innerHTML = '<h3> Show Filters </h3>';
        
        for (var i = 0; i < myArray.length; i++) {
            
            var productsGeneralDiv = document.createElement('div');
            var productsImageDiv = document.createElement('div');
            var productsImageInfoDiv = document.createElement('div');
            var productsImageAddDiv = document.createElement('div');
            var productsbannerDiv = document.createElement('div');
            
            productsGeneralDiv.setAttribute('class','productsGeneralDiv');
            productsImageDiv.setAttribute('class','productsImageDiv');
            productsImageInfoDiv.setAttribute('class','productsImageInfoDiv');
            productsImageAddDiv.setAttribute('class','productsImageAddDiv');
            productsbannerDiv.setAttribute('class','productsbannerDiv');
            
            productsbannerDiv.innerHTML = '<p>' + myArray[i].Name + '</p>' + '<p>' + myArray[i].Price + '</p>'
            productsImageAddDiv.innerHTML = '<div> Add to Card </div>';
            productsImageInfoDiv.innerHTML = '<p>50%</p>'
            
            productsImageDiv.append(productsImageInfoDiv,productsImageAddDiv);
            productsGeneralDiv.append(productsImageDiv, productsbannerDiv);
            productsDiv.append(productsGeneralDiv);
            
            if(myArray[i].Discount == 'true'){
            productsImageInfoDiv.style.display = 'flex';
           }else{
                productsImageInfoDiv.style.display = 'none';
           }
        }
        mainDiv.append(productsDiv);
        header.append(headerTitle, headerDescription);
        body.append(header, mainDiv);
        
    }
    
    createEcommercePage(data.products)
    
});