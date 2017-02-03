
console.log("this is script.js");

jQuery(document).ready(function($) {

  var acro = {
  'if' :'2',
  'but' : '2',
  'computer' : '3',
  'Adam Smith' :'5'

  }



  console.log("this is script.js");


$.each(acro, function(key, value) {


       	  $("p").highlight(key, {caseSensitive: false, className: 'yellowhigh', wordsOnly:true });


      /*    $("p").LiteTooltip({
        textalign: 'left',
        trigger: 'hoverable',
        location: "right",
        padding: 5,
        title:
        '<div class="video-wrapper">' +
        '<iframe src="EMBED VIDEO URL" scrolling="no" frameborder="0" allowfullscreen mozallowfullscreen webkitallowfullscreen>' +
        '</iframe>' +
        '</div>'
    });*/




    });

//adding the one below for kicks

});














    $('.yellowhigh').each(function() {

//this refers to the text that has just been highlighted

    	var currentKey = $(this).text();

			//Tipped.create(this, 'Some tooltip text');


      var jSONdata;
      var data;
      $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow', function(result) {
          //data is the JSON string
      /*    $.each(result, function(i, field){
                       console.log(i);
                       jSONdata = field;
          });*/
      // console.log(result.query.pages.extract);
      //console.log(result);
    data =  result.query.pages[21721040].extract
    //  console.log(result.query.pages.extract);
      });
console.log(data)

//only available in pro version
/*	Tipped.create(this, {
      ajax: {
        url: 'http://vimeo.com/api/oembed.json?url=http://vimeo.com/6428069&maxwidth=280&maxheight=280',
        success: function(data, textStatus, jqXHR) {
          return {
            title: data.title,
            content: data.html
          };
        }
      },*/









            /*close: true,
            hideOn: false,
            skin: 'light',
            radius: false,
            position: 'topleft'*/


    });






      $('.highlight-16235').each(function() {

    	var currentKey = $(this).text();






});
