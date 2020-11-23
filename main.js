axios.get('https://api.github.com/users/douglasruuan')
    .then(function (response) {
        //
    })
    .catch(function (error) {
        //
    });






/*//AJAXXXXXXX \/ //

    let minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        //Resolve - Função resolve, quando o resultado obteve true
        //Reject - função quando o resultado der false.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/douglasruuan');
        xhr.send(null);


        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na Requisição.');
                }
            }
        }
    });
}
minhaPromise() //atribuido a response está a resolve que é quando dá TRUE, e reject e o catch que é o erro FALSE.
*/