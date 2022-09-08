<?php
	$nombre = $_POST['c_name'];
	$email = $_POST['c_email'];
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['c_message'];


	if(mail('albertogarel.dev@gmail.com', 'PrintingAPP - Solicitud de información', $mensaje)){
		echo "Correo enviado";
	}
 ?>