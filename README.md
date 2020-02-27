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
  - Example:
    ```json
    "2020-12-31": { 
      "venue": "Test Venue",
      "showTitle": "John Thomas with friends.",
      "doors": "9:00 PM",
      "startTime": "10:00 PM",
      "price": "$10",
      "notes": "All ages, 19+"
    }
    ```

  ## Loading Animation
  - To add a loading animation while the ajax request is happening, simply put some markup or a loading graphic in the div
  - Be sure to give it the id `official-shows__loading` so we can hide it after we get a response.
    ```html
      <div id="official-shows">
        Loading...
        <img id="official-shows__loading" src="img/loading.gif"/>
      </div>
    ```

  ## Customization
  - You can add a custom message if there are no upcoming shows booked. 
  - Just add a div with the id `official-shows__no-shows` inside the `#official-shows` div
  - Make sure to hide it with `display: none`
    ```html
    <div id="official-shows__no-shows" style="display:none">
      <p>Management is trying to book us some shows</p>
      <p>They haven't gotten back to us yet...</p>
    </div>
    ```