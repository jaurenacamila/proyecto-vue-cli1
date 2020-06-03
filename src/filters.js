import Vue from 'vue'

Vue.filter('reverse', function(value){
    return value.split('').reverse().join('')
})

Vue.filter('aMayuscula', function(value){
    return value.toUpperCase()
})

Vue.filter('wrap', function(value, strBegin, strEnd){
    return strBegin + value + strEnd
})