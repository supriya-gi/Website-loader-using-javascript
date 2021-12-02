var loader = document.getElementsByClassName('spinner')[0]
var webpage = document.getElementsByClassName('page_content')[0]

setTimeout(function () {

    loader.classList.add('hide')
    webpage.classList.add('show')

}, 1000)