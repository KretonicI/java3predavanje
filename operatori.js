var x = "lorem ipsum",
    y = 2345,
    z = '2345',
    q = false,
    w = true;

    var trueFalse = q;
    console.log('trueFalse=' + trueFalse);
    if (trueFalse === true){
        console.log('1.q = ' + trueFalse);
    }
    if (trueFalse !== true){
        console.log('2.q = ' + trueFalse);
    }

    if (q && w){
        console.log( ' q i w su true');
    }
    else {
        console.log( ' jedan od q ili w nije true');
    }
    
    console.log('ostatak pro cijelobrojnom dijeljenju od 9/2 =' + (9 % 2));
    console.log('ostatak pro cijelobrojnom dijeljenju od 5/2 =' + (5 % 2));
    if((9 % 2 === 0) && (5 % 2)){
        console.log ('ostatak pro cijelobrojnom dijeljenju je 0');
    }
    else {
        console.log('ostatak pro cijelobrojnom dijeljenju NIJE 0')
    }