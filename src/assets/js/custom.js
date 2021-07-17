import jquery from "jquery";

export default (window.$ = window.jQuery = jquery);

$(function(){
    setTimeout(() => {
        alert('jQuery worked!.');
    }, 5000);
    
});