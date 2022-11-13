

// 1-POO
/*UTILIZACIÓN DE LA POO

- Podemos definimos el PRODUCTO como una CLASE.
- Que es una clase?
Una clase define que PROPRIEDADES y METODOS que tiene.
Es decir:
PROPRIEDADES= nombre,precio,año de creación exc.
METODOS= guardar producto,listar producto,exc.

Podemos utilizar una CLASE para crear MULTIPLES OBJETOS


*/


//CREAREMOS 2 CLASES, UNA PARA EL PRODUCTO Y OTRA PARA LA INTERFAZ


/*
CLASE PRODUCTO:
Creamos una CLASE de un PRODUCTO con estas propriedades:
nombre,precio y año de creación.
El metodo constructor 
*/

class Product
{
    constructor(name,price, year){
        this.name= name; //de este producto su nombre va a ser asignado del nombre que le estoy pasando a su constructor.
        this.price= price;
        this.year= year;
    }


}




/*
CLASE INTERFAZ U.I.=USER INTERFACE
Esta clase contiene los metodos de poder agregar algo dentro de la interfaz,listarlo,eliminarlo,exc-
*/



class UI{
    addProduct(product){//metodo que agrega el producto
         const productList = document.getElementById('product-list');
         const element= document.createElement ('div');
         element.innerHTML=`
           <div class="card text-center mb-4">
              <div class ="card-body">
                 <strong>Product Name</strong>: ${product.name}
                 <strong>Product Price</strong>: ${product.price}
                 <strong>Product Year</strong>: ${product.year}
                 <a href="#" class="btn btn-danger" name="delete">Delete</a>
              </div>
           </div>
         `;

         productList.appendChild (element);
         
    }




    resetForm(){
        document.getElementById('product-form').reset();
    }







    deleteProduct(element){
        if(element.name ==='delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage ('Product Deleted Successfully', 'info')
        }
    }





    showMessage(message,  cssClass){
        const div=document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        //Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
             document.querySelector('.alert').remove();
        }, 3000);
    }

}










// 2-EVENTOS DEL DOM es decir, eventos de mi aplicacióin
/*

DOM= DOCUMENT OBJECT MODEL
cuando un usuario dá un click en un boton, cuando está typeando dentro de un input u otros eventos exc.
*/ 


/*
1-EVENTO SUBMIT (lo hemos puesto en el html que es input de tipo "submit"). Cuando el usuario pone datos en el formulario y luego clickea en "boton Save"
*/ 

document.getElementById("product-form")
    .addEventListener('submit',function (e) {
    const name= document.getElementById('name').value; //quiero capturar el valor name,price y year para guardarlo en una constante.
    const price= document.getElementById('price').value;
    const year= document.getElementById('year').value;

  
    const product= new Product(name, price, year);//creo un objeto y lo meto

    const ui =new UI ();


    if(name === '' ||  price === '' ||  year === '' ) {
       return ui.showMessage ('Complete fields Please', 'danger' );
    }






    ui.addProduct(product); 
    ui.resetForm();
    ui.showMessage('Product Added Successfully','success');

    e.preventDefault(); //esto sirve para que no se actualize la pagina dejando en blanco la consola al introducir datos
});





document.getElementById('product-list') .addEventListener ('click', function(e){
    const ui= new UI();
    ui.deleteProduct(e.target)
}


)













/*que significa esta expresión:

"desde mi documento, el html" = "document"
"quiero buscar, obtener un elemento a través del ID" ="getElementById": en este caso ponemos el elemento product-form
"y a partir de aqui quiero que actue un evento"= 

addEventListener > submit y función alert

Para que actue un evento le tengo que asignar un metodo elegido en el listado de eventos "addEventListener". 
Voy a utilizar el evento SUBMIT. Cuando actue ese evento vamos a ejecutar una función, por ejemplo, un alert que avise " enviando al formulario"


document.getElementById("product-form")
    .addEventListener('submit',function() {
    alert('Enviando formulario')
})



*/

