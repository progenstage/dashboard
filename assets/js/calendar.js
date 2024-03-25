$(document).ready(function () {
  var showWeekends = false; // Initially, weekends are hidden
  var isNewEvent = true; // Flag to track if the event is newly created

  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "agendaWeek",
    },
    slotDuration: "00:30:00", // Time slots of 30 minutes
    slotLabelInterval: "00:30:00", // Label time slots at 30-minute intervals
    slotLabelFormat: "H:mm", // Format for time labels in 24-hour format
    defaultView: "agendaWeek",
    selectable: true, // Enable selecting time slots
    selectHelper: false, // Disable highlighting selected time slots
    editable: false, // Disable event dragging
    eventLimit: true,
    slotEventOverlap: false,
    eventOverlap: false,
    minTime: "08:00:00",
    maxTime: "20:30:00", // Adjusted maxTime to 8:00 pm
    allDaySlot: false,
    hiddenDays: showWeekends ? [] : [0, 6], // Show or hide weekends based on the showWeekends flag
    firstDay: 1, // Start the week from Monday

    select: function (start, end) {
      isNewEvent = true; // Set isNewEvent to true when a new event is selected
      // Open modal for adding details
      $("#calendarModal").modal("show");

      // Save button click event
      $("#saveBtn")
        .off("click")
        .on("click", function () {
          var duration = $("#duration").val() || "20"; // Default duration is 20 minutes
          var patientName = $("#patientName").val();
          var status = $("#status").val();

          // Validate fields
          if (!patientName.trim()) {
            alert("Please enter patient name.");
            return;
          }

          var eventData = {
            start: start,
            end: end,
            title:
              "Appointment with " +
              patientName +
              " (Duration: " +
              duration +
              " minutes, Status: " +
              status +
              ")", // Event title including duration, patient name, and status
            durationEditable: true,
            status: status, // Adding status to eventData
          };

          if (isNewEvent) {
            // Render new event
            $("#calendar").fullCalendar("renderEvent", eventData, true);
          } else {
            // Update existing event
            var eventToUpdate = $("#calendar").fullCalendar(
              "clientEvents",
              eventData._id
            )[0];
            eventToUpdate.start = eventData.start;
            eventToUpdate.end = eventData.end;
            eventToUpdate.title = eventData.title;
            eventToUpdate.status = eventData.status;
            $("#calendar").fullCalendar("updateEvent", eventToUpdate);
          }

          $("#calendarModal").modal("hide"); // Hide the modal after saving
        });
    },

    eventClick: function (calEvent, jsEvent, view) {
      isNewEvent = false; // Set isNewEvent to false when an existing event is clicked
      $("#calendarModal").modal("show"); // Open modal for updating details

      // Fill modal fields with event data
      $("#patientName").val(
        calEvent.title.split("Appointment with ")[1].split(" (")[0]
      );
      $("#duration").val(
        parseInt(calEvent.title.split("Duration: ")[1].split(" minutes")[0])
      );
      $("#status").val(calEvent.status);

      // Save button click event
      $("#saveBtn")
        .off("click")
        .on("click", function () {
          // Same logic as in the select function
          var duration = $("#duration").val() || "20";
          var patientName = $("#patientName").val();
          var status = $("#status").val();

          if (!patientName.trim()) {
            alert("Please enter patient name.");
            return;
          }

          var eventData = {
            _id: calEvent._id, // Use the existing event's ID
            start: calEvent.start,
            end: calEvent.end,
            title:
              "Appointment with " +
              patientName +
              " (Duration: " +
              duration +
              " minutes, Status: " +
              status +
              ")",
            durationEditable: true,
            status: status,
          };

          var eventToUpdate = $("#calendar").fullCalendar(
            "clientEvents",
            eventData._id
          )[0];
          eventToUpdate.start = eventData.start;
          eventToUpdate.end = eventData.end;
          eventToUpdate.title = eventData.title;
          eventToUpdate.status = eventData.status;
          $("#calendar").fullCalendar("updateEvent", eventToUpdate);

          $("#calendarModal").modal("hide");
        });

      // Add delete button
      $("#deleteBtn").remove();
      var deleteBtnHtml =
        '<button type="button" class="btn btn-danger" id="deleteBtn">Delete</button>';
      $(".modal-footer").append(deleteBtnHtml);

      // Delete button click event
      $("#deleteBtn")
        .off("click")
        .on("click", function () {
          $("#calendar").fullCalendar("removeEvents", calEvent._id);
          $("#calendarModal").modal("hide");
        });
    },

    eventRender: function (event, element) {
      element.find(".fc-title").attr("title", event.title); // Set the full title as tooltip
      if (event.title.length > 20) {
        element.find(".fc-title").text(event.title.substring(0, 20) + "..."); // Truncate title if it exceeds 20 characters
      }
      // Update booked slots with respective colors based on status
      switch (event.status) {
        case "upcoming":
          element.css("background-color", "rgb(122, 229, 130)");
          break;
        case "passed":
          element.css("background-color", "rgb(255, 227, 122)");
          break;
        case "confirmed":
          element.css("background-color", "rgb(133, 161, 239)");
          break;
        default:
          element.css("background-color", "green");
      }
    },
  });

  $("#toggleWeekends").click(function () {
    showWeekends = !showWeekends; // Toggle the showWeekends flag
    $("#calendar").fullCalendar("option", {
      hiddenDays: showWeekends ? [] : [0, 6], // Show or hide weekends based on the updated showWeekends flag
    });
    // Change button text based on showWeekends flag
    $(this).text(showWeekends ? "<" : ">");
  });

  $(".toggle-weekend-container").appendTo(".fc-view-container");
});
