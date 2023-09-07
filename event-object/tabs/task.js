const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContents = Array.from(document.querySelectorAll('.tab__content'))

tabs.addEventListener('click', function() {
    for(let tab of tabs) {
    if (tab.classlist.contains('.tab_active')) {
        tab.classlist.remove('.tab_active')
    } else {
        tab.classlist.add('.tab_active')
    }
}
})

tabsContents.addEventListener('click', function() {
    for(let tabContents of tabsContents) {
    if(tabContents.classlist.contains('.tab__content_active')) {
        tabContents.classlist.remove('.tab__content_active')
    } else {
        tabContents.classlist.add('.tab__content_active')
    }
}
})