
let arreglo = [
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_701445-MLA48048696977_102021-O.webp',
    nombre: 'Moto G20',
    precio: 42000
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_615787-MLA53225354281_012023-O.webp',
    nombre: 'Samsung Galaxy A04',
    precio: 67900
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_681864-MLA51186332985_082022-O.webp',
    nombre: 'Moto G42',
    precio: 77900
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_628410-MLA54073127628_022023-O.webp',
    nombre: 'Moto E22',
    precio: 46500
  },
  {
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_611053-MLA53418294189_012023-O.webp',
    nombre: 'LG Kite',
    precio: 39000
  }
]


function render(array) {
  var code = []; 
  array.map(item => {
    var codeRender = `<div id="Card"> <div id="Content"> 
                      <div class="col-xs-3"> 
                        <div class="Cardd"> 
                          <img id="imagen" src="${item.imagen}"> 
                          <p></p> 
                          <p>${item.nombre}</p> 
                          <p Class="Price">$ ${item.precio}</p> 
                        </div>
                      </div>
                      </div>`

    code.push(codeRender);
  });
  console.log(code);
	document.getElementById('container').innerHTML = code;
  
}

render(arreglo);

