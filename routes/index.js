const express = require('express');
const router = express.Router();


//EJERCICIO 1

router.get('/', (req, res) =>{
    res.render('index')
});
 module.exports = router;

 router.get('/ejercicio1',(req, res, next) =>{
    res.render('ejercicio1')
});

router.post('/ejercicio', (req,res, next) => {

    var num1,num2,num3,num4,num5,num6,num7,num8,num9,num10;

    num1 = Math.floor(Math.random() * (1+100));
    num2 = Math.floor(Math.random() * (1+100));
    num3 = Math.floor(Math.random() * (1+100));
    num4 = Math.floor(Math.random() * (1+100));
    num5 = Math.floor(Math.random() * (1+100));
    num6 = Math.floor(Math.random() * (1+100));
    num7 = Math.floor(Math.random() * (1+100));
    num8 = Math.floor(Math.random() * (1+100));
    num9 = Math.floor(Math.random() * (1+100));
    num10 = Math.floor(Math.random() * (1+100));
    
    var numMayor = Math.max(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
    var numMenor = Math.min(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);

    res.render('ejercicio1',{
        num1: num1,
        num2: num2,
        num3: num3,
        num4: num4,
        num5: num5,
        num6:num6,
        num7: num7,
        num8: num8,
        num9: num9,
        num10: num10,
        numMayor: numMayor,
        numMenor: numMenor
    });

});

// EJERCICIO 2

router.get('/ejercicio2', (req,res) => {
    res.render('ejercicio2');
});

router.post('/ejercicioDos', (req,res) => {
    var mes = req.body.mes;
    var result;
       switch(mes){
           case "1" :result ='sabado';
           break;
           case "2" :result ='domingo';
           break;
           case "3" :result ='lunes';
           break;
           case "4" :result ='martes';
           break;
           case "5" :result ='miercoles';
           break;
           case "6" :result ='jueves';
           break;
           case "7" :result ='viernes';
           break;
           case "8" :result ='sabado';
           break;
           case "9" :result ='domingo';
           break;
           case "10" :result ='lunes';
           break;
           case "11" :result ='martes';
           break;
           case "12" :result ='miercoles';
           break;
           case "13" :result ='jueves';
           break;
           case "14" :result ='viernes';
           break;
           case "15" :result = 'sabado';
           break;
           case "16" :result ='domingo';
           break;
           case "17" :result ='lunes';
           break;
           case "18" :result ='martes';
           break;
           case "19" :result ='miercoles';
           break;
           case "20" :result ='jueves';
           break;
           case "21" :result ='viernes';
           break;
           case "22" :result = 'sabado';
           break;
           case "23" :result ='domingo';
           break;
           case "24" :result ='lunes';
           break;
           case "25" :result ='martes';
           break;
           case "26" :result ='miercoles';
           break;
           case "27" :result ='jueves';
           break;
           case "28" :result ='viernes';
           break;
           case "29" :result ='sabado';
           break;
           case "30" :result ='domingo';
           break;
       }

    res.render('ejercicio2',{
        result:result
    })

});

// EJERCICIO 3
router.get('/ejercicio3', (req,res) =>{
    res.render('ejercicio3');
});

router.post('/ejercicioTres', (req,res) =>{
    var n1,n2,n3;
    var pi_n1,pi_n2,pi_n3;

    n1 = Math.floor(Math.random() * (1+100));
    n2 = Math.floor(Math.random() * (1+100));
    n3 = Math.floor(Math.random() * (1+100));

    if(n1 > 50){
        pi_n1 = 'mayor de 50';
    }else if(n1 >= 0 && n1 <= 20){
        pi_n1 = 'menor de 20';
    }else if(n1 < 0){
        pi_n1 = 'negativo';
    }else{
        pi_n1 = 'no cumple';
    }

    if(n2 > 50){
        pi_n2 = 'mayor de 50';
    }else if(n2 >= 0 && n2 <= 20){
        pi_n2 = 'menor de 20';
    }else if(n2 < 0){
        pi_n2 = 'negativo';
    }else{
        pi_n2 = 'no cumple';
    }

    if(n3 > 50){
        pi_n3 = 'mayor de 50';
    }else if(n3 >= 0 && n3 <= 20){
        pi_n3 = 'menor de 20';
    }else if(n3 < 0){
        pi_n3 = 'negativo';
    }else{
        pi_n3 = 'no cumple';
    }

    res.render('ejercicio3',{
        n1: n1,
        n2: n2,
        n3: n3,
        pi_n1:pi_n1,
        pi_n2:pi_n2,
        pi_n3:pi_n3
    });
});

// EJERCICIO 4

router.get('/ejercicio4', (req,res) =>{
    res.render('ejercicio4');
});

router.post('/ejercicioCuatro', (req,res) =>{
    var nume = Math.floor(Math.random() * (1+100));
    var k_numero;
    if(nume % 2 == 0){
        k_numero = 'par';
    }else{
        k_numero = 'impar';
    }

    res.render('ejercicio4',{
        nume: nume,
        k_numero:k_numero
    });
});

//EJERCICIO 5

router.get('/ejercicio5', (req,res) =>{
    res.render('ejercicio5');
});

router.post('/ejercicioCinco', (req,res) =>{

    var par = [];
    var impar = [];
    var nu1,nu2,nu3,nu4,nu5,nu6,nu7,nu8,nu9,nu10;

    nu1 = Math.floor(Math.random() * (1+100));
    nu2 = Math.floor(Math.random() * (1+100));
    nu3 = Math.floor(Math.random() * (1+100));
    nu4 = Math.floor(Math.random() * (1+100));
    nu5 = Math.floor(Math.random() * (1+100));
    nu6 = Math.floor(Math.random() * (1+100));
    nu7 = Math.floor(Math.random() * (1+100));
    nu8 = Math.floor(Math.random() * (1+100));
    nu9 = Math.floor(Math.random() * (1+100));
    nu10 = Math.floor(Math.random() * (1+100));

    var numMayor = Math.max(nu1,nu2,nu3,nu4,nu5,nu6,nu7,nu8,nu9,nu10);

    var numMenor = Math.min(nu1,nu2,nu3,nu4,nu5,nu6,nu7,nu8,nu9,nu10);

    var numeros = [nu1,nu2,nu3,nu4,nu5,nu6,nu7,nu8,nu9,nu10];

    for(var i = 0; i <= numeros.length; i++){
        if(numeros[i] % 2 == 0){
            par.push(numeros[i]);
        }else{
            impar.push(numeros[i]);
        }
    }

    console.log(typeof(n1));

    res.render('ejercicio5',{
        nu1: nu1,
        nu2: nu2,
        nu3: nu3,
        nu4: nu4,
        nu5: nu5,
        nu6: nu6,
        nu7: nu7,
        nu8: nu8,
        nu9: nu9,
        nu10: nu10,
        numMayor: numMayor,
        numMenor: numMenor,
        par: par,
        impar: impar
    });
});

// EJERCICIO 6 

router.get('/ejercicio6', (req,res) =>{
    res.render('ejercicio6')
});

router.post('/ejercicioSeis', (req,res) =>{

    var nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25;
    var sumaNota = 0;
    var o = 0;
    var p = 0;

    nota1 = parseInt(req.body.not1);
    nota2 = parseInt(req.body.not2);
    nota3 = parseInt(req.body.not3);
    nota4 = parseInt(req.body.not4);
    nota5 = parseInt(req.body.not5);
    nota6 = parseInt(req.body.not6);
    nota7 = parseInt(req.body.not7);
    nota8 = parseInt(req.body.not8);
    nota9 = parseInt(req.body.not9);
    nota10 = parseInt(req.body.not10);
    nota11 = parseInt(req.body.not11);
    nota12 = parseInt(req.body.not12);
    nota13 = parseInt(req.body.not13);
    nota14 = parseInt(req.body.not14);
    nota15 = parseInt(req.body.not15);
    nota16 = parseInt(req.body.not16);
    nota17 = parseInt(req.body.not17);
    nota18 = parseInt(req.body.not18);
    nota19 = parseInt(req.body.not19);
    nota20 = parseInt(req.body.not20);
    nota21 = parseInt(req.body.not21);
    nota22 = parseInt(req.body.not22);
    nota23 = parseInt(req.body.not23);
    nota24 = parseInt(req.body.not24);
    nota25 = parseInt(req.body.not25);

    var notas = [nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25];
    do{
        sumaNota = sumaNota + notas[p];
        console.log(p + " " + sumaNota);
        p++;
    }while (p < notas.length) 

    var promedio = parseFloat(sumaNota / notas.length);

    res.render('ejercicio6',{
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        nota4: nota4,
        nota5: nota5,
        nota6: nota6,
        nota7: nota7,
        nota8: nota8,
        nota9: nota9,
        nota10: nota10,
        nota11: nota11,
        nota12: nota12,
        nota13: nota13,
        nota14: nota14,
        nota15: nota15,
        nota16: nota16,
        nota17: nota17,
        nota18: nota18,
        nota19: nota19,
        nota20: nota20,
        nota21: nota21,
        nota22: nota22,
        nota23: nota23,
        nota24: nota24,
        nota25: nota25,
        notas:notas,
        p: p,
        sumaNota: sumaNota,
        promedio: promedio
    })

});

// EJERCICIO 7

router.get('/ejercicio7', (req,res) =>{
    res.render('ejercicio7');
});

router.post('/ejercicioSiete', (req,res) =>{

    var numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8
    var numeros = [];
    var suma = 0;

    numero1 = parseInt(req.body.num1);
    numero2 = parseInt(req.body.num2);
    numero3 = parseInt(req.body.num3);
    numero4 = parseInt(req.body.num4);
    numero5 = parseInt(req.body.num5);
    numero6 = parseInt(req.body.num6);
    numero7 = parseInt(req.body.num7);
    numero8 = parseInt(req.body.num8);

    numeros.push(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8);
    
    for(var i = 0; i <= numeros.length-1; i++){
        suma = suma + numeros[i];
    };

    res.render('ejercicio7',{
        suma:suma
    });

});

// EJERCICIO 8 
router.get('/ejercicio8', (req,res) =>{
    res.render('ejercicio8');
});

router.post('/ejercicioOcho', (req,res) =>{

    var numeros = [];
    var sumPar = 0;
    var sumImpar = 0;
    var cantPar = 0;
    var cantImpar = 0;

    var tamanoArray = Math.floor(Math.random() * (1+20));

    if(tamanoArray >= 0 && tamanoArray <= 20){
        for(var i = 1; i <= tamanoArray; i++){
            var numero = Math.floor(Math.random() * (1+100));
            numeros.push(numero);
        }
        for(var o = 0; o <= numeros.length-1; o++){
            if(numeros[o] % 2 == 0){
                sumPar = sumPar + numeros[o];
                cantPar++
            }else{
                sumImpar = sumImpar + numeros[o];
                cantImpar++
            }
        }
    }

    res.render('ejercicio8',{
        tamanoArray: tamanoArray,
        numeros:numeros,
        sumPar:sumPar,
        sumImpar:sumImpar,
        cantPar:cantPar,
        cantImpar:cantImpar
    })
    
});

// preguntas

router.get('/preguntas', (req,res) =>{
    res.render('preguntas');
});

