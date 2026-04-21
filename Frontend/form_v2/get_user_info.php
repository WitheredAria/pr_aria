<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['nombre_usuario'])) {
    echo json_encode([
        "logged_in" => true,
        "nombre" => $_SESSION['nombre_usuario']
    ]);
} else {
    echo json_encode(["logged_in" => false]);
}
?>