/* PageLines Platform - 5.0.132
* Built: Monday, March 21st, 2016, 21:26
* http://www.pagelines.com
* Copyright (c) 2016 PageLines; Licensed GPL-3.0 */
!function(a,b){var c,d='<a tabindex="0" class="wp-color-result" />',e='<div class="wp-picker-holder" />',f='<div class="wp-picker-container" />',g='<input type="button" class="button button-small hidden" />';c={options:{defaultColor:!1,change:!1,clear:!1,hide:!0,palettes:!0,width:255,mode:"hsv"},_create:function(){if(a.support.iris){var b=this,c=b.element;a.extend(b.options,c.data()),b.close=a.proxy(b.close,b),b.initialValue=c.val(),c.addClass("wp-color-picker").hide().wrap(f),b.wrap=c.parent(),b.toggler=a(d).insertBefore(c).css({backgroundColor:b.initialValue}).attr("title",wpColorPickerL10n.pick).attr("data-current",wpColorPickerL10n.current),b.pickerContainer=a(e).insertAfter(c),b.button=a(g),b.options.defaultColor?b.button.addClass("wp-picker-default").val(wpColorPickerL10n.defaultString):b.button.addClass("wp-picker-clear").val(wpColorPickerL10n.clear),c.wrap('<span class="wp-picker-input-wrap" />').after(b.button),c.iris({target:b.pickerContainer,hide:b.options.hide,width:b.options.width,mode:b.options.mode,palettes:b.options.palettes,change:function(c,d){b.toggler.css({backgroundColor:d.color.toString()}),a.isFunction(b.options.change)&&b.options.change.call(this,c,d)}}),c.val(b.initialValue),b._addListeners(),b.options.hide||b.toggler.click()}},_addListeners:function(){var b=this;b.wrap.on("click.wpcolorpicker",function(a){a.stopPropagation()}),b.toggler.click(function(){b.toggler.hasClass("wp-picker-open")?b.close():b.open()}),b.element.change(function(c){var d=a(this),e=d.val();""!==e&&"#"!==e||(b.toggler.css("backgroundColor",""),a.isFunction(b.options.clear)&&b.options.clear.call(this,c))}),b.toggler.on("keyup",function(a){13!==a.keyCode&&32!==a.keyCode||(a.preventDefault(),b.toggler.trigger("click").next().focus())}),b.button.click(function(c){var d=a(this);d.hasClass("wp-picker-clear")?(b.element.val(""),b.toggler.css("backgroundColor",""),a.isFunction(b.options.clear)&&b.options.clear.call(this,c)):d.hasClass("wp-picker-default")&&b.element.val(b.options.defaultColor).change()})},open:function(){this.element.show().iris("toggle").focus(),this.button.removeClass("hidden"),this.toggler.addClass("wp-picker-open"),a("body").trigger("click.wpcolorpicker").on("click.wpcolorpicker",this.close)},close:function(){this.element.hide(),this.element.iris("instance")&&this.element.iris("toggle"),this.button.addClass("hidden"),this.toggler.removeClass("wp-picker-open"),a("body").off("click.wpcolorpicker",this.close)},color:function(a){return a===b?this.element.iris("option","color"):void this.element.iris("option","color",a)},defaultColor:function(a){return a===b?this.options.defaultColor:void(this.options.defaultColor=a)}},a.widget("wp.wpColorPicker",c)}(jQuery);