var Shows = (function() {
  var self = this;
  this.showsLoaded = false;
  this.showsLoading = false;

  this.fetch = function(jsonUrl) {
    $.getJSON(jsonUrl, this.fetchComplete)
      .fail(self.fetchError);
    self.showsLoading = true;
  }
  
  this.loadShows = function(jsonUrl) {
    console.log('loadShows is called');
    if (this.showsLoading) {
      return;
    }

    console.log('Loading');
    self.fetch(jsonUrl);
  }

  this.fetchComplete = function(json) {
    // TODO: trim past shows out of json
    if ($(json).length < 1) {
      $('#official-shows').html('<div class="alert"><p>No live shows currently scheduled</p><p>Check back for more info</p></div>');  
      return;
    }

    var html = '';
    $.each(json, function(date, show) {
      var showHtml = '<div class="show"><div class="show-date">' + date + '</div>';
      showHtml += '<div class="show-info">';
      showHtml += '<span class="show-venue">' + show.venue + '</span>';
      
      if(show.showTitle && show.showTitle.trim() !== "") {
        showHtml += '<span class="show-venue">' + show.showTitle + '</span>';
      }

      if(show.doors && show.doors.trim() !== "") {
        showHtml += '<span class="show-time-doors">Doors: ' + show.doors + '</span>';
      }
      
      if(show.startTime && show.startTime.trim() !== "") {
        showHtml += '<span class="show-time-start">Show: ' + show.startTime + '</span>';
      }

      showHtml += '<span class="show-price">Doors: ' + show.price + '</span>';
      
      if(show.notes && show.notes.trim() !== "") {
        showHtml += '<span class="show-notes">' + show.notes + '</span>';
      }
      
      showHtml += "</div></div>";
      html += showHtml;
    })

    $('#official-shows').html(html);
  }

  this.fetchError = function(jqxhr, textStatus, error) {
    var err = textStatus + ', ' + error;
    console.log( 'Request Failed: ' + err );
    $('#official-shows').html(err);
  }

  return {
    loadShows: this.loadShows
  }
})();
