<?php

// $app->get('/', 'HomeController:index')->setName('home');

$app->post('/api/team_start_time', 'TaskController:team_start_time');
$app->post('/api/get_total_points', 'TaskController:get_total_points');
$app->post('/api/has_solved', 'TaskController:has_solved');
$app->post('/api/first_task', 'TaskController:first_task');
$app->post('/api/second_task', 'TaskController:second_task');
$app->post('/api/third_task', 'TaskController:third_task');
$app->post('/api/forth_task', 'TaskController:forth_task');
$app->post('/api/five_start', 'TaskController:five_start');
$app->post('/api/five_validate', 'TaskController:five_validate');
$app->post('/api/sixth_task', 'TaskController:sixth_task');
$app->post('/api/final', 'TaskController:final');