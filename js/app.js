document.addEventListener("DOMContentLoaded", e => {

    console.info("GO!!!");

    document.querySelector('#file-button').addEventListener('click', e => {
        document.querySelector('#file-load').click();
    });

    document.querySelector('#file-load').addEventListener('change', e => {
        if(e.target.value){
            document.querySelector('#file-name').innerHTML= e.target.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = function(e) { 
                let content = e.target.result;
                guarda(content);
            }
            reader.readAsText(file);
        } 
        else {
            document.querySelector('#file-name').innerHTML= `No file`;
        }
    });
    

})

function guarda(texto){
    let lineas = texto.split('\n');

    console.log(lineas);

}

