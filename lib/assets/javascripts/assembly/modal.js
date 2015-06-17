// (function($) {

//   $.fn.assemblyModal = function(method) {

//     var methods = {

//       init : function(options) {
//         this.assemblyModal.settings = $.extend({}, this.assemblyModal.defaults, options);
//         return this.each(function() {
//           var $element = $(this),
//             element = this;
//         });
//       },

//       show: function() {
//         return this.each(function() {
//           $(this).addClass('show');
//         });
//       },

//       hide: function() {
//         return this.each(function() {
//           $(this).removeClass('show');
//         });
//       }

//     }

//     if (methods[method]) {
//       return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
//     } else if (typeof method === 'object' || !method) {
//       return methods.init.apply(this, arguments);
//     } else {
//       $.error( 'Method "' +  method + '" does not exist in assemblyModal plugin!');
//     }

//   }

//   $.fn.assemblyModal.defaults = {
//     target: null
//   }

//   $.fn.assemblyModal.settings = {}

// })(jQuery);







;(function ( $, window, document, undefined ) {

  "use strict";

  var pluginName = "assemblyModal",
    defaults = {
      start: 0
    };

  function Plugin ( element, options ) {
    this.element = $(element);
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var plugin = this;

      // bind events
      this.element.click(function(){
        plugin.hide();
      });
      this.element.find('.assembly-modal-wrapper').click(function(e){
        e.stopPropagation();
      });

    },
    show: function() {
      this.element.addClass('show');
    },
    hide: function() {
      this.element.removeClass('show');
    }
  });

  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
      else if ($.isFunction(Plugin.prototype[options])) {
        $.data(this, 'plugin_' + pluginName)[options]();
      }
    });
  };

})( jQuery, window, document );

