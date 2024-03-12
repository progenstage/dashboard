$(function () {
  var e = 480;
  var t = 2024;
  var n = 3;
  var r = [];
  var i = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  var s = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var o = "#007a9a"; // Set the color for all months
  var u = $("#calendar");
  var a = u.find("#calendar_header");
  var f = u.find("#calendar_weekdays");
  var l = u.find("#calendar_content");

  // Define the special days and their corresponding backgrounds, types, and tooltip details
  var specialDays = [
    {
      day: 10,
      type: "upcoming",
      background: "#7ae582",
      tooltip: { name: "John Doe", visitHour: "10:00 AM", dayName: "Upcoming" },
    },
    {
      day: 15,
      type: "passed",
      background: "#ffe37a",
      tooltip: { name: "Jane Smith", visitHour: "02:30 PM", dayName: "Passed" },
    },
    {
      day: 20,
      type: "confirmed",
      background: "#85a1ef",
      tooltip: {
        name: "Alice Johnson",
        visitHour: "09:15 AM",
        dayName: "Confirmed",
      },
    },
  ];

  function c() {
    p();
    var e = h();
    var r = 0;
    var u = false;
    l.empty();
    while (!u) {
      if (s[r] == e[0].weekday) {
        u = true;
      } else {
        l.append('<div class="blank"></div>');
        r++;
      }
    }
    for (var c = 0; c < 42 - r; c++) {
      if (c >= e.length) {
        l.append('<div class="blank"></div>');
      } else {
        var v = e[c].day;
        var m = '<div class="day">';

        // Check if the day is a special day
        var specialDay = specialDays.find((day) => day.day === v);
        if (specialDay) {
          var circleClass =
            specialDay.type === "upcoming"
              ? "upcoming-circle"
              : specialDay.type === "passed"
              ? "passed-circle"
              : "confirmed-circle";
          m =
            '<div class="special-day ' +
            circleClass +
            '" style="background-color: ' +
            specialDay.background +
            '" title="' +
            generateTooltipText(specialDay.tooltip) +
            '">';
        }

        l.append(m + "" + v + "</div>");
      }
    }
    var y = o;
    a.css("background-color", y)
      .find("h1")
      .text(i[n - 1] + " " + t);
    f.find("div").css("color", y);
    l.find(".day").css("background-color", y);
    d();
  }

  // Function to generate the tooltip text from the tooltip details
  function generateTooltipText(tooltipDetails) {
    return (
      "Visit Status: " +
      tooltipDetails.dayName +
      "\nPatient Name: " +
      tooltipDetails.name +
      "\nVisit Hour: " +
      tooltipDetails.visitHour
    );
  }

  function h() {
    var e = [];
    for (var r = 1; r < v(t, n) + 1; r++) {
      e.push({ day: r, weekday: s[m(t, n, r)] });
    }
    return e;
  }
  function p() {
    f.empty();
    for (var e = 0; e < 7; e++) {
      f.append("<div>" + s[e].substring(0, 3) + "</div>");
    }
  }
  function d() {
    var t;
    var n = $("#calendar").css("width", e + "px");
    n.find((t = "#calendar_weekdays, #calendar_content"))
      .css("width", e + "px")
      .find("div")
      .css({
        width: e / 7 + "px",
        height: e / 7 + "px",
        "line-height": e / 7 + "px",
      });
    n.find("#calendar_header")
      .css({ height: e * (1 / 7) + "px" })
      .find('i[class^="icon-chevron"]')
      .css("line-height", e * (1 / 7) + "px");
  }
  function v(e, t) {
    return new Date(e, t, 0).getDate();
  }
  function m(e, t, n) {
    return new Date(e, t - 1, n).getDay();
  }
  function g(e) {
    return y(new Date()) == y(e);
  }
  function y(e) {
    return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();
  }
  function b() {
    var e = new Date();
    t = e.getFullYear();
    n = e.getMonth() + 1;
  }

  b();
  c();

  a.find('i[class^="icon-chevron"]').on("click", function () {
    var e = $(this);
    var r = function (e) {
      n = e == "next" ? n + 1 : n - 1;
      if (n < 1) {
        n = 12;
        t--;
      } else if (n > 12) {
        n = 1;
        t++;
      }
      c();
    };
    if (e.attr("class").indexOf("left") != -1) {
      r("previous");
    } else {
      r("next");
    }
  });
});
