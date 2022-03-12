let content = document.getElementById('ajax-content')
alert('js')
function fetchContent(el) {
    let view = el.getAttributs('a-vien')
    let folder = el.getAttributs('a-folder')
    fetch('/ajax/${folder}/${view}.html')
    .then(response => {
        let html = response.text()
        return html
    })
    .then(html =>{
        console.log(html)
        content.innerHTML = '<p>OLA MUNDO</p>'
    })

}