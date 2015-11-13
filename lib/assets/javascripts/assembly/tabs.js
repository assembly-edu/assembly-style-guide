;(function ( $, window, document, undefined ) {

  "use strict";

  var pluginName = "assemblyTabs",
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
      this.tabs = this.element.find("nav > ul > li");
      this.items = this.element.find(".tab-wrapper > .tab-content");
      this.current = -1;
      this.show();
      this.initEvents();
      this.tabs.has("a").css("padding", "0");
    },
    initEvents: function () {
      var self = this;
      var tab, _i, _len, _ref;
      _ref = this.tabs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tab = _ref[_i];
        $('.tabs nav').on('click', 'a', function(ev) {
          ev.preventDefault();
          return self.show($(this).parent().index());
        });
      }
    },
    show: function (idx) {
      if (this.current >= 0) {
        $(this.tabs.get(this.current)).removeClass("tab-current");
        $(this.items.get(this.current)).removeClass("tab-content-current");
      }
      this.current = (idx !== undefined ? idx : (this.settings.start >= 0 && this.settings.start < this.items.length ? this.settings.start : 0));
      $(this.tabs.get(this.current)).addClass("tab-current");
      $(this.items.get(this.current)).addClass("tab-content-current");
    }
  });

  $.fn[ pluginName ] = function ( options ) {
    var args = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
      else if ($.isFunction(Plugin.prototype[options])) {
        var plugin = $.data(this, 'plugin_' + pluginName);
        plugin[options].apply(plugin, args);
      }
    });
  };

})( jQuery, window, document );