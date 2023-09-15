const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContents = Array.from(document.querySelectorAll('.tab__content'))

// tabs.forEach(tab => {
//     tab.addEventListener('click', function() {
//             tab.classList.remove('tab_active')
//     })
//           tab.classList.add('tab_active')
//         })

// tabsContents.forEach(tabContent => {
//     tabContent.addEventListener('click', function() {
//         if(tabContent.classList.contains('tab__content_active')) {
//             tabContent.classList.remove('tab__content_active')
//         } else {
//             tabContent.classList.add('tab__content_active')
//         }
//     })
// })

function selectTab() {
    tabs.forEach(tab => {
        tab.classList.remove('tab_active')
    })

    this.classList.add('tab_active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', selectTab)
})

function showContent() {
    tabsContents.forEach(tabContent => {
        tabContent.classList.remove('tab__content_active')
})

this.classList.add('tab__content_active')
}

tabsContents.forEach(tabContent => {
    tabContent.addEventListener('click', showContent)
})
}