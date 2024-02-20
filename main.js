  // NASA API key
  const apiKey = '8aLZhMmnfh9oXmfa0GnYWefYZtAjMb7ldofjopZt';

  // Function to fetch APOD data from NASA API
  function fetchAPOD(date) {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Update image source and description
        document.getElementById('apod-image').src = data.url;
        document.getElementById('apod-description').textContent = data.explanation;
      })
      .catch(error => console.error('Error fetching APOD:', error));
  }

  // Function to handle date selection change
  function handleDateChange() {
    const selectedDate = document.getElementById('date-input').value;
    fetchAPOD(selectedDate);
  }


  // Initial fetch for today's APOD
  fetchAPOD("2024-02-16");


  document.getElementById("submit-button").addEventListener( "click", event => {
    event.preventDefault();
    console.log( 'call the function that does the lookup with the value in the text field' );
  });