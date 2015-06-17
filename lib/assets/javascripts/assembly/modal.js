;(function ( $, window, document, undefined ) {

  "use strict";

  var pluginName = "assemblyModal",
    defaults = {};

  function Plugin ( element, options ) {
    this.element = $(element);
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      this.initEvents();
    },
    initEvents: function() {
      var plugin = this;
      this.element.click(function(e){
        plugin.hide();
      });
      this.element.find('.assembly-modal-close').click(function(e){
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

