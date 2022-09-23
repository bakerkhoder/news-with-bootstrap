// $.ajax({
//     type:'GET',
//     URL:'https://localhost/bootstrap-news/news-fetch.php',
//     success:function(data){
//         console.log('success',data)
//     }
// })
const news_one=document.getElementById("first-news");
const news_two=document.getElementById("second-news");

var form = new FormData();
form.append("id", "2");

var settings = {
  "url": "http://localhost/bootstrap-news/news-fetch.php",
  "method": "GET",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
   let data=JSON.parse(response)
    news_one.textContent=data[0].news
    news_two.textContent=data[1].news
  console.log(JSON.parse(response));
});
