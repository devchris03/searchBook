document.addEventListener('DOMContentLoaded', function() {
    // asigna variables
    const result = document.querySelector('#result');
    const categoria = document.querySelector('#categoria');
    const idioma = document.querySelector('#idioma');
    const autor = document.querySelector('#autor');
    const año = document.querySelector('#año'); 
    const paginas = document.querySelector('#paginas'); 
    const editorial = document.querySelector('#editorial'); 
    const filter = document.querySelector('#filter');
    let form = {
    }

    
    let resultList = books;

    // agrega eventos
    categoria.addEventListener('change', seleccionar)
    idioma.addEventListener('change', seleccionar);
    autor.addEventListener('change', seleccionar);
    año.addEventListener('change', seleccionar);
    paginas.addEventListener('change', seleccionar);
    editorial.addEventListener('change', seleccionar);



    showResult(resultList);
    // muestra los resultados
    function showResult(results) {
        cleanResult();

        results.forEach(book => {
            const item = document.createElement('P');
            const {nombre, categoria, autor, año, idioma, paginas, editorial} = book;
            item.textContent = `${nombre} - ${categoria} - ${autor} - ${año} - ${idioma} - ${paginas} - ${editorial}`
            
            result.appendChild(item);
        });

    }


    function seleccionar(event) {

        form[event.target.name] = event.target.value;
        if(Object.values(form).length == 1) {
            if(event.target.value !== '') {
                const newResult = resultList.filter(book => book[event.target.name] == event.target.value);
                showResult(newResult);
                return
            }

            const newResult = resultList;
            showResult(newResult);
        }

        if(Object.values(form).length > 1) {
            console.log ('nono')
        }
    }


    // limpia los resultados
    function cleanResult() {
        while(result.firstChild) {
            result.removeChild(result.firstChild)
        }
    }
})