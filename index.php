<?php

    // The API endpoint URL
    $url = 'https://farmercrops-29dc18f2823d.herokuapp.com/api/crops';

    // Initializing a cURL session
    $curl = curl_init($url);

    // Setting cURL options
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'Accept: application/json']);

    // Executing the cURL request
    $response = curl_exec($curl);

    // Closing the cURL session
    curl_close($curl);

    // Decoding the JSON response into a PHP array
    $items = json_decode($response, true);

    // Checking if the decoding was successful.
    if (json_last_error() === JSON_ERROR_NONE && isset($items)) {

    } else {
        // Handle the error in case the response was not as expected
        echo "Failed to decode the response or the response format is unexpected.\n";
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <title>Farmer Chef Interaction</title>
</head>
<body>
    <div class="page">
        <h1>Cajetan Songwae and Clovis Mushagalusa CIRUBAKADERHA</h1>
        <h2>Farmers Chef API Interaction</h2>
        
        <button class="all">See All Items</button>
        <button class="one">Item By Item</button>
        <div class="records table-responsive">
            
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

