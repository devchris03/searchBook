document.addEventListener('DOMContentLoaded', function(){
    // asigna variables
    const categoria = document.querySelector('#categoria');
    const autor = document.querySelector('#autor');
    const año = document.querySelector('#año');
    const idioma = document.querySelector('#idioma');
    const paginas = document.querySelector('#paginas');
    const editorial = document.querySelector('#editorial');
    const resultContent = document.querySelector('#resultContent');

    // asigna valores seleccionados
    let form = {
        categoria: '',
        autor: '',
        año: '',
        idioma: '',
        paginas: '',
        editorial: '',
    }

    // agrega eventos
    categoria.addEventListener('change', filter);
    autor.addEventListener('change', filter);
    año.addEventListener('change', filter);
    idioma.addEventListener('change', filter);
    paginas.addEventListener('change', filter);
    editorial.addEventListener('change', filter);

    showResult(books)

    // muestra resultados
    function showResult(books) {
        cleanResult();

        books.forEach(book => {
            const {categoria, autor, año, idioma, paginas, editorial} = book;
            const bookItem = document.createElement('P');
            bookItem.textContent = `${categoria} - ${autor} - ${año} - ${idioma} - ${paginas} - ${editorial}`;

            resultContent.append(bookItem);
        })
    }


    // filtra segun elección
    function filter(event) {
        form[event.target.name] = event.target.value;
        console.log(form)

        const newResult = books.filter(filterCategory).filter(filterAuthor).filter(filterYear).filter(filterLenguage).filter(filterPage).filter(filterEditorial);

        if(newResult.length){
            showResult(newResult)
        } else {
            const alert = document.createElement('P');
            alert.textContent = 'No se encontraron libros que coincidan con los filtros seleccionados. Por favor, ajusta tus criterios de búsqueda e intenta nuevamente.'
            
            cleanResult();
            resultContent.appendChild(alert);
        }
        
    }


    // aplica filtros
    function filterCategory(book){
        if(form.categoria){
            return book.categoria == form.categoria;
        }

        return book;
    }

    function filterAuthor(book){
        if(form.autor){
            return book.autor == form.autor;
        }

        return book;
    }

    function filterYear(book){
        if(form.año){
            return book.año == form.año;
        }

        return book;
    }

    function filterLenguage(book){
        if(form.idioma){
            return book.idioma == form.idioma;
        }

        return book;
    }

    function filterPage(book){
        if(form.paginas){
            return book.paginas == form.paginas;
        }

        return book;
    }

    function filterEditorial(book){
        if(form.editorial){
            return book.editorial == form.editorial;
        }

        return book;
    }


    // limpia los resultados
    function cleanResult(){
        while(resultContent.firstChild){
            resultContent.removeChild(resultContent.firstChild);
        }
    }
})