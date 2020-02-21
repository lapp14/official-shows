# official-shows
- Include jQuery and the official-shows script
  ```      
    <script src="official-shows.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  ```
- Add a container on the page: `<div id="official-shows"></div>`
- Add a load script and pass the json url
  ```
  <script>   
    window.onload = function() {
      var url = 'https://raw.githubusercontent.com/lapp14/official-shows/master/john-thomas.json';
      if (window.jQuery) {
        Shows.loadShows(url);
      }
    }
  </script>
  ```