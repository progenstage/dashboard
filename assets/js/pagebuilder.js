console.clear();
$.app = $.app || {};

$.app.uiDraggable = {
  init: function () {
    var _self = this;
    _self.dragElements = [];

    $("[draggable=true]").each(function () {
      $(this).on("dragstart", function () {
        _self.currentDragItem = $("#js-templates")
          .find('[data-label="' + $(this).data("template") + '"]')
          .clone()
          .html();
      });
    });

    this.resetHandleEvents();
  },
  resetHandleEvents: function () {
    var _self = this;
    $("[data-handle]").each(function (e) {
      var _this = this;
      $(this)
        .unbind("drop dragdrop dragover dragover dragleave")
        .on("drop dragdrop", function (e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).append(_self.currentDragItem);
          setTimeout(function () {
            _self.resetHandleEvents();
          }, 0);
        })
        .on("dragover dragenter", function (e) {
          e.preventDefault();
        })
        .on("dragover", function (e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).addClass("hover");
        })
        .on("dragleave drop dragdrop", function () {
          $("[data-handle]").removeClass("hover");
        });
    });
  },
  addTooltip: function (container) {
    $(".canvas").append($("#js-tooltip").clone().html());
  },
};

$(function () {
  $.app.uiDraggable.init();
});
