/** A script that toggles the class of the <header> element when the user
 *  + clicks on the tag DIV#toggle_header
 *
 *  - The <header> element must always have one class: red or green,
      +never both at the same time and never empty.
 *  - If the current class is red, when the user click on DIV#toggle_header,
 *    +the class must be updated to green; and the reverse should be hold.
 *  - `document.querySelector` cannot be used
 *  - JQuery API must be used
 */

$('document').ready(() => {
  $('div#toggle_header').click(() => {
    $('header').toggleClass('red green');
  });
});
