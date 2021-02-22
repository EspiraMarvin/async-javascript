//fetch api
// STEPS FOR FETCH API
// 1. fetch data
// 2. we take the response
// 3. we return response.json().. that returns a promise
// 4. we get the data with .then and we finally catch any errors with .catch

fetch('todos/luigi.json')
    .then((response) => {
        console.log('resolved', response)
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch((err) => {
        console.log('rejected', err)
});
