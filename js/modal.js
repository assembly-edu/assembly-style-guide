// ;(function ( $, window, document, undefined ) {

//   "use strict";

//     var pluginName = "assemblyModal",
//       defaults = {
//         start: 0
//       };

//     function AssemblyModal ( element, options ) {
//       this.element = $(element);
//       this.settings = $.extend( {}, defaults, options );
//       this._defaults = defaults;
//       this._name = pluginName;
//       this.init();
//     }

//     $.extend(AssemblyModal.prototype, {
//       init: function () {
//         this.tabs = $(this.element).find("nav > ul > li");
//         this.items = $(this.element).find(".tab-wrapper > .tab-content");
//         this.current = -1
//         this.show();
//       },
//       show: function () {
//         this.element.addClass('show');
//       },
//       hide: function () {
//         this.element.addClass('hide');
//       }
//     });

//     $.fn[ pluginName ] = function ( options ) {
//       return this.each(function() {
//         if ( !$.data( this, "plugin_" + pluginName ) ) {
//           $.data( this, "plugin_" + pluginName, new AssemblyModal( this, options ) );
//         }
//       });
//     };

// })( jQuery, window, document );







(function($) {

  $.fn.assemblyModal = function(method) {

    var methods = {

      init : function(options) {
        this.assemblyModal.settings = $.extend({}, this.assemblyModal.defaults, options);
        return this.each(function() {
          var $element = $(this), // reference to the jQuery version of the current DOM element
            element = this;      // reference to the actual DOM element
        });

      },

      // a public method. for demonstration purposes only - remove it!
      show: function() {
        return this.each(function() {
          $(this).addClass('show');
        });
      },
      hide: function() {
        return this.each(function() {
          $(this).removeClass('show');
        });
      }

    }

    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error( 'Method "' +  method + '" does not exist in assemblyModal plugin!');
    }

  }

  $.fn.assemblyModal.defaults = {
    foo: 'bar'
  }

  $.fn.assemblyModal.settings = {}

})(jQuery);