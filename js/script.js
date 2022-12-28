const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

console.log(tabContentItems)

//select tab content item

function selectItem(e){
    removeOtherBorder();
    removeShowClass();

    this.classList.add('br-bottom');
    console.log(this.id)
    //Grab item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    console.log(tabContentItem)

    tabContentItem.classList.add('show')
}

function removeOtherBorder () {
    tabItems.forEach(item => item.classList.remove('br-bottom'))
}

function removeShowClass () {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

//listen for tab click

tabItems.forEach(item => item.addEventListener('click', selectItem))