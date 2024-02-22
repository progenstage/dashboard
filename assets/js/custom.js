document.addEventListener("DOMContentLoaded", function () {
  // Chart initialization code
  var lineChart = document.getElementById("line-chart").getContext("2d");

  // Line chart options
  var options = {
    borderWidth: 3,
    cubicInterpolationMode: "monotone",
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderWidth: 4,
  };

  // Create linear gradients for line chart
  var gradientOne = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientOne.addColorStop(0, "rgba(51, 169, 247, 0.5)");
  gradientOne.addColorStop(1, "rgba(0, 0, 0, 0)");

  var gradientTwo = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientTwo.addColorStop(0, "rgba(195, 113, 239, 0.15)");
  gradientTwo.addColorStop(1, "rgba(0, 0, 0, 0)");

  new Chart(lineChart, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Good",
          data: [310, 300, 370, 295, 350, 300, 230, 290],
          ...options,
          borderColor: "#6fba29",
          borderWidth: 5,
          fill: "start",
          backgroundColor: gradientTwo,
        },
        {
          label: "Bad",
          data: [150, 230, 195, 260, 220, 300, 320, 490],
          ...options,
          borderColor: "#f8cc53",
          borderWidth: 5,
          fill: "start",
          backgroundColor: gradientOne,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(53, 27, 92, 0.8)",
          caretPadding: 5,
          boxWidth: 5,
          usePointStyle: "triangle",
          boxPadding: 3,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            color: "#fff", // Change the color of x-axis labels
          },
        },
        y: {
          ticks: {
            color: "#fff",
            callback: function (value, index, values) {
              return " " + index;
            },
            stepSize: 0,
          },
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Chart initialization code
  var lineChart = document.getElementById("line-chart-2").getContext("2d");

  // Line chart options
  var options = {
    borderWidth: 3,
    cubicInterpolationMode: "monotone",
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderWidth: 4,
  };

  // Create linear gradients for line chart
  var gradientOne = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientOne.addColorStop(0, "rgba(51, 169, 247, 0.5)");
  gradientOne.addColorStop(1, "rgba(0, 0, 0, 0)");

  var gradientTwo = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientTwo.addColorStop(0, "rgba(195, 113, 239, 0.15)");
  gradientTwo.addColorStop(1, "rgba(0, 0, 0, 0)");

  new Chart(lineChart, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Good",
          data: [310, 300, 370, 295, 350, 300, 230, 290],
          ...options,
          borderColor: "#6fba29",
          borderWidth: 5,
          fill: "start",
          backgroundColor: gradientTwo,
        },
        {
          label: "Bad",
          data: [150, 230, 195, 260, 220, 300, 320, 490],
          ...options,
          borderColor: "#f8cc53",
          borderWidth: 5,
          fill: "start",
          backgroundColor: gradientOne,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(53, 27, 92, 0.8)",
          caretPadding: 5,
          boxWidth: 5,
          usePointStyle: "triangle",
          boxPadding: 3,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            color: "#fff", // Change the color of x-axis labels
          },
        },
        y: {
          ticks: {
            color: "#fff",
            callback: function (value, index, values) {
              return " " + index;
            },
            stepSize: 0,
          },
        },
      },
    },
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Chart initialization code
  var lineChart = document.getElementById("line-chart-3").getContext("2d");

  // Line chart options
  var options = {
    borderWidth: 3,
    cubicInterpolationMode: "monotone",
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderWidth: 4,
  };

  // Create linear gradients for line chart
  var gradientOne = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientOne.addColorStop(0, "rgba(51, 169, 247, 0.5)");
  gradientOne.addColorStop(1, "rgba(0, 0, 0, 0)");

  var gradientTwo = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientTwo.addColorStop(0, "rgba(195, 113, 239, 0.15)");
  gradientTwo.addColorStop(1, "rgba(0, 0, 0, 0)");

  new Chart(lineChart, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Good",
          data: [310, 300, 370, 295, 350, 300, 230, 290],
          ...options,
          borderColor: "#6fba29",
          borderWidth: 5,
          fill: "start",
          backgroundColor: gradientTwo,
        },
        {
          label: "Bad",
          data: [150, 230, 195, 260, 220, 300, 320, 490],
          ...options,
          borderColor: "#f8cc53",
          borderWidth: 5,
          fill: "start",
          backgroundColor: gradientOne,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(53, 27, 92, 0.8)",
          caretPadding: 5,
          boxWidth: 5,
          usePointStyle: "triangle",
          boxPadding: 3,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            color: "#fff", // Change the color of x-axis labels
          },
        },
        y: {
          ticks: {
            color: "#fff",
            callback: function (value, index, values) {
              return " " + index;
            },
            stepSize: 0,
          },
        },
      },
    },
  });
});

$(document).ready(function () {
  // Check if the text in the comment cell exceeds 3 words
  $(".comment-trigger").each(function () {
    var commentText = $(this).text().trim();
    var words = commentText.split(/\s+/); // Split by whitespace
    if (words.length > 3) {
      var truncatedText = words.slice(0, 3).join(" ") + "...";
      $(this).text(truncatedText);
      $(this).addClass("comment-popup"); // Add class for triggering popup
      $(this).attr("data-comment", commentText); // Store full comment as data attribute
    }
  });

  // Show full comment in a popup when clicked
  $(document).on("click", ".comment-popup", function () {
    var comment = $(this).data("comment");
    $("#commentContent").text(comment);
    $("#commentModal").modal("show");
  });

  // Change text color and cursor behavior on hover
  $(document).on("mouseenter", ".comment-trigger", function () {
    $(this).css("color", "#007a9a"); // Change text color to blue on hover
    $(this).css("cursor", "pointer"); // Change cursor to pointer on hover
  });

  $(document).on("mouseleave", ".comment-trigger", function () {
    $(this).css("color", ""); // Reset text color on mouse leave
    $(this).css("cursor", ""); // Reset cursor on mouse leave
  });
});

