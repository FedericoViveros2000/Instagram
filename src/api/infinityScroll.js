const {
  VITE_API_PRODUCTS: urlProducts
} = import.meta.env;
let offsetRecieved = 1;
const scrollInfinity = (dispatch, dispatchName, offset = offsetRecieved, lastArticle,  limit = 10) => {
  
  //Opciones para la API Intersection Observer
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  //Callback mediante el cual vamos cargando mas productos o articulos de acuerdo al scroll.
  let callbackEntry = (entries, observer) => {
    entries.forEach(entry => {
      let { isIntersecting } = entry;``
      if (isIntersecting) {
        let urlProductsPaginated = `${urlProducts}?offset=${offset}&limit=${limit}`
        dispatch(dispatchName, urlProductsPaginated);
      }
    });
  }
  //Creando el observador para el scroll infinito
  let observer = new IntersectionObserver(callbackEntry, options);
  observer.observe(lastArticle);
}

const postsIsIntersected = (parentElement) => {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.target);
    })
  }
  
  const observer = new IntersectionObserver(callback, options);

  //observer.observe(parentElement);
  parentElement.forEach(image => {
    observer.observe(image)
  });
}

export default scrollInfinity;
export {
  postsIsIntersected
}
  