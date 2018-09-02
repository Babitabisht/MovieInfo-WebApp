// $(document).ready(function(){
// $('#searchForm').on('submit',function(event){
//  let searchText=  $('#searchText').val();
//    // e.preventDefault();
// getMovies(searchText);
// } );

// function getMovies(searchText){
//     alert(axios.get('http://api.themoviedb.org/3/search/movie?query=hardware&api_key=5f')
//     )
//        // alert(searchText);
//     axios.get('http://api.themoviedb.org/3/search/movie?query=hardware&api_key=52')
//          .then((response)=>{
//              console.log(response);
//              alert(response);
    
//              let movies=reponse.data.search;
//              alert(movies)
//              let output= '';
//              $.each(movies,(index,movie)=>{
//                  output+=`<div class="col-md-3">
//                  <div class="well text-center">
//                  <img src="${movie.Poster}">
//                  <h5>${movie.Title}</h5>
//                  <a onclick ="movieSelected('$(movie.imdbID}')" class="btn btn-primary" href="#" >Movie Details</a>
//                  </div>
                 
//                  </div> `;
//              });
//              $('#movies').html(output);
//          }).catch((err)=>{
//              console.log(err);
//             alert(err);
//          });
    
//     }
    
// });


// $(document).ready(function() {
//     var url = 'http://api.themoviedb.org/3/',
//     mode = 'search/movie',
//     input,
//     movieName,
//     key = '?api_key=5f76b2';

//     $('#searchForm').on('submit',function(event){
//         var input = $('#searchText').val();
       
//         movieName = encodeURI(input);
//  alert(movieName)
//     $.ajax({
//         url: url + mode + key + '&query='+movieName ,
//         dataType: 'jsonp',
//         success: function(data) {
//          console.log(data);
//         },
//         error: function (request, status, error) {
//          alert(status + ", " + error);
//         }
//     });
//     });

    
// });

$(document).ready(function() {
    var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=******';
var a;
    $('#searchForm').on('submit',function() {
        var input = $('#searchText').val(),
            movieName = encodeURI(input);
           // alert(movieName)
          
        $.ajax({
            type: 'GET',
            url: url + mode + input + key,
            async: false,
            
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                //alert(json)
                //alert(json.typeof)
               
                console.log(json);
               // console.dir(json);

               // console.log(json[0]);
                var output='';
var m=json.results;

            //  $.each(movies,(index,movie)=>{
            //       output+='<div class="col-md-3">'+movie.title +'</div>'
            //   });








                // var j=JSON.stringify(json);
                // alert(JSON.stringify(json))
                // console.log(JSON.stringify(json))
                console.log('hello')
               $.each(m,(i,data)=>{
                   console.log(i+" "+data.title)
                  // output+='<div class="col-md-3">'+data.title +'</div>'
                   console.log(i+" "+data.overview)
               var p= JSON.stringify(data.poster_path).replace(/^"(.*)"$/, '$1') 
                   console.log(i+" "+JSON.stringify(data.poster_path).replace(/^"(.*)"$/, '$1'))
                   console.log(i+" "+data.release_date)
                   console.log(data.imdb)
                   output+=`<div class="col-md-2">
                                  <div class="well text-center bg-dark">
                                  <img src=" https://image.tmdb.org/t/p/w92${p}"

                                   /></br>
                                     
                                   <div class="text-justified">  <h5 >${data.title}</h5></div>
                                     
                                     
                                     <a onclick ="movieSelected('${data.id}')" class="btn btn-primary m-4" href="movie.html" >Movie Details</a>
                                     </div>
                                     <hr>
                                     </div> `
                   
            
               });
               function movieSelected(id){

               
                sessionStorage.setItem('movieId',JSON.stringify(id));
               
               
                window.location='movie.html';
                return false;
                
                
                }
                   $('#movies').html(output);
                  // $('#movies').append('<h1 class="text-primary">${json.results[0].title}</h1>');
           // console.lofor g()

           
          // console.log(json.results[0].id);

            },
            error: function (request, status, error) {
                         alert(status + ", " + error);

                         console.log(error.message);
                         }
                        
        });



    
  
});



});

function movieSelected(id){
   // alert("In function")

   // alert(id.typeof)
    var a=  JSON.stringify(id)
    //a.replace(/^"(.*)"$/, '$1')
   // alert(a.replace(/^"(.*)"$/, '$1'))
    sessionStorage.setItem('movieId',a.replace(/^"(.*)"$/, '$1'));
    alert(sessionStorage.getItem('movieId'))
    console.log(id)
    window.location='movie.html';
    return false;
    
    
    }

    function  getMovie(){
        let movieId =sessionStorage.getItem('movieId');
       // alert(sessionStorage.getItem('movieId'))
   
        console.log('movie Id'+movieId);
        var url = 'http://api.themoviedb.org/3/',
        mode = 'movie/',
        input=movieId,
        movieName,
        key = '?api_key=5f76b11f0da8514f65b0d2f765c44a92';
        var t=url+mode+input+key
        //alert(t)

        //https://api.themoviedb.org/3/movie/325459?api_key=5f76b11f0da8514f65b0d2f765c44a92
        $.ajax({
            type: 'GET',
            url: url+mode+input+key,
            async: false,
            
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                //alert(json)
                //alert(json.typeof)
               console.log('---------------------------------------------------------------------------------------------------------');
                console.log(json);
var a=  json.genres
                console.log(json.overview)
                console.log(json.popularity)
                console.log(json.original_language[0].name)

var output='';
output+=`<div class="row">
<div class="col-md-4">
<h4>${json.title}</h4>
<br>
<img class="img img-fluid"  src="https://image.tmdb.org/t/p/w92${(json.poster_path).replace(/^"(.*)"$/, '$1') }"  alt="movie image"/>

<div class="text-center"><a class="btn btn-outline-primary m-4" href="http://imdb.com/title/${json.imdb_id}"  target="_blank">Search Imdb</a>
<a class="btn btn-outline-light" href="index.html">Back to Home</a>
</div>
</div>


<div class="col-md-6 bg-dark">
<h5>Movie Overview</h5>
<p class="mb-2 ">${json.overview}</p><br>
<p class="text-primary">Original Language :${json.original_language}</p>
<p class="text-primary">Popularity Index :${json.popularity}</p>
<p class="text-primary">Status :${json.status}</p>
<p class="text-primary">Release Date :${json.release_date}</p>
<p class="text-primary">Revenue :${json.revenue}</p>

</div>

</div>`

$('#movie').html(output);
       },
            error: function (request, status, error) {
                         alert(status + ", " + error);

                         console.log(error.message);
                         }
                        
        });


    }