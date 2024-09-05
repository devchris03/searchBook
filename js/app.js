document.addEventListener('DOMContentLoaded', function() {
    // asigna variables
    const result = document.querySelector('#result');
    const categoria = document.querySelector('#categoria');
    const idioma = document.querySelector('#idioma');
    const autor = document.querySelector('#autor');
    const año = document.querySelector('#año'); 
    const paginas = document.querySelector('#paginas'); 
    const editorial = document.querySelector('#editorial'); 
    let resultList = books;

    // agrega eventos
    categoria.addEventListener('change', seleccionar)
    idioma.addEventListener('change', seleccionar);
    autor.addEventListener('change', seleccionar);
    año.addEventListener('change', seleccionar);
    paginas.addEventListener('change', seleccionar);
    editorial.addEventListener('change', seleccionar);


    // muestra resultados
    showResult();

    function showResult() {
        // limpia resultados
        cleanResult();

        resultList.forEach(book => {
            const resultItem = document.createElement('P');
            const {nombre, categoria, autor, año, idioma, paginas, editorial} = book;
            resultItem.textContent = `${nombre} - ${categoria} - ${autor} - ${año} - ${idioma} - ${paginas} - ${editorial}`;
        
            result.appendChild(resultItem)
        });

    }


    // filtra por seleccion
    function seleccionar(event) {

        if(event.target.value !== "") {
            let x = event.target.name;

            let exit = resultList.some(book => book[x] == event.target.value)
            
            console.log(exit)
            
            if(exit) {
                resultList = resultList.filter(book => book[x] == event.target.value);
                showResult(resultList)
            } else {
                const y = document.createElement('P')
                y.textContent = 'No se encontraron resultados';
                cleanResult();
                result.appendChild(y)
            }


        } 

        // else {
        //     resultList = resultList.filter(book => book.typeSelect !== "")
        //     showResult(resultList)
        // }
    }


    // limpia los resultados
    function cleanResult() {
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
    }

    

    

})