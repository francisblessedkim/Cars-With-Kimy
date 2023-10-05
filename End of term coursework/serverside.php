$searchQuery = $_GET['q'];

$results = [
    ['title' => 'Result 1', 'description' => 'Description 1', 'link' => 'result1.html'],
    ['title' => 'Result 2', 'description' => 'Description 2', 'link' => 'result2.html'],
    // Add more results as needed
];

echo json_encode($results);
