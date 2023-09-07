const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContents = Array.from(document.querySelectorAll('.tab__content'))

tabs.addEventListener('click', function() {
    for(let tab of tabs) {
    if (tab.contains('.tab_active')) {
        tab.remove('.tab_active')
    } else {
        tab.add('.tab_active')
    }
}
})

tabsContents.addEventListener('click', function() {
    for(let tabContents of tabsContents) {
    if(tabContents.contains('.tab__content_active')) {
        tabContents.remove('.tab__content_active')
    } else {
        tabContents.add('.tab__content_active')
    }
}
})