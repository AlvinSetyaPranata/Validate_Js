const validation = new FetchValidation(() => fetch('/ok'))
const form = document.getElementById("register");


form.addEventListener("submit", function(e) {
    e.preventDefault()

    validation.setListener('200', () => alert('Successfull loged in'))
    validation.setListener('400', () => alert('Server Error'))
    validation.setListener('404', () => alert('Server Not Found'))


    validation.fetchApi()
})