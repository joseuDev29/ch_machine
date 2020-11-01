import Helpers from './helpers.js';

document.addEventListener("DOMContentLoaded", e => {

    console.info("GO!!!");

    document.querySelector('#file-button').addEventListener('click', e => {
        document.querySelector('#file-load').click();
    });

    document.querySelector('#file-load').addEventListener('change', async (e) => {

        if(e.target.value){

            document.querySelector('#file-name').innerText= e.target.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

            let file = e.target.files[0];

            await Helpers.organizeText(file).then(
                (code) => {
                    console.log('complete');
                    console.log(code);
                }
            ).catch(
                err => { console.log(`Error: ${err}`) }
            );
            
        } 
        else {

            document.querySelector('#file-name').innerText= `No file`;
        }

    });
    

});

