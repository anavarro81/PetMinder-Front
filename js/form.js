const form$$ = document.getElementById('newSitForm')

form$$.addEventListener('submit', async(event) => {

    event.preventDefault();

    console.log('>> form$$ : ', form$$)

    const formData = new FormData(form$$)

    
    
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('>> data : ', data)

    try {

        const response = await fetch ('http://localhost:5000/sit/new-sit', {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })

        if (response.ok) {
            console.log('Formulario envaido correctamente');
        } else {
            console.log('Se ha producido error al enviar el fomrulario');
            
        }
        
        
    } catch (error) {
        console.log('Error en la llamada: ', error.message);
        
    }


    console.log(data);



})