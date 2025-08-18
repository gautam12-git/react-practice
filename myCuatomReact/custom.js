
function customRender (reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerText = `${reactElement.text}`
    // domElement.setAttribute('href', reactElement.papaya.href)
    // domElement.setAttribute('target', reactElement.papaya.target)
    // container.appendChild(domElement)



    const domElement = document.createElement(reactElement.type)
    domElement.innerText = `${reactElement.text}`
    for (const prop in reactElement.papaya) {
        domElement.setAttribute(prop, reactElement.papaya[prop])
        
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    papaya: { href: 'https://www.google.com', target: '_blank'},
    text: 'mko daba do google m pauch jaoge' 

}

const mainContainer = document.getElementById('root')
customRender(reactElement, mainContainer);
