
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

    });


    $('.yellowhigh').each(function() {

//this refers to the text that has just been highlighted

    	var currentKey = $(this).text();

			//Tipped.create(this, 'Some tooltip text');

			Tipped.create(this, {
      ajax: {
        url: 'http://vimeo.com/api/oembed.json?url=http://vimeo.com/6428069&maxwidth=280&maxheight=280',
        success: function(data, textStatus, jqXHR) {
          return {
            title: data.title,
            content: data.html
          };
        }
      },

            /*close: true,
            hideOn: false,
            skin: 'light',
            radius: false,
            position: 'topleft'*/


    });




    });

      $('.highlight-16235').each(function() {

    	var currentKey = $(this).text();


    });
});
