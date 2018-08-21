$('ul.tabs').each(function () {
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  var $active, $content
  var $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
  $active.addClass('active');

  // Initialize content
  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function (e) {
    // Make the old tab and its div inactive.
    $active.removeClass('active');
    $content.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab and its div active.
    $active.addClass('active');
    $content.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});