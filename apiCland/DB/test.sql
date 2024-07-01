-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Sánduches'),(2,'Hamburguesas'),(3,'Acompañamientos'),(4,'Bebidas'),(5,'Cervezas artesanales'),(6,'Cervezas del mundo');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detail_sale`
--

DROP TABLE IF EXISTS `detail_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detail_sale` (
  `sale_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(10) NOT NULL,
  PRIMARY KEY (`sale_id`),
  KEY `fk_detail_sale_product_idx` (`product_id`),
  CONSTRAINT `fk_detail_sale_sale` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_sale`
--

LOCK TABLES `detail_sale` WRITE;
/*!40000 ALTER TABLE `detail_sale` DISABLE KEYS */;
INSERT INTO `detail_sale` VALUES (180,'1'),(181,'1');
/*!40000 ALTER TABLE `detail_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  `delivery` int(1) DEFAULT NULL,
  `video` varchar(250) DEFAULT NULL,
  `categories_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories_idx` (`categories_id`),
  CONSTRAINT `fk_products_categories` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=509 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Calamarada','Pan brioche artesanal negro relleno de calamares en panko acompañados de rúgula, tomates cherry, queso mozarela y salsa alioli.',21000,'http://localhost:3022/images/productosDelivery/calamarada.jpg',0,'http://localhost:3022/videos/calamaradaId.mp4',1),(2,'Capitán Cósmico','Pan brioche artesanal relleno de pollo crocante, tocineta ahumada, acompañado de pepinillos agridulces, queso sabana en salsa ranch de la casa.',20000,'http://localhost:3022/images/productosDelivery/capitan-cosmico.jpg',1,'http://localhost:3022/videos/817536ce-8518-4bfa-a72c-881c56c3d241.mp4',1),(3,'Chancho Arriero','Pan brioche artesanal relleno de cabecero de lomo acompañado de aros de cebolla, queso mozarela, rúgula y BBQ de café.',19900,'http://localhost:3022/images/productosDelivery/chancho-arriero.jpg',1,'http://localhost:3022/videos/50309576-818b-4785-8d4b-1209e5b0ce4d.mp4',1),(4,'Choricheto','Choripán clásico argentino en pan artesanal suave relleno de chorizo y chimichurri rojo. *ligeramente picante',15500,'http://localhost:3022/images/productosDelivery/choricheto.jpg',0,'http://localhost:3022/videos/92a52f6e-2def-4302-a0eb-3d862e556215.mp4',1),(5,'Habibi','Sánduche de falafel en pan árabe acompañado de cebolla morada, tomate cherry,  perejil, cilantro, limón y salsa de yogur. *vegetariano',20500,'http://localhost:3022/images/productosDelivery/habibi.jpg',0,'http://localhost:3022/videos/86398DC8-BC85-48BC-A364-B99F9ABDEA4D.mov',1),(6,'La Negra','Pan brioche artesanal relleno de pollo crocante, tocineta ahumada, acompañado de pepinillos agridulces, queso sabana en salsa ranch de la casa.',19500,'http://localhost:3022/images/productosDelivery/la-negra.jpg',0,NULL,2),(7,'Clandestina','Hamburguesa en pan brioche doble carne de 125 gramos C/U, doble tocineta, doble queso (mozarela y sabana), aros de cebolla, lechuga, BBQ casera de Ron.',24500,'http://localhost:3022/images/productosDelivery/clandestina.jpg',0,'http://localhost:3022/videos/IMG_0064.mp4',2),(8,'Francesaa','Carne artesanal de 200 gramos rellena de nips de tocineta, acompañada de cebollas caramelizadas, queso sabana, rúgula y salsa de queso azul.',26000,'http://localhost:3022/images/productosDelivery/francesa.jpg',0,'http://localhost:3022/videos/IMG_1642.mov',2),(9,'Mediterránea','Carne artesanal de 200 gramos rellena de peperoni, chorizo español y parmesano con rúgula, queso mozarela, tomate cherry al balsámico y pesto de albahaca.',27000,'http://localhost:3022/images/productosDelivery/mediterranea.jpg',0,'http://localhost:3022/videos/c8ccdb83-0fca-4ee5-84f8-f46d125c7468',2),(10,'Papas Amarillas','porción de 85 gramos',5000,'http://localhost:3022/images/productosDelivery/papas-amarilas.jpg',0,NULL,3),(11,'Papas Fritas','porción de 85 gramos',5000,'http://localhost:3022/images/productosDelivery/papas-fritas.jpg',0,NULL,3),(12,'Coca Cola','350 ml',4500,'http://localhost:3022/images/productosDelivery/coca-cola.jpg',0,NULL,4),(13,'Coca Cola Zero','350 ml',4500,'http://localhost:3022/images/productosDelivery/cc-zero.jpg',0,NULL,4),(14,'Don Fermin 18.34','IPA. Cerveza dorada con notas rojizas en la cual predominan los aromas a frutas tropicales. (6 % Vol. alcohol - 65 IBU)',12000,'http://localhost:3022/images/productosDelivery/artesanal-1834-ipa.jpg',0,'http://localhost:3022/videos/32633582_256130791599260_7813572279190683648_n_1.mov',5),(15,'Bilröst','Hefe Weizenbier. Cerveza de trigo, de color claro, algo turbia, con un característico aroma a plátano. (5.5 Vol. alcohol - 25 IBU)',12000,'http://localhost:3022/images/productosDelivery/artesanal-bilrost-hefe-weizenbier.jpg',0,'http://localhost:3022/videos/videoplayback_3.mp4',5),(16,'Sulata','Pale Ale. Cerveza con aromas herbales y resinosos aportados por el lúpulo. (5.7 Vol. alcohol - 40 IBU)',12000,'http://localhost:3022/images/productosDelivery/artesanal-sulata-pale-ale.jpg',0,'http://localhost:3022/videos/131968410_1051852225319740_6022274343382499332_n.mp4',5),(17,'Grolsch','Paises Bajos - Pilsner premium lager',9500,'http://localhost:3022/images/productosDelivery/grolsch.jpg',0,'http://localhost:3022/videos/videoplayback_5.mov',6),(18,'Heineken','Paises Bajos - Pilsner premium lager',7000,'http://localhost:3022/images/productosDelivery/heineken.jpg',0,'http://localhost:3022/videos/videoplayback_1.mp4',6),(19,'Peroni','Italia - Pilsner premium lager',9000,'http://localhost:3022/images/productosDelivery/peroni.jpg',0,'http://localhost:3022/videos/TASTE_OF_ITALY_PERONI-vimeo-247386979-dash-akfire_interconnect_quic_sep-video-3f806b1a-sub-0.0-60.0.mp4',6),(20,'Stella Artois','Bélgica - Pilsner premium lager',9000,'http://localhost:3022/images/productosDelivery/stella-artois.jpg',0,'http://localhost:3022/videos/videoplayback_2.mp4',6),(506,'BBQ Crunchy','Hamburguesa de 125 g de carne 100% de res, cebollitas crujientes, una rodaja de tomate, lechuga en julianas, salsa BBQ y salsa blanca en pan ajonjolí.',20000,'http://localhost:3022/images/productosDelivery/1713291090322_img_.jpg',NULL,NULL,2),(507,'Todoterreno Callejera ','Hamburguesa de dos carnes de 125 g cada una 100% de res a la parrilla con salsa BBQ, tocineta, una tajada de queso tipo mozzarella, papas callejera, salsa blanca, salsa BBQ y mostaza en pan ajonjolí',35000,'http://localhost:3022/images/productosDelivery/1713303064575_img_.jpg',NULL,NULL,2),(508,'Sándwich de atún','Pan de yogur griego, atún, cebolla en cubos y apio. Sazonado con sal, pimienta y mayonesa.\r\nImagen de referencia. ',12800,'http://localhost:3022/images/productosDelivery/1713314367979_img_.png',NULL,NULL,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productscart`
--

DROP TABLE IF EXISTS `productscart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productscart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_cart_products1_idx` (`product_id`),
  KEY `fk_products_cart_users1_idx` (`users_id`),
  CONSTRAINT `fk_products_cart_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_cart_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productscart`
--

LOCK TABLES `productscart` WRITE;
/*!40000 ALTER TABLE `productscart` DISABLE KEYS */;
/*!40000 ALTER TABLE `productscart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sales_users_idx` (`user_id`),
  CONSTRAINT `fk_sales_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=183 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (137,NULL,'2023-04-17'),(138,NULL,'2023-04-17'),(139,NULL,'2023-04-17'),(140,NULL,'2023-04-17'),(141,NULL,'2023-04-17'),(142,NULL,'2023-04-17'),(143,NULL,'2023-04-17'),(144,NULL,'2023-04-17'),(145,NULL,'2023-04-17'),(146,NULL,'2023-04-17'),(147,NULL,'2023-04-17'),(148,NULL,'2023-04-17'),(149,NULL,'2023-04-17'),(150,NULL,'2023-04-17'),(151,NULL,'2023-04-17'),(152,NULL,'2023-04-17'),(153,NULL,'2023-04-17'),(154,NULL,'2023-04-17'),(155,NULL,'2023-04-17'),(156,NULL,'2023-04-17'),(157,NULL,'2023-04-17'),(158,NULL,'2023-04-17'),(159,NULL,'2023-04-17'),(160,NULL,'2023-04-17'),(161,NULL,'2023-04-17'),(162,NULL,'2023-04-17'),(163,NULL,'2023-04-17'),(164,NULL,'2023-04-17'),(165,NULL,'2023-04-17'),(166,NULL,'2023-04-17'),(167,NULL,'2023-04-17'),(168,NULL,'2023-04-17'),(169,NULL,'2023-04-17'),(170,NULL,'2023-04-17'),(171,NULL,'2023-04-17'),(172,NULL,'2023-04-17'),(173,NULL,'2023-04-17'),(174,NULL,'2023-04-17'),(175,NULL,'2023-04-17'),(176,NULL,'2023-04-17'),(177,NULL,'2023-04-17'),(178,NULL,'2023-04-17'),(179,NULL,'2023-04-17'),(180,NULL,'2024-02-15'),(181,NULL,'2024-02-15'),(182,NULL,'2024-02-15');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `admin` int(1) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bernhard','Manthorpe','bmanthorpe0@bloomberg.com','vSP4Qor3AS',0,'https://robohash.org/illononea.png?size=50x50'),(2,'Hyacinthie','Lethley','hlethley1@jalbum.net','XJv5vkome',0,'https://robohash.org/omnisdelectusid.png?size'),(3,'Brinn','Sarfass','bsarfass2@wsj.com','ZZEeBBbi1afL',0,'https://robohash.org/reprehenderitestmolestia'),(4,'Der','Winslet','dwinslet3@dedecms.com','gcitop',1,'https://robohash.org/autimpeditlaborum.png?si'),(5,'Donal','Wabey','dwabey4@newsvine.com','x99p7Xl0Uw7s',1,'https://robohash.org/autemminimaqui.png?size='),(6,'Lemmy','Snoxill','lsnoxill5@zimbio.com','pQJLJ7F9tqZe',0,'https://robohash.org/commodivoluptatibusaut.p'),(7,'Abram','Shildrake','ashildrake6@ezinearticles.com','wYdNL7p',0,'https://robohash.org/nonquaerepudiandae.png?s'),(8,'Gael','Rosenwasser','grosenwasser7@newsvine.com','2O9d9ZmB2ZR',1,'https://robohash.org/sintdolorevel.png?size=5'),(9,'Storm','Cops','scops8@pen.io','HznTA63D',1,'https://robohash.org/reminciduntreiciendis.pn'),(10,'Teddie','Sommerled','tsommerled9@wikipedia.org','wiQCeSdK',0,'https://robohash.org/quosquiarecusandae.png?s'),(11,'Cilka','Finlay','cfinlaya@earthlink.net','fyj5ZvcJ1fp1',0,'https://robohash.org/consecteturassumendadolo'),(12,'Sibyl','Rehn','srehnb@ycombinator.com','LEEFlm',0,'https://robohash.org/ipsamvelsit.png?size=50x'),(13,'Kira','Gerardet','kgerardetc@google.cn','q8Po97lCl',1,'https://robohash.org/vitaeearecusandae.png?si'),(14,'Chelsie','Turpie','cturpied@hp.com','hwK0Ia',0,'https://robohash.org/cumodioeos.png?size=50x5'),(15,'Broderic','Edson','bedsone@icio.us','iOK94sIUyx',0,'https://robohash.org/autexpeditanatus.png?siz'),(16,'Mindy','Porte','mportef@sohu.com','jiwNa6Q',1,'https://robohash.org/temporibusillorerum.png?'),(17,'Heath','Othen','hotheng@wikispaces.com','XsiJXASAVE',0,'https://robohash.org/etinfugiat.png?size=50x5'),(18,'Orin','Scantlebury','oscantleburyh@apache.org','kdaElhKi6X',1,'https://robohash.org/inciduntexaut.png?size=5'),(19,'Bea','Grenter','bgrenteri@hostgator.com','tNvyfNy0p',1,'https://robohash.org/dolorecorruptierror.png?'),(20,'Martha','Chipps','mchippsj@360.cn','b6FpptOYI',0,'https://robohash.org/quiaquiacorrupti.png?siz'),(21,'Sybilla','Emmison','semmisonk@altervista.org','0qwK77x1mPNR',0,'https://robohash.org/autemullamut.png?size=50'),(22,'Eberhard','Ollis','eollisl@g.co','ytsGXNPBi',0,'https://robohash.org/facilisquibusdamillo.png'),(23,'Nefen','Mogey','nmogeym@blogtalkradio.com','dCP9U0lBAA',1,'https://robohash.org/suscipitperspiciatissit.'),(24,'Netta','Hadaway','nhadawayn@deviantart.com','1RPYADyJ',0,'https://robohash.org/etcumquealiquam.png?size'),(25,'Elyse','Cream','ecreamo@gov.uk','OXcO0XL8lf',0,'https://robohash.org/suntetet.png?size=50x50&'),(26,'Caressa','Shine','cshinep@theatlantic.com','wKMfaDHQO',0,'https://robohash.org/quasiinventoredolor.png?'),(27,'Pauly','Jennaway','pjennawayq@google.es','xpQKDuv1',0,'https://robohash.org/ipsaconsequaturrerum.png'),(28,'Selina','Ixor','sixorr@slate.com','IQgwD9opN',1,'https://robohash.org/sequietenim.png?size=50x'),(29,'Alyce','Latour','alatours@wunderground.com','c59HCxWjCZ44',1,'https://robohash.org/omnisautfugiat.png?size='),(30,'Augustus','Dowdeswell','adowdeswellt@parallels.com','gBnAbruCFn2',0,'https://robohash.org/enimearumpraesentium.png'),(31,'Tyler','Passfield','tpassfieldu@moonfruit.com','7iNV1XO14',0,'https://robohash.org/voluptatemnullaex.png?si'),(32,'Gretchen','Halse','ghalsev@dell.com','uAxylbC0ZV5B',0,'https://robohash.org/numquamvelitquisquam.png'),(33,'Faith','Matzeitis','fmatzeitisw@t.co','b0ve0wBVA4',1,'https://robohash.org/estullamnesciunt.png?siz'),(34,'Silvester','German','sgermanx@yolasite.com','H0BXEK81yH',0,'https://robohash.org/maioresquiillo.png?size='),(35,'Zorine','Mauchlen','zmauchleny@spotify.com','8IzPwgs',1,'https://robohash.org/quisdistinctioveniam.png'),(36,'Falkner','Puden','fpudenz@deviantart.com','0wLK7Hd',0,'https://robohash.org/quasperspiciatisdelectus'),(37,'Teresina','Sarjent','tsarjent10@ustream.tv','oMn3Szx',1,'https://robohash.org/erroretquia.png?size=50x'),(38,'Gayle','Faloon','gfaloon11@tamu.edu','cL3sKMj',1,'https://robohash.org/voluptatumvoluptasest.pn'),(39,'Lynda','Thundercliffe','lthundercliffe12@youku.com','xqy4QnSC',0,'https://robohash.org/delectusenimmolestiae.pn'),(40,'Oby','Dabell','odabell13@mayoclinic.com','0lHit6Mih',0,'https://robohash.org/quiaquiaex.png?size=50x5'),(41,'Umberto','Cecely','ucecely14@ebay.co.uk','M2EAQNrmjQEt',1,'https://robohash.org/saepesitprovident.png?si'),(42,'Muffin','Burmaster','mburmaster15@deviantart.com','XTsmocBNCJh',1,'https://robohash.org/molestiasvoluptatemdolor'),(43,'Carolin','Lumbley','clumbley16@latimes.com','6lsylkr',1,'https://robohash.org/cummagnamnisi.png?size=5'),(44,'Tull','Emig','temig17@oaic.gov.au','VZUskwijzsW3',1,'https://robohash.org/fugiatutconsequatur.png?'),(45,'Cherilyn','Kilmurry','ckilmurry18@fotki.com','CymLk1d',0,'https://robohash.org/etperferendisasperiores.'),(46,'Johannes','Heminsley','jheminsley19@patch.com','QRSh9DXgdGYa',1,'https://robohash.org/veritatisautet.png?size='),(47,'Saleem','Pasley','spasley1a@google.com.au','VVOvb9',0,'https://robohash.org/doloremcumqueest.png?siz'),(48,'Faythe','Cornick','fcornick1b@wired.com','gKBX4RQ7d8',0,'https://robohash.org/architectovoluptatemcons'),(49,'Jeanine','Jaeggi','jjaeggi1c@nifty.com','ynzQIRXNb',0,'https://robohash.org/repellatipsamsit.png?siz'),(50,'Quincy','Tripony','qtripony1d@sogou.com','r0iSjNO',1,'https://robohash.org/suntullamquo.png?size=50'),(51,'Jarrett','Townsley','jtownsley1e@alexa.com','I75PgTXb5',1,'https://robohash.org/cumteneturperspiciatis.p'),(52,'Orran','Kemmish','okemmish1f@timesonline.co.uk','ZDaSyzT',1,'https://robohash.org/autquonon.png?size=50x50'),(53,'Amalia','Willox','awillox1g@hubpages.com','iahHOi6g2',0,'https://robohash.org/ettemporaet.png?size=50x'),(54,'Nappie','Maps','nmaps1h@nps.gov','vBrANnH',1,'https://robohash.org/consecteturoditadipisci.'),(55,'Corbie','Hubbard','chubbard1i@topsy.com','jdysSTFMakx',1,'https://robohash.org/atqueesthic.png?size=50x'),(56,'Clyde','Kidgell','ckidgell1j@csmonitor.com','StN3UE',1,'https://robohash.org/animilaborumdebitis.png?'),(57,'Keir','Willas','kwillas1k@storify.com','1x99fA2',0,'https://robohash.org/utconsecteturiusto.png?s'),(58,'Tamma','Bradnam','tbradnam1l@tmall.com','j8fmRpOZXnEF',1,'https://robohash.org/temporibusdoloreset.png?'),(59,'Zeb','Lilbourne','zlilbourne1m@archive.org','DAj2i6g',0,'https://robohash.org/nemovelitnesciunt.png?si'),(60,'Stevy','Sautter','ssautter1n@cbslocal.com','Zy33LBvSIKt',1,'https://robohash.org/rerumnontempore.png?size'),(61,'Johny','Siward','jsiward1o@delicious.com','KHXB0i',1,'https://robohash.org/etetut.png?size=50x50&se'),(62,'Darren','Brandenberg','dbrandenberg1p@dot.gov','MPpJ9nWjud',0,'https://robohash.org/aliasautvoluptatem.png?s'),(63,'Nanon','Rosone','nrosone1q@usda.gov','FU7ag7ZO0',1,'https://robohash.org/fugitipsumvoluptas.png?s'),(64,'Nichols','Michiel','nmichiel1r@jimdo.com','demsdxS',0,'https://robohash.org/enimvelitvero.png?size=5'),(65,'Gwendolen','Noore','gnoore1s@wisc.edu','0iLyybq',1,'https://robohash.org/hicveniamquam.png?size=5'),(66,'Fannie','Walrond','fwalrond1t@weibo.com','HUWVKxLnV',0,'https://robohash.org/odiomolestiasquos.png?si'),(67,'Cherrita','Isakovic','cisakovic1u@telegraph.co.uk','p4Jt3Inj',1,'https://robohash.org/voluptasbeataequibusdam.'),(68,'Gun','Ephson','gephson1v@instagram.com','6XsJdb',0,'https://robohash.org/velquidemvoluptas.png?si'),(69,'Robyn','Borgne','rborgne1w@bbb.org','0OP7eu',0,'https://robohash.org/sintmollitiaqui.png?size'),(70,'Sterling','Petrishchev','spetrishchev1x@mashable.com','jrRfw6u',0,'https://robohash.org/dolorautcumque.png?size='),(71,'Skye','Souster','ssouster1y@over-blog.com','1BuDAVB',1,'https://robohash.org/ipsadoloreest.png?size=5'),(72,'Ebeneser','Grafom','egrafom1z@webnode.com','zdpK4p8xdA',0,'https://robohash.org/modicumqueexplicabo.png?'),(73,'Crystal','Boud','cboud20@blinklist.com','abeVr0h',1,'https://robohash.org/officiaadipisciad.png?si'),(74,'Inglebert','Elsmor','ielsmor21@oracle.com','DlfBoTPG7l',1,'https://robohash.org/reiciendisautsequi.png?s'),(75,'Mozelle','Yitzhakof','myitzhakof22@fotki.com','c1YFrV',1,'https://robohash.org/vitaedoloresquia.png?siz'),(76,'Kayley','Buy','kbuy23@va.gov','kAKhTQeBf4F5',1,'https://robohash.org/molestiaenemoimpedit.png'),(77,'Bathsheba','Lamburne','blamburne24@t-online.de','gzKX31nNz',0,'https://robohash.org/nondoloribusdeserunt.png'),(78,'Kalindi','Vargas','kvargas25@theglobeandmail.com','wkRWlP',0,'https://robohash.org/molestiasexpeditamodi.pn'),(79,'Lily','Abramson','labramson26@hatena.ne.jp','jcrKZQp',1,'https://robohash.org/suscipitofficiavoluptatu'),(80,'Valentina','Medlin','vmedlin27@oracle.com','acbeqcT',1,'https://robohash.org/doloreevenietillum.png?s'),(81,'Fidelia','Sawley','fsawley28@domainmarket.com','eKHA9KCRxQ0',0,'https://robohash.org/doloremevenietex.png?siz'),(82,'Melina','Brumpton','mbrumpton29@facebook.com','SyNP3MrEP5',0,'https://robohash.org/providentfacilishic.png?'),(83,'Abdel','Searson','asearson2a@hud.gov','Z7Qml0aSQNfN',1,'https://robohash.org/culpaautvelit.png?size=5'),(84,'Riccardo','Heeley','rheeley2b@ted.com','CAhPIge',1,'https://robohash.org/omnisinciduntperferendis'),(85,'Quentin','Rosin','qrosin2c@economist.com','5lS5XYL2i',0,'https://robohash.org/autdebitisiste.png?size='),(86,'Adelina','Lapley','alapley2d@live.com','5FtjV8LLV',1,'https://robohash.org/culpaaperiamomnis.png?si'),(87,'Paige','Gaukroger','pgaukroger2e@ovh.net','9nKhpcEKMSe',1,'https://robohash.org/facilisquosaepe.png?size'),(88,'Beatriz','Gremane','bgremane2f@deviantart.com','Ky6XzQCfB',0,'https://robohash.org/autlaboreiusto.png?size='),(89,'Ricky','Rait','rrait2g@msu.edu','oU9huSAVR',1,'https://robohash.org/repellatdoloresdelectus.'),(90,'Ethel','Sehorsch','esehorsch2h@utexas.edu','uB20zKTWG',0,'https://robohash.org/nesciunthicnostrum.png?s'),(91,'Henry','Reignolds','hreignolds2i@google.ca','g3z66uGXq3h',0,'https://robohash.org/velveniamrerum.png?size='),(92,'Butch','Vater','bvater2j@ox.ac.uk','Tobr4GIRW',0,'https://robohash.org/officiisetnecessitatibus'),(93,'Elfie','Behagg','ebehagg2k@hp.com','pfmJwcmfkyfb',1,'https://robohash.org/exercitationemipsamquibu'),(94,'Britney','Fellgatt','bfellgatt2l@delicious.com','CvKk0EU',0,'https://robohash.org/utinventoreeius.png?size'),(95,'Augustine','Ferie','aferie2m@ifeng.com','Zo6QOh2yqodg',1,'https://robohash.org/voluptatemaliquiddolore.'),(96,'Maggy','Kibbel','mkibbel2n@t.co','4aIpia',0,'https://robohash.org/modifugitconsequuntur.pn'),(97,'Wilton','Maxsted','wmaxsted2o@alibaba.com','OMQxPT',1,'https://robohash.org/quiasuntaut.png?size=50x'),(98,'Celie','Grinov','cgrinov2p@tamu.edu','6JUnv4Zx9foc',1,'https://robohash.org/autcumnemo.png?size=50x5'),(99,'Pebrook','Buckenhill','pbuckenhill2q@github.com','A6c9SJl',1,'https://robohash.org/sitmaioressunt.png?size='),(100,'Shelly','Essery','sessery2r@wix.com','m2TRu4iVJ4H',1,'https://robohash.org/omnisquisquamsit.png?siz'),(139,'Félix','Gutierrez','fei555@msn.com','$2b$10$u9jxqF4oCe00fL9Q3wE4pOZ.vqGGT6xKgxDFuuvEszNHt2zlHtY4O',1,'/images/users/1713218004065_img_.png'),(140,'Carlos','Perez','fei557@msn.com','$2b$10$vTAsSYMmkUvW0bWyWMsYsOI4V/KdMFvQQPyZGx4JQ/DG4CC7Llf.G',0,'/images/users/1713219157042_img_.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 17:48:51
