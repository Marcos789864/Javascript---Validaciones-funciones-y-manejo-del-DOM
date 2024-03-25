var ErrorIngresoNota = "Has ingresado una nota incorrecta, recuerde que debe estar entre 1 y 10"

function ValidarNota() 
{

var Notamatematica = parseInt(document.getElementById("notaMatematica").value);

var Notalengua = parseInt(document.getElementById("notaLengua").value);

var Notaefsi= parseInt(document.getElementById("notaEFSI").value);

if(Notamatematica == "" || Notalengua == "" || Notaefsi == "")
{
    alert("Complete todos los campos");
    return true;
}

console.log(typeof(Notaefsi))

if(isNaN(Notaefsi) || isNaN(Notamatematica) || isNaN(Notalengua))
{
   alert ("El tipo de dato que se ingreso debe ser numeral");
   return true;
}

if(Notamatematica > 10 || Notamatematica < 1 || Notalengua > 10 || Notalengua < 1 || Notaefsi > 10 || Notaefsi < 1 )
{
alert(ErrorIngresoNota);
 return true;
}

return false;
}

function Promedio()
{

    var Notamatematica = document.getElementById("notaMatematica").value;

    var Notalengua = document.getElementById("notaLengua").value;
    
    var Notaefsi= document.getElementById("notaEFSI").value;

    var media  = document.getElementById("promedio");

   var img = document.getElementById("imagen");

   var colorError = "red";

   var colorCorrecta = "green";


    if (ValidarNota() == false )
    {
        let promedio = ( parseInt(Notaefsi) + parseInt(Notalengua) + parseInt(Notamatematica)) / 3;

        if(promedio > 6){
            img.src = "Ok.jfif";

            document.getElementById("promedio").style.color = colorCorrecta
            media.innerHTML = "Tu promedio es de " + promedio;
            
        }
        else 
        document.getElementById("promedio").style.color = colorError;
        img.src = "triste.jfif"; 
        media.innerHTML = promedio;
    }
    
}

function mostraMayorNota()
{
    var Notamatematica = parseInt(document.getElementById("notaMatematica").value);

    var Notalengua = parseInt(document.getElementById("notaLengua").value);

    var Notaefsi= parseInt(document.getElementById("notaEFSI").value);

    var mat = document.getElementById("Materia");

    var NotaMax = -1;

    var MateriaMax = "";

     const ArrayNotas = [Notamatematica,Notalengua,Notaefsi];

     const ArrayMaterias = ["Matematica", "Lengua", "EFSI"];


     for(let i = 0; i < ArrayNotas.length; i++)
     {
        
        if (ArrayNotas[i] > NotaMax)
        {
            NotaMax = ArrayNotas[i]; 
            MateriaMax =ArrayMaterias[i];  
        } 
        else if(NotaMax == ArrayNotas[i])
        {
            MateriaMax += ',' + ArrayMaterias[i];
        }
        
     }
    document.getElementById("Materia").style.color="blue";
    mat.innerHTML = "Materia/s con la mayor nota es: " + MateriaMax;
}






