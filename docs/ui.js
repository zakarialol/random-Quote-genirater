// selectin the elements
const dataInfo = document.querySelector('[data-info="quote"]')
const dataTitle = document.querySelector('[data-title ="title"]')
export function uiFunc(data){
    dataInfo.textContent = data.quote
    dataTitle.textContent = data.author
}
