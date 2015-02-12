$(function() {

    // Add diagram renderer
    var renderer = new marked.Renderer();
    renderer.codespan = function (code, language) {      
      if(code.match(/^sequenceDiagram/)||code.match(/^graph/)){
          return '<div class="mermaid">'+code+'</div>';
      }
      else{
          return '<pre><code>'+code+'</code></pre>';
      }
    };

    renderer.code = function (code, language) {
      if(code.match(/^sequenceDiagram/)||code.match(/^graph/)){
          return '<div class="mermaid">'+code+'</div>';
      }
      else{
          return '<pre><code>'+code+'</code></pre>';
      }
    };


    Flatdoc.parser.setRenderer(renderer);

    Flatdoc.file = function(locations) {
        function loadData(locations, response, callback) {
          if (locations.length === 0) callback(null, response);
          else $.get(locations.shift()).done(function (data) {
            loadData(locations, response + '\n' + data, callback);
          }).fail(function(data) {
            callback(data, null)          
          });
        }

        return function(callback) {
          loadData(locations instanceof Array ? locations : [locations], '', function(data) {
            setTimeout(function() {
              mermaid.init()
            }, 1000);
            return callback.apply(callback, arguments);
          });
        }
    };

    var files = $('body').data('files').split(',');
    Flatdoc.run({
        fetcher: Flatdoc.file(files)
    });
});