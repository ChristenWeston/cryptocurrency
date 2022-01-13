import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cryptocurrency from './cryptocurrency';

function displayInfo(response) {
  if (response.id) {
    // $('#result').text(`Here's the ID: ${response.id}and the description in English: ${response.description.en}`);

    $('#thumbnail').html("<img src=" + response.image.small + "</a>");
    $('#id').text(response.name);
    $('#description').text(response.description.en);
  } else {
    $('#result').text(`Problems! ${Error.message}`);
  }
}
//<a href="${response.image.small}"
$(document).ready(function() {
  $('#selectCurrency').change(function(){
    let currency = $('#selectCurrency').val();
    console.log("This is the currency: " + currency);
    Cryptocurrency.getCryptos(currency)
    .then(function(response) {
      displayInfo(response);
    });
  });
});