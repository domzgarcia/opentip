(function($) {
  $.domReady(function() {
    var scrolled = false;
    var bod = $(document.body);

    Opentip.styles.logo = {
      className: "logo",
      borderWidth: false,
      background: [ [ 0, "#ACE5AE" ], [ 0.5, "#B1EAB3" ], [ 0.5, "#ADE6AF" ], [ 1, "#ADE6AF" ] ],
      shadowColor: "rgba(0, 0, 0, 0.15)",
      stemLength: 3,
      showOn: "creation",
      target: true,
      autoOffset: false,
      borderRadius: 15,
      offset: [ -40, -50 ]
    };

    var logoOpentip = new Opentip("#logo", "2.0", { style: "logo" })

    $(document).scroll(function() {
      var scrollTop = bod.scrollTop();
      if (scrollTop > 0) {
        logoOpentip.hide();
      }
      else {
        logoOpentip.show();
      }
      if (scrollTop > 85) {
        if (scrolled) return;
        scrolled = true;
        bod.addClass("scroll");
      }
      else {
        if (!scrolled) return;
        scrolled = false;
        bod.removeClass("scroll");
      }
    });


    var boxes = $("#demo-boxes");
    if (boxes.length) {
      // Styles
      Opentip.styles.drop = {
        className: "drop",
        borderWidth: 1,
        stemLength: 12,
        stemBase: 16,
        borderRadius: 20,
        borderColor: "#c3e0e6",
        background: [ [ 0, "#f1f7f0" ], [ 1, "#d3f0f6" ] ]
      };

      var box = boxes.find(".styles.box");
      box.opentip("Normal style", { target: true, tipJoint: "left", targetJoint: "bottom right", containInViewport: false });
      box.opentip("Alert style", { style: "alert", target: true, tipJoint: "left", targetJoint: "right", containInViewport: false });
      box.opentip("Dark style", { style: "dark", target: true, tipJoint: "left", targetJoint: "top right", containInViewport: false });
      box.opentip("Glass style", { style: "glass", target: true, tipJoint: "top", targetJoint: "bottom", containInViewport: false });
      box.opentip("drop", { style: "drop", target: true, tipJoint: "bottom", targetJoint: "top", containInViewport: false });

      // Joints and targets
      var box = boxes.find(".joints-and-targets.box");
      box.opentip("This tooltip has the «AJAX» box as target.<br />The <strong>tipJoint</strong> is \"top right\", and the <strong>targetJoint</strong> is \"bottom left\".", { target: ".ajax.box", tipJoint: "top right", stemLength: 15, stemBase: 10 });

      // AJAX
      var box = boxes.find(".ajax.box");
      box.opentip({ ajax: "ajax.txt" });

      // Stems
      var box = boxes.find(".stems.box");
      Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
      };
      box.opentip("Stems...", { style: "stemsDemo", tipJoint: "bottom", stem: "bottom right", stemLength: 10, stemBase: 30 });
      box.opentip("...are...", { style: "stemsDemo", tipJoint: "left", stem: "left", stemLength: 20, stemBase: 10 });
      box.opentip("...very...", { style: "stemsDemo", tipJoint: "right", stem: "bottom" });
      box.opentip("...cool", { style: "stemsDemo", tipJoint: "top right", stem: "top right", stemLength: 30, stemBase: 20 });
    }

  });
})(ender)