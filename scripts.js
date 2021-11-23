let htmlEl = document.querySelector('html')[0]

let body = document.querySelector('body')
let header = document.querySelectorAll('.header')
let followerCount = document.querySelector('.follower-count')
let darkToggle = document.querySelector('.slider')
let darkText = document.querySelector('.dmode-text')
let card = document.querySelectorAll('.card')
let username = document.querySelectorAll('.username')
let followCount = document.querySelectorAll('.follow-count')
let followerTag = document.querySelectorAll('.follower-tag')
let oviewCategory = document.querySelectorAll('.oview-category')
let oviewValue = document.querySelectorAll('.value')

darkToggle.addEventListener('click', () => {
    body.classList.toggle('body-dark')
    header.forEach(e => {e.classList.toggle('header-dark')})
    followerCount.classList.toggle('follower-count-dark')
    darkText.classList.toggle('dmode-text-dark')
    card.forEach(e => { e.classList.toggle('card-dark') })
    username.forEach(e => { e.classList.toggle('username-dark')})
    followCount.forEach(e => { e.classList.toggle('follow-count-dark') })
    followerTag.forEach(e => { e.classList.toggle('follower-tag-dark') })
    oviewCategory.forEach(e => { e.classList.toggle('oview-category-dark') })
    oviewValue.forEach(e => {e.classList.toggle('value-dark')})
})
