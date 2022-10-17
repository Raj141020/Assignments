const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })



// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use many ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

//Question 1

router.get('/movies', function (req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log("Rroblem 1 answer is ----------------------->" +movies)
    res.send(movies)
})

//Question 2

// router.get('/movies/:indexNumber', function (req, res){

//     let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

//     const index = req.params;
//     const index_no = index.indexNumber;

//     console.log("Rroblem 2 answer is ----------------------->" +movies[index_no]);

//     res.send(movies[index_no]);
// });

//Question 3

router.get('/movies/:indexNumber', function (req, res){

    
    console.log("This is the request " + JSON.stringify(req.params));
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    
    const index = req.params;
    const index_no = index.indexNumber;
    
    if(index_no < 0 || index_no > movies.length - 1){
        res.send("please insert valid index number")
    } else {
        res.send("movies[index_no]")
    }

});

//Question 4

router.get('/get/films', function (req, res){

    const films = [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }];

       res.send(films);
    console.log("Rroblem 4 answer is ----------------------->" + JSON.stringify(films));
});

//Question 5

router.get('/get/films/:filmId', function (req, res){
    console.log("This is the request " + JSON.stringify(req.params));

    const films = [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }];

       const id = req.params;
       const id_index = id.filmId;

       for(let i=0;i<films.length;i++){
        const film = films[i];
        if(film.id == id_index){
            return res.send(film)
        }
       }
       res.send("No movie exists with this id")
       
    
});
module.exports = router;