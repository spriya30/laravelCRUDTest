<?php

Route::get('/', function () {
    return view('welcome');
});

Route::resource('student', 'StudentController');

Route::get('/vuecard', function(){
    return view('vuecard');
});

