!function(t){var e={};function o(i){if(e[i])return e[i].exports;var l=e[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(i,l,function(e){return t[e]}.bind(null,l));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(t,e,o){"use strict";e.__esModule=!0,e.$load=function(t){return $(t)},e.$class=function(t){return t.substr(1)};var i=function(){function t(){}return t.alert=".alert",t.alertConfirm=".alert input[type='button']",t.alertDonate=".alert-donate",t.alertDonateCancel=".alert-donate input[value='Cancel']",t.alertDonateConfirm=".alert-donate input[value='Donate']",t.alertDonateForm="form",t.menuIcon="header img[alt='Help']",t.menuDonate="header img[alt='Donate']",t.menuTwitter="header img[alt='Twitter']",t.menuYoutube="header img[alt='YouTube']",t.menuFooter="footer",t.lcd=".lcd",t.lcdCells=".lcd-cell",t.lcdSelectedCell=".lcd-cell-selected",t.lcdPixels="td",t.lcdLedRed=".lcd-options__led-red",t.lcdLedGreen=".lcd-options__led-green",t.lcdLedBlue=".lcd-options__led-blue",t.lcdBacklightDefault=".lcd-backlight-default",t.lcdBacklightRed=".lcd-backlight-red",t.lcdBacklightGreen=".lcd-backlight-green",t.lcdBacklightYellow=".lcd-backlight-yellow",t.lcdBacklightBlue=".lcd-backlight-blue",t.lcdBacklightPink=".lcd-backlight-pink",t.lcdBacklightCyan=".lcd-backlight-cyan",t.lcdBacklightWhite=".lcd-backlight-white",t.lcdShiftUp=".lcd-options__shift-up",t.lcdShiftDown=".lcd-options__shift-down",t.lcdShiftLeft=".lcd-options__shift-left",t.lcdShiftRight=".lcd-options__shift-right",t.editor=".editor",t.editorRow=".editor-row",t.editorPixels=".editor-pixel",t.editorPixelsOn=".editor-pixel-on",t.editorName=".editor-area input",t.editorOptions=".editor-options img",t.editorClear=".editor-options img[title='Clear']",t.editorInvert=".editor-options img[title='Invert']",t.editorFlipHorizontal=".editor-options img[title='Flip horizontal']",t.editorFlipVertical=".editor-options img[title='Flip vertical']",t.editorCopy=".editor-options img[title='Copy']",t.editorPaste=".editor-options img[title='Paste']",t.editorCut=".editor-options img[title='Cut']",t.editorShiftUp=".editor__shift-up",t.editorShiftDown=".editor__shift-down",t.editorShiftLeft=".editor__shift-left",t.editorShiftRight=".editor__shift-right",t.editorGoBack=".editor__arrow-back",t.editorGoForward=".editor__arrow-forward",t.editorArrowOff=".editor__arrow-off",t.codeOptions=".code-options",t.codeFileName=".code-unit > input",t.codeArea=".code-area",t.codeAreaImports="#imports",t.codeAreaChars="#chars",t.codeAreaSetup="#setup",t.codeAreaLoop="#loop",t.codeOptionsIcon=".code-header img[title='Options']",t.codeCopy=".code-header img[alt='Copy']",t.codeCopyMsg=".code-area__copy",t.codeOptAll=".code-options input",t.codeOptHexadecimal=".code-options input[name='cbHexadecimal']",t.codeOptSingleLine=".code-options input[name='cbSingleLine']",t.codeOptAllChars=".code-options input[name='cbAllChars']",t}();e.Dom=i},function(t,e,o){"use strict";e.__esModule=!0;var i=o(7),l=o(0),r=function(){function t(t,e,o){this.cellID=t,this.rows=e,this.columns=o,this.name="name"+t,this.pixels=this.createCell(e,o)}return t.prototype.createCell=function(t,e){for(var o=[],l=0;l<t;l++){for(var r=[],s=0;s<e;s++){var n=this.cellID+"-"+l+"x"+s,a=new i.Pixel(n);r.push(a)}o.push(r)}return o},t.prototype.getID=function(){return this.cellID},t.prototype.getPixel=function(t,e){return this.pixels[t][e]},t.prototype.getRows=function(){return this.rows},t.prototype.getColumns=function(){return this.columns},t.prototype.getName=function(){return this.name},t.prototype.getPixelStates=function(){for(var t=[],e=0;e<this.rows;e++){for(var o=[],i=0;i<this.columns;i++){var l=this.getPixel(e,i).getState();o.push(l)}t.push(o)}return t},t.prototype.setSelectedCell=function(){var t=l.$class(l.Dom.lcdSelectedCell);l.$load(l.Dom.lcdSelectedCell).removeClass(t);var e="#"+this.getID();$(e).addClass(t)},t.prototype.setName=function(t){this.name=t},t.prototype.isEmpty=function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.columns;e++){if(this.getPixel(t,e).getState())return!1}return!0},t.prototype.clear=function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.columns;e++){this.getPixel(t,e).setState(!1)}},t.prototype.invert=function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.columns;e++){this.getPixel(t,e).toggleState()}},t.prototype.flipHorizontal=function(){for(var t=Math.round(this.columns/2),e=0;e<this.rows;e++)for(var o=0;o<t;o++){var i=this.getPixel(e,o),l=this.getPixel(e,this.columns-1-o),r=i.getState();i.setState(l.getState()),l.setState(r)}},t.prototype.flipVertical=function(){for(var t=Math.round(this.rows/2),e=0;e<t;e++)for(var o=0;o<this.columns;o++){var i=this.getPixel(e,o),l=this.getPixel(this.rows-1-e,o),r=i.getState();i.setState(l.getState()),l.setState(r)}},t.prototype.shiftRight=function(){for(var t=0;t<this.rows;t++)for(var e=this.getPixel(t,this.columns-1).getState(),o=0;o<this.columns;o++){var i=this.getPixel(t,o),l=i.getState();i.setState(e),e=l}},t.prototype.shiftLeft=function(){for(var t=0;t<this.rows;t++)for(var e=this.getPixel(t,0).getState(),o=this.columns-1;o>=0;o--){var i=this.getPixel(t,o),l=i.getState();i.setState(e),e=l}},t.prototype.shiftDown=function(){for(var t=0;t<this.columns;t++)for(var e=this.getPixel(this.rows-1,t).getState(),o=0;o<this.rows;o++){var i=this.getPixel(o,t),l=i.getState();i.setState(e),e=l}},t.prototype.shiftUp=function(){for(var t=0;t<this.columns;t++)for(var e=this.getPixel(0,t).getState(),o=this.rows-1;o>=0;o--){var i=this.getPixel(o,t),l=i.getState();i.setState(e),e=l}},t.prototype.copyPixels=function(t){for(var e=0;e<this.rows;e++)for(var o=0;o<this.columns;o++){var i=this.getPixel(e,o);i.getState()!=t.getPixel(e,o).getState()&&i.toggleState()}},t}();e.Cell=r},function(t,e,o){"use strict";e.__esModule=!0;var i=o(1),l=function(){function t(t,e,o,i){this.rows=t,this.columns=e,this.cellRows=o,this.cellColumns=i,this.cells=this.createLcd(t,e,o,i)}return t.prototype.getRows=function(){return this.rows},t.prototype.getColumns=function(){return this.columns},t.prototype.getCellRows=function(){return this.cellRows},t.prototype.getCellColumns=function(){return this.cellColumns},t.prototype.getCell=function(t,e){return this.cells[t][e]},t.prototype.createLcd=function(t,e,o,l){for(var r=[],s=0;s<t;s++){for(var n=[],a=0;a<e;a++){var c=s+"x"+a,h=new i.Cell(c,o,l);n.push(h)}r.push(n)}return r},t.prototype.shiftRight=function(){for(var t=new i.Cell("last",this.cellRows,this.cellColumns),e=new i.Cell("swap",this.cellRows,this.cellColumns),o=0;o<this.rows;o++)for(var l=0;l<this.columns;l++){var r=this.getCell(o,l),s=this.getCell(o,l-1);void 0===s?s=this.getCell(o,this.columns-1):(e.copyPixels(t),s=e),t.copyPixels(r);for(var n=0;n<this.cellRows;n++)for(var a=s.getPixel(n,this.cellColumns-1).getState(),c=0;c<this.cellColumns;c++){var h=r.getPixel(n,c),d=h.getState();h.setState(a),a=d}}},t.prototype.shiftLeft=function(){for(var t=new i.Cell("last",this.cellRows,this.cellColumns),e=new i.Cell("swap",this.cellRows,this.cellColumns),o=0;o<this.rows;o++)for(var l=this.columns-1;l>=0;l--){var r=this.getCell(o,l),s=this.getCell(o,l+1);void 0===s?s=this.getCell(o,0):(e.copyPixels(t),s=e),t.copyPixels(r);for(var n=0;n<this.cellRows;n++)for(var a=s.getPixel(n,0).getState(),c=this.cellColumns-1;c>=0;c--){var h=r.getPixel(n,c),d=h.getState();h.setState(a),a=d}}},t.prototype.shiftUp=function(){for(var t=new i.Cell("last",this.cellRows,this.cellColumns),e=new i.Cell("swap",this.cellRows,this.cellColumns),o=0;o<this.columns;o++)for(var l=this.rows-1;l>=0;l--){var r=this.getCell(l,o),s=l==this.rows-1?this.getCell(0,o):this.getCell(l+1,o);l!==this.rows-1&&(e.copyPixels(t),s=e),t.copyPixels(r);for(var n=0;n<this.cellColumns;n++)for(var a=s.getPixel(0,n).getState(),c=this.cellRows-1;c>=0;c--){var h=r.getPixel(c,n),d=h.getState();h.setState(a),a=d}}},t.prototype.shiftDown=function(){for(var t=new i.Cell("last",this.cellRows,this.cellColumns),e=new i.Cell("swap",this.cellRows,this.cellColumns),o=0;o<this.columns;o++)for(var l=0;l<this.rows;l++){var r=this.getCell(l,o),s=0==l?this.getCell(this.rows-1,o):this.getCell(l-1,o);0!==l&&(e.copyPixels(t),s=e),t.copyPixels(r);for(var n=0;n<this.cellColumns;n++)for(var a=s.getPixel(this.cellRows-1,n).getState(),c=0;c<this.cellRows;c++){var h=r.getPixel(c,n),d=h.getState();h.setState(a),a=d}}},t.prototype.copyCells=function(t){for(var e=0;e<this.rows;e++)for(var o=0;o<this.columns;o++){var i=this.getCell(e,o),l=t.getCell(e,o);i.copyPixels(l)}},t}();e.Lcd=l},function(t,e,o){"use strict";e.__esModule=!0;var i=o(4),l=o(10),r=o(0);$((function(){var t=$(r.Dom.alert);$(r.Dom.alertConfirm).click((function(){t.remove()}));var e=r.$load(r.Dom.menuIcon),o=r.$load(r.Dom.menuFooter);o.hide(),o.css({visibility:"visible"}),e.click((function(){o.slideToggle("slow")}));var s=$(r.Dom.menuDonate),n=$(r.Dom.alertDonate);s.click((function(){n.css("display","flex")})),$(r.Dom.alertDonateCancel).click((function(){n.css("display","none")}));var a=$(r.Dom.alertDonateConfirm),c=$(r.Dom.alertDonateForm);a.click((function(){c.submit()})),$(r.Dom.menuYoutube).click((function(){window.open("https://www.youtube.com/channel/UCbfi76FKiA7yFaKeRHuRCWg","_blank")})),$(r.Dom.menuTwitter).click((function(){window.open("https://twitter.com/intent/tweet?url=https://chareditor.com/&text=This%20online%20editor%20lets%20you%20create%20custom%20characters%20for%20your%20%23Arduino%2016x2%20LCD.%20Loving%20%40ChareditorLCD%20by%20%40alestiago3,%20access%20the%20editor%20at%20&original_referer=https://chareditor.com/","_blank")}));var h=new i.MasterLcd(2,16,8,5),d=new l.Code("sketch",h),u=h.getEditor(),p=h.getBacklight(),f=h.getHistory();r.$load(r.Dom.lcdCells).click((function(){var t=this.id,e=parseInt(t.split("x")[0]),o=parseInt(t.split("x")[1]);h.setSelectedCell(e,o),d.writeChars()})),$(r.Dom.lcdLedRed).click((function(){p.toggleRed(),d.writeCode()})),$(r.Dom.lcdLedGreen).click((function(){p.toggleGreen(),d.writeCode()})),$(r.Dom.lcdLedBlue).click((function(){p.toggleBlue(),d.writeCode()})),$(r.Dom.lcdShiftRight).click((function(){f.pushPast(h),h.shiftRight(),d.writeChars();var t=h.getSelectedCell();u.loadCell(t)})),$(r.Dom.lcdShiftLeft).click((function(){f.pushPast(h),h.shiftLeft(),d.writeChars();var t=h.getSelectedCell();u.loadCell(t)})),$(r.Dom.lcdShiftUp).click((function(){f.pushPast(h),h.shiftUp(),d.writeChars();var t=h.getSelectedCell();u.loadCell(t)})),$(r.Dom.lcdShiftDown).click((function(){f.pushPast(h),h.shiftDown(),d.writeChars();var t=h.getSelectedCell();u.loadCell(t)}));var g=r.$load(r.Dom.editorName);g.on("input",(function(){var t=h.getSelectedCell(),e=String(g.val());t.setName(e),d.writeChars()})),r.$load(r.Dom.editorPixels).click((function(){f.pushPast(h);var t=r.$class(r.Dom.editorPixelsOn);$(this).toggleClass(t);var e=this.id,o=parseInt(e.split("e")[0]),i=parseInt(e.split("e")[1]);h.getSelectedCell().getPixel(o,i).toggleState(),d.writeChars()})),$(r.Dom.editorGoBack).click((function(){f.popPast(h);var t=h.getSelectedCell();u.loadCell(t),d.writeChars()})),$(r.Dom.editorGoForward).click((function(){f.popFuture(h);var t=h.getSelectedCell();u.loadCell(t),d.writeChars()})),r.$load(r.Dom.editorOptions).click((function(){d.writeChars()})),r.$load(r.Dom.editorClear).click((function(){f.pushPast(h),h.getSelectedCell().clear(),u.clear(),d.writeChars()})),r.$load(r.Dom.editorInvert).click((function(){f.pushPast(h);var t=h.getSelectedCell();t.invert(),u.loadCell(t),d.writeChars()})),r.$load(r.Dom.editorFlipHorizontal).click((function(){f.pushPast(h);var t=h.getSelectedCell();t.flipHorizontal(),u.loadCell(t),d.writeChars()})),$(r.Dom.editorFlipVertical).click((function(){f.pushPast(h);var t=h.getSelectedCell();t.flipVertical(),u.loadCell(t),d.writeChars()})),r.$load(r.Dom.editorCopy).click((function(){u.copy(),d.writeChars()})),r.$load(r.Dom.editorPaste).click((function(){f.pushPast(h),u.paste(),d.writeChars()})),r.$load(r.Dom.editorCut).click((function(){f.pushPast(h),u.cut(),d.writeChars()})),$(r.Dom.editorShiftUp).click((function(){f.pushPast(h);var t=h.getSelectedCell();t.shiftUp(),u.loadCell(t),d.writeChars()})),$(r.Dom.editorShiftDown).click((function(){f.pushPast(h);var t=h.getSelectedCell();t.shiftDown(),u.loadCell(t),d.writeChars()})),$(r.Dom.editorShiftLeft).click((function(){f.pushPast(h);var t=h.getSelectedCell();t.shiftLeft(),u.loadCell(t),d.writeChars()})),$(r.Dom.editorShiftRight).click((function(){f.pushPast(h);var t=h.getSelectedCell();t.shiftRight(),u.loadCell(t),d.writeChars()}));var m=r.$load(r.Dom.codeOptionsIcon),C=r.$load(r.Dom.codeOptions);m.click((function(){C.slideToggle("fast")})),r.$load(r.Dom.codeOptAll).click((function(){d.writeCode()})),$(r.Dom.codeCopy).click((function(){d.copyToClipboard()})),r.$load(r.Dom.codeFileName).on("input",(function(){var t=String(g.val());d.setFileName(t)}));var v=r.$load(r.Dom.codeFileName);v.on("input",(function(){var t=parseFloat(v.css("font-size"))/2,e=parseFloat(v.css("max-width")),o=String(v.val()),i=(o.length+1)*t;i>e&&(i=e,v.val(o.substr(0,o.length-1))),v.css("width",i+"px")}))}))},function(t,e,o){"use strict";var i,l=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var r=o(5),s=o(0),n=o(8),a=o(9),c=function(t){function e(e,o,i,l){var s=t.call(this,e,o,i,l)||this;return s.selectedCell=s.getCell(0,0),s.loadDisplay(),s.editor=new r.Editor(s.selectedCell),s.editor.loadName(s.selectedCell),s.backlight=new n.Backlight(!1,!1,!1),s.history=new a.LcdHistory,s}return l(e,t),e.prototype.getEditor=function(){return this.editor},e.prototype.getBacklight=function(){return this.backlight},e.prototype.getSelectedCell=function(){return this.selectedCell},e.prototype.getHistory=function(){return this.history},e.prototype.setSelectedCell=function(t,e){this.selectedCell=this.getCell(t,e),this.selectedCell.setSelectedCell(),this.editor.loadName(this.getSelectedCell()),this.editor.loadCell(this.getSelectedCell())},e.prototype.loadDisplay=function(){for(var t="",e=0;e<this.getRows();e++){for(var o="<div class='lcd-row'>",i=0;i<this.getColumns();i++){for(var l=e+"x"+i,r="<table id="+l+" class='lcd-cell'>",n=0;n<this.getCellRows();n++){r+="<tr>";for(var a=0;a<this.getCellColumns();a++){r+='<td id="'+(l+"-"+n+"x"+a)+'"></td>'}r+="</tr>"}o+=r+="</table>"}t+=o+="</div>"}s.$load(s.Dom.lcd).append(t),this.selectedCell.setSelectedCell()},e}(o(2).Lcd);e.MasterLcd=c},function(t,e,o){"use strict";e.__esModule=!0;var i=o(0),l=o(6),r=function(){function t(t){this.editorPixelsClass=i.$class(i.Dom.editorPixels),this.editorRowClass=i.$class(i.Dom.editorRow),this.editorPixelOnClass=i.$class(i.Dom.editorPixelsOn),this.$name=i.$load(i.Dom.editorName),this.cell=t;var e=t.getRows(),o=t.getColumns();this.loadEditor(e,o),this.clipboard=new l.EditorClipboard(e,o)}return t.prototype.clear=function(){var t=i.$load(i.Dom.editorPixelsOn),e=i.$class(i.Dom.editorPixelsOn);t.removeClass(e)},t.prototype.loadName=function(t){var e=t.getName();this.$name.val(e)},t.prototype.loadCell=function(t){this.cell=t;for(var e=t.getRows(),o=t.getColumns(),i=0;i<e;i++)for(var l=0;l<o;l++){var r="#"+i+"e"+l;t.getPixel(i,l).getState()?$(r).addClass(this.editorPixelOnClass):$(r).removeClass(this.editorPixelOnClass)}},t.prototype.update=function(){this.loadCell(this.cell)},t.prototype.paste=function(){this.cell.copyPixels(this.clipboard.getCell()),this.update()},t.prototype.copy=function(){this.clipboard.setCell(this.cell)},t.prototype.cut=function(){this.copy(),this.cell.clear(),this.update()},t.prototype.loadEditor=function(t,e){for(var o="",l=0;l<t;l++){for(var r="<div class='"+this.editorRowClass+"'>",s=0;s<e;s++){r+='<div id="'+(l+"e"+s)+'" class="'+this.editorPixelsClass+'"></div>'}o+=r+="</div>"}$(i.Dom.editor).append(o)},t}();e.Editor=r},function(t,e,o){"use strict";e.__esModule=!0;var i=o(1),l=function(){function t(t,e){this.cell=new i.Cell("clipboard",t,e)}return t.prototype.getCell=function(){return this.cell},t.prototype.setCell=function(t){this.cell.copyPixels(t)},t}();e.EditorClipboard=l},function(t,e,o){"use strict";e.__esModule=!0;var i=function(){function t(t){this.pixelID=t,this.state=!1}return t.prototype.toggleState=function(){this.state=!this.state,this.setState(this.getState())},t.prototype.setState=function(t){this.state=t;var e=$(this.getDom());t?e.css("background-color","white"):e.css("background-color","")},t.prototype.getDom=function(){return"#"+this.getID()},t.prototype.getID=function(){return this.pixelID},t.prototype.getState=function(){return this.state},t}();e.Pixel=i},function(t,e,o){"use strict";e.__esModule=!0;var i=o(0),l=function(){function t(t,e,o){this.$red=$(i.Dom.lcdLedRed),this.$green=$(i.Dom.lcdLedGreen),this.$blue=$(i.Dom.lcdLedBlue),this.$background=$(i.Dom.lcd),this.$foreground=$(i.Dom.lcdPixels),this.red=t,this.green=e,this.blue=o,this.setLed(this.$red,this.red),this.setLed(this.$green,this.green),this.setLed(this.$blue,this.blue)}return t.prototype.setLed=function(t,e){e?(t.css("opacity","1"),t.children().show()):(t.css("opacity","0.6"),t.children().hide()),this.setBacklight()},t.prototype.getValue=function(){var t=0;return t+=this.red?1:0,t+=this.green?2:0,t+=this.blue?4:0},t.prototype.toggleRed=function(){this.red=!this.red,this.setLed(this.$red,this.red)},t.prototype.toggleGreen=function(){this.green=!this.green,this.setLed(this.$green,this.green)},t.prototype.toggleBlue=function(){this.blue=!this.blue,this.setLed(this.$blue,this.blue)},t.prototype.changeBacklight=function(t){var e=t;this.$foreground.removeClass(),this.$foreground.addClass(i.$class(e));var o=$(e).css("color");this.$background.css("background",o)},t.prototype.setBacklight=function(){var t=this.getValue(),e=i.Dom.lcdBacklightDefault;switch(t){case 0:break;case 1:e=i.Dom.lcdBacklightRed;break;case 2:e=i.Dom.lcdBacklightGreen;break;case 3:e=i.Dom.lcdBacklightYellow;break;case 4:e=i.Dom.lcdBacklightBlue;break;case 5:e=i.Dom.lcdBacklightPink;break;case 6:e=i.Dom.lcdBacklightCyan;break;case 7:e=i.Dom.lcdBacklightWhite}this.changeBacklight(e)},t}();e.Backlight=l},function(t,e,o){"use strict";e.__esModule=!0;var i=o(2),l=o(0),r=function(){function t(){this.pastStackLimit=15,this.futureStackLimit=15,this.pastStack=[],this.futureStack=[],this.showEmpty($(l.Dom.editorGoBack)),this.showEmpty($(l.Dom.editorGoForward))}return t.prototype.isEmpty=function(t){return 0===t.length},t.prototype.showEmpty=function(t){t.addClass(l.$class(l.Dom.editorArrowOff))},t.prototype.show=function(t){t.removeClass(l.$class(l.Dom.editorArrowOff))},t.prototype.lcdSnapshot=function(t){var e=new i.Lcd(t.getRows(),t.getColumns(),t.getCellRows(),t.getCellColumns());return e.copyCells(t),e},t.prototype.pushPast=function(t){this.isEmpty(this.pastStack)&&this.show($(l.Dom.editorGoBack)),this.pastStack.push(this.lcdSnapshot(t)),this.pastStack.length>this.pastStackLimit&&this.pastStack.shift()},t.prototype.pushFuture=function(t){this.isEmpty(this.futureStack)&&this.show($(l.Dom.editorGoForward)),this.futureStack.push(this.lcdSnapshot(t)),this.futureStack.length>this.futureStackLimit&&this.futureStack.shift()},t.prototype.popPast=function(t){var e=this.pastStack.pop();this.isEmpty(this.pastStack)&&this.showEmpty($(l.Dom.editorGoBack)),void 0!==e&&(this.pushFuture(this.lcdSnapshot(t)),t.copyCells(e))},t.prototype.popFuture=function(t){var e=this.futureStack.pop();this.isEmpty(this.futureStack)&&this.showEmpty($(l.Dom.editorGoForward)),void 0!==e&&(this.pushPast(this.lcdSnapshot(t)),t.copyCells(e))},t}();e.LcdHistory=r},function(t,e,o){"use strict";e.__esModule=!0;var i=o(0),l=function(){function t(t,e){this.$codeArea=i.$load(i.Dom.codeArea),this.$imports=i.$load(i.Dom.codeAreaImports),this.$chars=i.$load(i.Dom.codeAreaChars),this.$setup=i.$load(i.Dom.codeAreaSetup),this.$loop=i.$load(i.Dom.codeAreaLoop),this.newLine="<br>",this.tab="&nbsp;&nbsp;",this.linetab=this.newLine+this.tab,this.closingBracket=this.newLine+"}",this.fileName=t,this.lcd=e,this.writeCode()}return t.prototype.getFileName=function(){return this.fileName},t.prototype.setFileName=function(t){this.fileName=t},t.prototype.empty=function(t){this.write("",t)},t.prototype.write=function(t,e){e.empty(),this.append(t,e)},t.prototype.append=function(t,e){t=this.colorize(t),e.append(t)},t.prototype.writeCode=function(){this.writeImports(),this.writeSetup(),this.writeLoop(),this.writeChars()},t.prototype.removeClosingBracket=function(t){var e=t.html();e=e.slice(0,-this.closingBracket.length)+this.linetab,this.write(e,t)},t.prototype.addClosingBracket=function(t){this.append(this.closingBracket,t)},t.prototype.appendToArea=function(t,e){this.removeClosingBracket(e);var o=t.join(this.linetab);this.append(o,e),this.addClosingBracket(e)},t.prototype.writeImports=function(){var t=["#include &lt;Wire.h>","#include &lt;Adafruit_RGBLCDShield.h>","#include &lt;utility/Adafruit_MCP23017.h>","Adafruit_RGBLCDShield lcd = Adafruit_RGBLCDShield();"].join(this.newLine)+this.newLine;this.write(t,this.$imports)},t.prototype.writeSetup=function(){var t="void setup() {"+this.linetab,e=["lcd.begin(16, 2);"],o=this.lcd.getBacklight().getValue(),i=0==o?"":"lcd.setBacklight("+o+");";i&&e.push(i),t+=e.join(this.linetab)+this.closingBracket,this.write(t,this.$setup)},t.prototype.createChar=function(t,e){var o=t.getName(),i=t.getID(),l=i.split("x")[0],r=i.split("x")[1],s=["","lcd.createChar("+e+", "+o+");","lcd.setCursor("+r+", "+l+");","lcd.write("+e+");"];"0"===l&&"0"===r&&s.splice(2,1),this.appendToArea(s,this.$setup)},t.prototype.writeLoop=function(){this.write("void loop() {};",this.$loop)},t.prototype.writeChars=function(){var t=$(i.Dom.codeOptAllChars).is(":checked");this.empty(this.$chars),this.empty(this.$setup),this.writeSetup(),this.writeChar(this.lcd.getSelectedCell(),0),t&&this.writeAllChars()},t.prototype.writeAllChars=function(){for(var t=this.lcd.getRows(),e=this.lcd.getColumns(),o=1,i=0;i<t;i++)for(var l=0;l<e;l++){var r=this.lcd.getCell(i,l);r!==this.lcd.getSelectedCell()&&(r.isEmpty()||this.writeChar(r,o++))}},t.prototype.writeChar=function(t,e){var o=$(i.Dom.codeOptHexadecimal).is(":checked"),l=$(i.Dom.codeOptSingleLine).is(":checked"),r=o?this.getCellHex(t):this.getCellBinary(t);r=l?r:this.tabulateCellCode(r),r=this.getCellDeclaration(t)+r+this.newLine,this.append(r,this.$chars),this.createChar(t,e)},t.prototype.getCellDeclaration=function(t){return"byte "+t.getName()+"[] = "},t.prototype.getCellBinary=function(t){for(var e=t.getRows(),o=t.getColumns(),i="{",l=0;l<e;l++){i+=" B";for(var r=0;r<o;r++){i+=t.getPixel(l,r).getState()?"1":"0"}l!=e-1&&(i+=",")}return i+=" };"},t.prototype.getCellHex=function(t){for(var e=t.getRows(),o=t.getColumns(),i="{",l=0;l<e;l++){i+=" 0x";for(var r="",s=0;s<o;s++){r+=t.getPixel(l,s).getState()?"1":"0"}var n=parseInt(r,2).toString(16).toUpperCase();1==n.length&&(n="0"+n),i+=n,l!=e-1&&(i+=",")}return i+=" };"},t.prototype.tabulateCellCode=function(t){var e=(t=t.substr(1,t.length-4)).split(" ");return t="{"+e.join(this.linetab)+this.newLine+"};"+this.newLine},t.prototype.addColor=function(t,e){return'<span style="color: '+e+'">'+t+"</span>"},t.prototype.colorize=function(t){for(var e=/^(byte|void)$/,o=/^(setup|loop)\(\)$/,i=/^.*(lcd\.).*$/,l=/^.*(#include|#define)$/,r=[],s=t.split(" "),n=s.length,a=0;a<n;a++){var c=s[a];if(c.match(e))c=this.addColor(c,"#119EA2"),r.push(c);else if(c.match(o)){var h=c.substr(0,c.length-2);c=this.addColor(h,"#707C3F"),c+="()",r.push(c)}else if(c.match(i)){var d=c.indexOf("."),u=c.indexOf("("),p=c.slice(0,d),f=c.slice(d,u),g=c.slice(u);c=p+(c=this.addColor(f,"#E97339"))+g,r.push(c)}else if(c.match(l)){var m=c.indexOf("#"),C=(p=c.slice(0,m),c.slice(m));c=p+(c=this.addColor(C,"#5E6D03")),r.push(c)}else r.push(c)}return t=r.join(" ")},t.prototype.copyToClipboard=function(){var t=this.$codeArea[0],e=document.createRange();e.selectNodeContents(t);var o=window.getSelection();null!==o&&(o.removeAllRanges(),o.addRange(e),document.execCommand("copy"),o.removeAllRanges());var l=$(i.Dom.codeCopyMsg);return l.show(),l.fadeOut(1e3),!1},t}();e.Code=l}]);