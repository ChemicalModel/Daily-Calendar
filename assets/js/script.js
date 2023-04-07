$(function() {

  // Save buttons and gets user input and what time
  $('.saveBtn').on('click', function() {
    var input = $(this).siblings('.description').val().trim();
    var blockId = $(this).closest('.time-block').attr('id');
    localStorage.setItem(blockId, input);
  });

  // Grabs the current hour
  var currentHour = dayjs().hour();

  // CHANGES COLORS WITH THE TIME! YEAHH! //
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) { 
      $(this).removeClass('present future'); 
      $(this).addClass('past');
    } else if (blockHour === currentHour) { 
      $(this).removeClass('past future'); 
      $(this).addClass('present');
    } else { 
      $(this).removeClass('past present'); 
      $(this).addClass('future'); 
    }
    // Displays the user created text from local storage
    var savedInput = localStorage.getItem($(this).attr('id'));
    if (savedInput !== null) {
      $(this).children('.description').val(savedInput);
    }
  });

  // Displays the current day of the week and month in the header.
  var currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);
});