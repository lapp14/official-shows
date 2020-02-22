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

  ## Formats
  - Data read in must be a json object
  - The json object must have a set of objects, whose key is a date in the format `yyyy-mm-dd`, representing the date of the show
  - Shows should be in descending order of shows, most recent (future or past) at the top
  - object keys will be added here later