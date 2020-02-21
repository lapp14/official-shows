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
    console.log('loadShows is called')
    if (this.showsLoading) {
      return;
    }

    console.log('Loading');
    self.fetch(jsonUrl);
  }

  this.fetchComplete = function(json) {
    $('#official-shows').html(JSON.stringify(json));
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
