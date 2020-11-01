
export default class Helpers{

    //Lee el archivo y retorna un string pasados 1 segundos
    static readFile(file){

        return new Promise((resolve, reject) => {

            let reader = new FileReader();

            /*reader.onload = function(e) { 
                let text = e.target.result;
            }*/
            reader.readAsText(file);

            setTimeout(() => {
                if(reader.readyState === 2){
                    resolve(
                        reader.result
                    );
                }
                else{
                    reject(
                        'Unexpected error while reading file'
                    )
                }
                
            }, 1000);
        });
        
    }

    //Este metodo organiza cada linea de codigo com un array de palabras
    static async organizeText(file){

        let text = await Helpers.readFile(file);
        //En caso de que no se eliminen completamente los espacios, aplicar trim() antes del split()
        let lines =  text.split('\n').filter(line => line.length>1);
        
        //console.log(lines);

        for(let i=0; i<lines.length; i++){
            let line= lines[i];
            lines[i]= line.split(" ").filter( word => word.length > 1 || word == 'I' || word == 'S');
        }

        //console.log(lines);

        return lines;
        
    }
    
}