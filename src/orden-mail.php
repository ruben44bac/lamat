<?php

/*
echo $_POST['nombre'];
echo $_POST['correo'];
echo $_POST['telefono'];
echo $_POST['mensaje'];
*/
$to = $_POST['correo'] .", ruben44bac@gmail.com";
$subject = "HTML email";

$message = '



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="x-apple-disable-message-reformatting" />
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet" />
	<title>Tamales</title>


	<style type="text/css" media="screen">
		body {
			padding: 0 !important;
			margin: 0 !important;
			display: block !important;
			min-width: 100% !important;
			width: 100% !important;
			background: #f3f4f6;
			-webkit-text-size-adjust: none
		}

		a {
			color: #000001;
			text-decoration: none
		}

		p {
			padding: 0 !important;
			margin: 0 !important
		}

		img {
			-ms-interpolation-mode: bicubic;
			/* Allow smoother rendering of resized image in Internet Explorer */
		}

		.mcnPreviewText {
			display: none !important;
		}


		@media only screen and (max-device-width: 480px),
		only screen and (max-width: 480px) {
			.mobile-shell {
				width: 100% !important;
				min-width: 100% !important;
			}

			.bg {
				background-size: 100% auto !important;
				-webkit-background-size: 100% auto !important;
			}

			.text-header,
			.m-center {
				text-align: center !important;
			}

			.center {
				margin: 0 auto !important;
			}

			.container {
				padding: 20px 10px !important
			}

			.td {
				width: 100% !important;
				min-width: 100% !important;
			}

			.m-br-15 {
				height: 15px !important;
			}

			.p30-15 {
				padding: 30px 15px !important;
			}

			.p0-15-30 {
				padding: 0px 15px 30px 15px !important;
			}

			.mpb30 {
				padding-bottom: 30px !important;
			}

			.m-td,
			.m-hide {
				display: none !important;
				width: 0 !important;
				height: 0 !important;
				font-size: 0 !important;
				line-height: 0 !important;
				min-height: 0 !important;
			}

			.m-block {
				display: block !important;
			}

			.fluid-img img {
				width: 100% !important;
				max-width: 100% !important;
				height: auto !important;
			}

			.column,
			.column-dir,
			.column-top,
			.column-empty,
			.column-empty2,
			.column-dir-top {
				float: left !important;
				width: 100% !important;
				display: block !important;
			}

			.column-empty {
				padding-bottom: 30px !important;
			}

			.column-empty2 {
				padding-bottom: 10px !important;
			}

			.content-spacing {
				width: 15px !important;
			}
		}
	</style>
</head>

<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f3f4f6; -webkit-text-size-adjust:none;">
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f3f4f6">
		<tr>
			<td align="center" valign="top">
				<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
					<tr>
						<td class="td container" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td class="p30-15 tbrr" style="padding: 30px; border-radius:26px 26px 0px 0px;" bgcolor="#ffffff">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<th class="column-top" width="145" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="http://dev.combitamales.com/assets/tamales.png"
																 width="124" height="124" border="0" alt="" /></td>
														</tr>
													</table>
												</th>
												<th class="column-empty2" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
												<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="text-header" style="color:#999999; font-family:\'Roboto\'; font-size:13px; line-height:18px; text-align:right;">
																<span class="link2" style="color:#999999; text-decoration:none;">Te han querido contactar</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>

							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="http://dev.combitamales.com/assets/fondo.jpg"
										 border="0" width="650" height="135" alt="" /></td>
								</tr>
							</table>

							<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
								<tr>
									<td style="padding-bottom: 10px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="p30-15" style="padding: 60px 30px;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="h1 pb25" style="color:#000000; font-family:\'Roboto\'; font-size:40px; line-height:46px; text-align:center; padding-bottom:25px;">Mensaje</td>
														</tr>
														<tr>
															<td class="text-center pb25" style="color:#666666; font-family:\'Roboto\'; font-size:16px; line-height:30px; text-align:center; padding-bottom:25px;">
																Nombre: '. $_POST['nombre'] .'<br>
																Correo: '. $_POST['correo'] .' <br>
																Teléfono: '. $_POST['telefono'] .' <br>
																Mensaje: '. $_POST['mensaje'] .' <br>
															</td>
                                                        </tr>
                                                        
                                                        <tr>
															<td class="text-center pb25" style="color:#666666; font-family:\'Roboto\'; font-size:16px; line-height:30px; text-align:center; padding-bottom:25px;">
																'. $_POST['orden'] .'
															</td>
														</tr>
														<!-- Button -->
														<tr>
															<td align="center">
																<table class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
																	<tr>
																		<td class="text-button" style="background:#fecc7b; color:#000000; font-family:\'Roboto\'; font-size:14px; line-height:18px; padding:12px 30px; text-align:center; border-radius:25px; text-transform:uppercase;">
																			<a
																			 href="mailto: '. $_POST['correo'] .'" target="_blank" class="link" style="color:#000001; text-decoration:none;"><span class="link"
																				 style="color:#000001; text-decoration:none;">Contáctalo</span></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>

							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td class="pb10" style="padding-bottom:10px;"></td>
								</tr>
								<tr>
									<td class="p30-15 bbrr" style="padding: 50px 30px; border-radius:0px 0px 26px 26px;" bgcolor="#ffffff">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td align="center" style="padding-bottom: 30px;">
													<table border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img
																	 src="images/t2_facebook.jpg" width="34" height="34" border="0" alt="" /></a></td>
															<td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img
																	 src="images/t2_twitter.jpg" width="34" height="34" border="0" alt="" /></a></td>
															<td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img
																	 src="images/t2_instagram.jpg" width="34" height="34" border="0" alt="" /></a></td>
															<td class="img" width="34" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img
																	 src="images/t2_linkedin.jpg" width="34" height="34" border="0" alt="" /></a></td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td class="text-footer1 pb10" style="color:#999999; font-family:\'Roboto\'; font-size:14px; line-height:20px; text-align:center; padding-bottom:10px;">combitamales.com</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>

</html>



';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@combitamal.com>' . "\r\n";

mail($to,$subject,$message,$headers);
?>


<script>window.close()</script>