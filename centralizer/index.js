$(document).ready(function() {
    $('.shape').shape();
    const links = ['email', 'timetable', 'moodle', 'portal'];
    for (var i in links) {
      const selector = '.shape.' + links[i];
      $(selector).on('mouseenter', (e) => {
        if (!$(selector).shape('is animating')) {
          $(selector).shape('flip over');
        }
      });
      $(selector).on('mouseleave', () => {
        if (!$(selector).shape('is animating')) {
          $(selector).shape('flip over');
        }
      });
    }
});
