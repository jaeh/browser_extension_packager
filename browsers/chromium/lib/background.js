//track omnibox changes

chromium.omnibox.onInputEntered.addListener( function (text, disposition) {
  alert('text = ' + text);
} );
