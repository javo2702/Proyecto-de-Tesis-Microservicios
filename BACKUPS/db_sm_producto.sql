-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: db_sm_producto
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idcategoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `estado` varchar(45) NOT NULL DEFAULT 'disponible',
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'ceviche',NULL,'disponible'),(2,'arroz',NULL,'disponible'),(3,'jaleas',NULL,'disponible'),(4,'chicharrones',NULL,'disponible'),(5,'sudados',NULL,'disponible'),(6,'chupes',NULL,'disponible'),(7,'especialidad de la casa',NULL,'disponible'),(8,'chilcano',NULL,'disponible'),(9,'carnes',NULL,'disponible'),(10,'pollo a la brasa','disponibilidad en la noche','disponible'),(11,'parillas','disponibilidad en la noche','disponible'),(12,'platos a la carta',NULL,'disponible'),(13,'domingos',NULL,'disponible'),(14,'gaseosas','bebida','disponible'),(15,'cervezas','bebida','disponible'),(16,'tragos','bebida','no disponible'),(17,'bebidas','bebida','disponible'),(18,'mostrito','disponibilidad en la noche','disponible'),(19,'guarnisiones',NULL,'disponible');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` double NOT NULL,
  `estado` varchar(45) NOT NULL,
  `descuento` double NOT NULL,
  `idcategoria` int NOT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `imagen` varchar(45) NOT NULL DEFAULT 'producto.png',
  PRIMARY KEY (`idproducto`),
  KEY `fk_categoria_idx` (`idcategoria`),
  CONSTRAINT `fk_categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'ceviche mixto',NULL,35,'disponible',0,1,NULL,'producto.png'),(2,'ceviche mixto',NULL,45,'disponible',0,1,NULL,'producto.png'),(3,'ceviche de toyo',NULL,35,'disponible',0,1,NULL,'producto.png'),(4,'ceviche de toyo',NULL,45,'disponible',0,1,NULL,'producto.png'),(5,'ceviche de pescado','cabrilla - corvina',35,'disponible',0,1,NULL,'producto.png'),(6,'ceviche de pescado','cabrilla - corvina',45,'disponible',0,1,NULL,'producto.png'),(7,'ceviche de conchas negras',NULL,35,'disponible',0,1,NULL,'producto.png'),(8,'ceviche de conchas negras',NULL,45,'disponible',0,1,NULL,'producto.png'),(9,'ceviche de langostinos',NULL,30,'disponible',0,1,NULL,'producto.png'),(10,'ceviche de langostinos',NULL,40,'disponible',0,1,NULL,'producto.png'),(11,'ceviche de crema de rocoto',NULL,35,'disponible',0,1,NULL,'producto.png'),(12,'ceviche de crema de rocoto',NULL,45,'disponible',0,1,NULL,'producto.png'),(13,'leche de tigre',NULL,15,'disponible',0,1,NULL,'producto.png'),(14,'tiradito de pescado','trozos de pescado en salsa de aji',40,'disponible',0,1,NULL,'producto.png'),(15,'arroz con mariscos',NULL,30,'disponible',0,2,NULL,'producto.png'),(16,'arroz con mariscos',NULL,40,'disponible',0,2,NULL,'producto.png'),(17,'chaufa de mariscos',NULL,30,'disponible',0,2,NULL,'producto.png'),(18,'chaufa de mariscos',NULL,40,'disponible',0,2,NULL,'producto.png'),(19,'arroz con langostinos',NULL,35,'disponible',0,2,NULL,'producto.png'),(20,'arroz con langostinos',NULL,45,'disponible',0,2,NULL,'producto.png'),(21,'arroz chaufa','pollo',30,'disponible',0,2,NULL,'producto.png'),(22,'arroz chaufa','pollo',35,'disponible',0,2,NULL,'producto.png'),(23,'arroz chaufa oriental','pollo + chorizo + cecina + platanos fritos',35,'disponible',0,2,NULL,'producto.png'),(24,'jalea mixta','mixtura de mariscos + trozos de pescado + filete de pescado + yuca frita',50,'disponible',0,3,NULL,'producto.png'),(25,'jalea mixta','mixtura de mariscos + trozos de pescado + filete de pescado + yuca frita',60,'disponible',0,3,NULL,'producto.png'),(26,'jalea de pescado','trozos de pescado + yuca frita',45,'disponible',0,3,NULL,'producto.png'),(27,'jalea de pescado','trozos de pescado + yuca frita',55,'disponible',0,3,NULL,'producto.png'),(28,'chicharron de pescado','congrio - corvina',35,'disponible',0,4,NULL,'producto.png'),(29,'chicharron de pescado','congrio - corvina',45,'disponible',0,4,NULL,'producto.png'),(30,'chicharron mixto','trozos de pescado + mixtura de mariscos + langostinos + yuca frita',40,'disponible',0,4,NULL,'producto.png'),(31,'chicharron mixto','trozos de pescado + mixtura de mariscos + langostinos + yuca frita',50,'disponible',0,4,NULL,'producto.png'),(32,'chicharron de toyo',NULL,30,'disponible',0,4,NULL,'producto.png'),(33,'chicharron de toyo',NULL,40,'disponible',0,4,NULL,'producto.png'),(34,'chicharron de calamar',NULL,30,'disponible',0,4,NULL,'producto.png'),(35,'chicharron de calamar',NULL,40,'disponible',0,4,NULL,'producto.png'),(36,'chicharron de langostinos',NULL,30,'disponible',0,4,NULL,'producto.png'),(37,'chicharron de langostinos',NULL,40,'disponible',0,4,NULL,'producto.png'),(38,'chicharron de pollo',NULL,35,'disponible',0,4,NULL,'producto.png'),(39,'chicharron de pollo',NULL,45,'disponible',0,4,NULL,'producto.png'),(40,'parihuela',NULL,35,'disponible',0,5,NULL,'producto.png'),(41,'parihuela',NULL,45,'disponible',0,5,NULL,'producto.png'),(42,'sudado de toyo',NULL,35,'disponible',0,5,NULL,'producto.png'),(43,'sudado de toyo',NULL,45,'disponible',0,5,NULL,'producto.png'),(44,'sudado mixto',NULL,35,'disponible',0,5,NULL,'producto.png'),(45,'sudado mixto',NULL,45,'disponible',0,5,NULL,'producto.png'),(46,'sudado de pescado','cabrilla - congrio - corvina',35,'disponible',0,5,NULL,'producto.png'),(47,'sudado de pescado','cabrilla - congrio - corvina',45,'disponible',0,5,NULL,'producto.png'),(48,'sudado de pescado','chita - paella - tramboyo',40,'disponible',0,5,NULL,'producto.png'),(49,'chupe de pescado',NULL,30,'disponible',0,6,NULL,'producto.png'),(50,'chupe de pescado',NULL,40,'disponible',0,6,NULL,'producto.png'),(51,'chupe de cangrejo',NULL,30,'disponible',0,6,NULL,'producto.png'),(52,'chupe de cangrejo',NULL,40,'disponible',0,6,NULL,'producto.png'),(53,'chupe de camaron','',30,'disponible',0,6,NULL,'producto.png'),(54,'chupe de camaron',NULL,40,'disponible',0,6,NULL,'producto.png'),(55,'ronda marina','arroz con mariscos + ceviche de toyo + chicharron de pescado + yuca frita',50,'disponible',0,7,NULL,'producto.png'),(56,'ronda marina','arroz con mariscos + ceviche de toyo + chicharron de pescado + yuca frita',60,'disponible',0,7,NULL,'producto.png'),(57,'duo de marino','arroz con mariscos + ceviche / ceviche + chicharron de pescado',40,'disponible',0,7,NULL,'producto.png'),(58,'duo de marino','arroz con mariscos + ceviche / ceviche + chicharron de pescado',50,'disponible',0,7,NULL,'producto.png'),(59,'toxico marino','ceviche de conchas negras + ceviche mixto + ceviche en crema de rocoto',60,'disponible',0,7,NULL,'producto.png'),(60,'ronda criolla','tacacho con cecina + chicharron de pollo + carne seca',50,'disponible',0,7,NULL,'producto.png'),(61,'ronda criolla','tacacho con cecina + chicharron de pollo + carne seca',60,'disponible',0,7,NULL,'producto.png'),(62,'duo criollo','patacones con cecina + carne seca / chicharron de pollo + carne seca',40,'disponible',0,7,NULL,'producto.png'),(63,'duo criollo','patacones con cecina + carne seca / chicharron de pollo + carne seca',50,'disponible',0,7,NULL,'producto.png'),(64,'chilcano de pescado',NULL,30,'disponible',0,8,NULL,'producto.png'),(65,'chilcano de pescado',NULL,40,'disponible',0,8,NULL,'producto.png'),(66,'carne seca',NULL,35,'disponible',0,9,NULL,'producto.png'),(67,'carne seca',NULL,45,'disponible',0,9,NULL,'producto.png'),(68,'tacacho con cecina',NULL,35,'disponible',0,9,NULL,'producto.png'),(69,'tacacho con cecina',NULL,45,'disponible',0,9,NULL,'producto.png'),(70,'tacacho con costillas',NULL,35,'disponible',0,9,NULL,'producto.png'),(71,'tacacho con costillas',NULL,45,'disponible',0,9,NULL,'producto.png'),(72,'patacones con costillas',NULL,40,'disponible',0,9,NULL,'producto.png'),(73,'patacones con costillas',NULL,50,'disponible',0,9,NULL,'producto.png'),(154,'Pollo a la brasa','1 pollo entero + papas fritas + ensalada + procion de arroz',50,'disponible',0,10,NULL,'producto.png'),(155,'Pollo a la brasa','1/2 pollo + papas fritas + ensalada + porcion de arroz',25,'disponible',0,10,NULL,'producto.png'),(156,'Pollo a la brasa','1/4 pollo + papas fritas + ensalada',13,'disponible',0,10,NULL,'producto.png'),(157,'Pollo a la brasa','1/8 pollo + papas fritas + ensalada',10,'disponible',0,10,NULL,'producto.png'),(158,'mostrazo','1/4 pollo + papas fritas + arroz chaufa + huevo frito + platano frito + ensalada',20,'disponible',0,18,NULL,'producto.png'),(159,'mostrito','1/4 pollo + papas fritas + arroz chaufa + ensalada',17,'disponible',0,18,NULL,'producto.png'),(160,'mostrito','1/8 pollo + papas fritas + arroz chaufa + ensalada',12,'disponible',0,18,NULL,'producto.png'),(161,'parrilla mixta junior','1/4 pollo a la brasa + bistec + chuleta + chorizo + papas fritas + ensalada',45,'disponible',0,11,NULL,'producto.png'),(162,'parrilla mixta familiar','1/4 pollo a la brasa + bistec + chuleta + chorizo + anticucho + papas fritas + ensalada',60,'disponible',0,11,NULL,'producto.png'),(163,'Lomo saltado',NULL,20,'disponible',0,12,NULL,'producto.png'),(164,'Pollo a la plancha',NULL,20,'disponible',0,12,NULL,'producto.png'),(165,'bistec a lo pobre',NULL,22,'disponible',0,12,NULL,'producto.png'),(166,'Chicharron de langostinos',NULL,35,'disponible',0,12,NULL,'producto.png'),(167,'gallina','tallarines + arroz + ensalada',17,'disponible',0,13,NULL,'producto.png'),(168,'arroz con pato',NULL,20,'disponible',0,13,NULL,'producto.png'),(169,'cabrito con frijoles',NULL,20,'disponible',0,13,NULL,'producto.png'),(170,'gallina entera',NULL,150,'disponible',0,13,NULL,'producto.png'),(171,'porcion de arroz',NULL,3,'disponible',0,19,NULL,'producto.png'),(172,'porcion de yuca',NULL,2,'disponible',0,19,NULL,'producto.png'),(173,'porcion de camote',NULL,2,'disponible',0,19,NULL,'producto.png'),(174,'porcion de tortas de maiz',NULL,5,'disponible',0,19,NULL,'producto.png'),(175,'porcion de tortas de maiz',NULL,8,'disponible',0,19,NULL,'producto.png'),(176,'porcion de cancha',NULL,3,'disponible',0,19,NULL,'producto.png'),(177,'sarsa criolla',NULL,3,'disponible',0,19,NULL,'producto.png'),(178,'porcion de platanos fritos',NULL,5,'disponible',0,19,NULL,'producto.png'),(179,'porcion de platanos fritos',NULL,8,'disponible',0,19,NULL,'producto.png'),(180,'porcion de papas fritas',NULL,8,'disponible',0,19,NULL,'producto.png'),(181,'inca cola','1/2 litro',3.5,'disponible',0,14,NULL,'producto.png'),(182,'gordita',NULL,4,'disponible',0,14,NULL,'producto.png'),(183,'inca cola','1 litro',8,'disponible',0,14,NULL,'producto.png'),(184,'inca cola','1 1/2 litro',10,'disponible',0,14,NULL,'producto.png'),(185,'cerveza cristal',NULL,9,'disponible',0,15,NULL,'producto.png'),(186,'cerveza pilsen',NULL,9,'disponible',0,15,NULL,'producto.png'),(187,'cerveza cusqueña',NULL,9,'disponible',0,15,NULL,'producto.png'),(188,'agua personal',NULL,2,'disponible',0,17,NULL,'producto.png'),(189,'chicha morada','1 litro',10,'disponible',0,17,NULL,'producto.png'),(190,'chicha morada','1 1/2 litro',13,'disponible',0,17,NULL,'producto.png'),(191,'chicha de jora','1 litro',7,'disponible',0,17,NULL,'producto.png'),(192,'chicha de jora','1 1/2 litro',10,'disponible',0,17,NULL,'producto.png'),(193,'limonada frozen','1 litro',10,'disponible',0,17,NULL,'producto.png'),(194,'inca cola','2 litros',12,'disponible',0,14,NULL,'producto.png'),(195,'nombre prueba','descripcion',10,'disponible',10,1,NULL,'url'),(196,'nombre prueba','descripcion',10,'disponible',10,1,NULL,'url');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_sm_producto'
--

--
-- Dumping routines for database 'db_sm_producto'
--
/*!50003 DROP PROCEDURE IF EXISTS `create_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_product`(
	IN nombre varchar(45),
    IN descripcion varchar(255),
    IN precio double,
    IN estado varchar(45),
    in descuento double,
    IN idcategoria int,
    IN imagen varchar(45)
)
BEGIN
	INSERT INTO producto (nombre,descripcion,precio,estado,descuento,idcategoria,imagen)
    VALUES (nombre,descripcion,precio,estado,descuento,idcategoria,imagen);
    CALL show_product(last_insert_id());
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `edit_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_product`(
	IN idproductoin int,
	IN nombre varchar(45),
    IN descripcion varchar(255),
    IN precio double,
    IN estado varchar(45),
    in descuento double,
    IN idcategoria int,
    IN imagen varchar(45)
)
BEGIN
	UPDATE producto SET
		nombre = nombre,
        descripcion = descripcion,
        precio = precio,
        estado = estado,
        descuento = descuento,
        idcategoria = idcategoria,
        imagen = imagen
	WHERE idproducto = idproductoin;
    CALL show_product(idproductoin);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `list_categories` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `list_categories`()
BEGIN
	SELECT * FROM categoria WHERE estado LIKE "disponible";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `list_drink` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `list_drink`()
BEGIN
	SELECT p.idproducto, p.nombre, p.descripcion, p.precio, p.estado, p.descuento, c.nombre categoria
    FROM producto AS p INNER JOIN categoria AS c ON p.idcategoria = c.idcategoria 
    WHERE p.idcategoria IN(14,15,16,17) AND p.estado = "disponible";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `list_food` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `list_food`()
BEGIN
	SELECT p.idproducto, p.nombre, p.descripcion, p.precio, p.estado, p.descuento, c.nombre categoria
    FROM producto AS p INNER JOIN categoria AS c ON p.idcategoria = c.idcategoria 
    WHERE p.idcategoria NOT IN(14,15,16,17) AND p.estado = "disponible";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `show_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `show_product`(
	id_product int
)
BEGIN
	SELECT p.idproducto, p.nombre, p.descripcion, p.precio, p.estado, p.descuento, p.imagen, c.nombre categoria
    FROM producto AS p INNER JOIN categoria AS c ON p.idcategoria = c.idcategoria 
    WHERE p.idcategoria NOT IN(14,15,16,17) AND p.estado = "disponible" AND p.idproducto=id_product;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `state_category_false` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `state_category_false`(
	IN id_category int
)
BEGIN
	UPDATE categoria SET estado = "No Disponible"
    WHERE idcategoria = id_category;
    SELECT * FROM categoria WHERE idcategoria = id_category;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `unsubscribe_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `unsubscribe_product`(
	IN idproducto int
)
BEGIN
	UPDATE producto SET estado = "no disponible"
    WHERE idproducto = idproducto;
    SELECT p.idproducto, p.nombre, p.descripcion, p.precio, p.estado, p.descuento,p.imagen, c.nombre categoria
    FROM producto AS p INNER JOIN categoria AS c ON p.idcategoria = c.idcategoria 
    WHERE p.idproducto = idproducto;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-16 21:28:51
