<?php
  $url = 'https://www.affirmations.dev/';
  $data = file_get_contents($url);
  header('Content-Type: application/json');
  echo $data;
?>