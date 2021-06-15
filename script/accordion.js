$( function() {
  $( ".accordion" ).accordion({
    collapsible: true,
    active: 1,
    heightStyle: "content"
  });
  $( ".accordion" ).accordion( "option", "active", 1 );
} );


