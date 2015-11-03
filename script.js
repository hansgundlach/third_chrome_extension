
jQuery(document).ready(function($) {

  var acro = {
  'if' :'2',
  'but' : '2',
  'computer' : '3',
  'John Smith' :'5'

  }


	//this is somehow iterating over the nick object

	//where is this nick thing
	//used to be nick
$.each(acro, function(key, value) {
		//we are going t o chnage this to loop through DOM and check text for a acertain condition


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

            close: true,
            hideOn: false,
            skin: 'light',
            radius: false,
            position: 'topleft'


    });




    });

      $('.highlight-16235').each(function() {

    	var currentKey = $(this).text();


    });
});
