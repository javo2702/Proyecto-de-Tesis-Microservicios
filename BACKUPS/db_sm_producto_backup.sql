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
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
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
  PRIMARY KEY (`idproducto`),
  KEY `fk_categoria_idx` (`idcategoria`),
  CONSTRAINT `fk_categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'ceviche mixto',NULL,35,'disponible',0,1,NULL),(2,'ceviche mixto',NULL,45,'disponible',0,1,NULL),(3,'ceviche de toyo',NULL,35,'disponible',0,1,NULL),(4,'ceviche de toyo',NULL,45,'disponible',0,1,NULL),(5,'ceviche de pescado','cabrilla - corvina',35,'disponible',0,1,NULL),(6,'ceviche de pescado','cabrilla - corvina',45,'disponible',0,1,NULL),(7,'ceviche de conchas negras',NULL,35,'disponible',0,1,NULL),(8,'ceviche de conchas negras',NULL,45,'disponible',0,1,NULL),(9,'ceviche de langostinos',NULL,30,'disponible',0,1,NULL),(10,'ceviche de langostinos',NULL,40,'disponible',0,1,NULL),(11,'ceviche de crema de rocoto',NULL,35,'disponible',0,1,NULL),(12,'ceviche de crema de rocoto',NULL,45,'disponible',0,1,NULL),(13,'leche de tigre',NULL,15,'disponible',0,1,NULL),(14,'tiradito de pescado','trozos de pescado en salsa de aji',40,'disponible',0,1,NULL),(15,'arroz con mariscos',NULL,30,'disponible',0,2,NULL),(16,'arroz con mariscos',NULL,40,'disponible',0,2,NULL),(17,'chaufa de mariscos',NULL,30,'disponible',0,2,NULL),(18,'chaufa de mariscos',NULL,40,'disponible',0,2,NULL),(19,'arroz con langostinos',NULL,35,'disponible',0,2,NULL),(20,'arroz con langostinos',NULL,45,'disponible',0,2,NULL),(21,'arroz chaufa','pollo',30,'disponible',0,2,NULL),(22,'arroz chaufa','pollo',35,'disponible',0,2,NULL),(23,'arroz chaufa oriental','pollo + chorizo + cecina + platanos fritos',35,'disponible',0,2,NULL),(24,'jalea mixta','mixtura de mariscos + trozos de pescado + filete de pescado + yuca frita',50,'disponible',0,3,NULL),(25,'jalea mixta','mixtura de mariscos + trozos de pescado + filete de pescado + yuca frita',60,'disponible',0,3,NULL),(26,'jalea de pescado','trozos de pescado + yuca frita',45,'disponible',0,3,NULL),(27,'jalea de pescado','trozos de pescado + yuca frita',55,'disponible',0,3,NULL),(28,'chicharron de pescado','congrio - corvina',35,'disponible',0,4,NULL),(29,'chicharron de pescado','congrio - corvina',45,'disponible',0,4,NULL),(30,'chicharron mixto','trozos de pescado + mixtura de mariscos + langostinos + yuca frita',40,'disponible',0,4,NULL),(31,'chicharron mixto','trozos de pescado + mixtura de mariscos + langostinos + yuca frita',50,'disponible',0,4,NULL),(32,'chicharron de toyo',NULL,30,'disponible',0,4,NULL),(33,'chicharron de toyo',NULL,40,'disponible',0,4,NULL),(34,'chicharron de calamar',NULL,30,'disponible',0,4,NULL),(35,'chicharron de calamar',NULL,40,'disponible',0,4,NULL),(36,'chicharron de langostinos',NULL,30,'disponible',0,4,NULL),(37,'chicharron de langostinos',NULL,40,'disponible',0,4,NULL),(38,'chicharron de pollo',NULL,35,'disponible',0,4,NULL),(39,'chicharron de pollo',NULL,45,'disponible',0,4,NULL),(40,'parihuela',NULL,35,'disponible',0,5,NULL),(41,'parihuela',NULL,45,'disponible',0,5,NULL),(42,'sudado de toyo',NULL,35,'disponible',0,5,NULL),(43,'sudado de toyo',NULL,45,'disponible',0,5,NULL),(44,'sudado mixto',NULL,35,'disponible',0,5,NULL),(45,'sudado mixto',NULL,45,'disponible',0,5,NULL),(46,'sudado de pescado','cabrilla - congrio - corvina',35,'disponible',0,5,NULL),(47,'sudado de pescado','cabrilla - congrio - corvina',45,'disponible',0,5,NULL),(48,'sudado de pescado','chita - paella - tramboyo',40,'disponible',0,5,NULL),(49,'chupe de pescado',NULL,30,'disponible',0,6,NULL),(50,'chupe de pescado',NULL,40,'disponible',0,6,NULL),(51,'chupe de cangrejo',NULL,30,'disponible',0,6,NULL),(52,'chupe de cangrejo',NULL,40,'disponible',0,6,NULL),(53,'chupe de camaron','',30,'disponible',0,6,NULL),(54,'chupe de camaron',NULL,40,'disponible',0,6,NULL),(55,'ronda marina','arroz con mariscos + ceviche de toyo + chicharron de pescado + yuca frita',50,'disponible',0,7,NULL),(56,'ronda marina','arroz con mariscos + ceviche de toyo + chicharron de pescado + yuca frita',60,'disponible',0,7,NULL),(57,'duo de marino','arroz con mariscos + ceviche / ceviche + chicharron de pescado',40,'disponible',0,7,NULL),(58,'duo de marino','arroz con mariscos + ceviche / ceviche + chicharron de pescado',50,'disponible',0,7,NULL),(59,'toxico marino','ceviche de conchas negras + ceviche mixto + ceviche en crema de rocoto',60,'disponible',0,7,NULL),(60,'ronda criolla','tacacho con cecina + chicharron de pollo + carne seca',50,'disponible',0,7,NULL),(61,'ronda criolla','tacacho con cecina + chicharron de pollo + carne seca',60,'disponible',0,7,NULL),(62,'duo criollo','patacones con cecina + carne seca / chicharron de pollo + carne seca',40,'disponible',0,7,NULL),(63,'duo criollo','patacones con cecina + carne seca / chicharron de pollo + carne seca',50,'disponible',0,7,NULL),(64,'chilcano de pescado',NULL,30,'disponible',0,8,NULL),(65,'chilcano de pescado',NULL,40,'disponible',0,8,NULL),(66,'carne seca',NULL,35,'disponible',0,9,NULL),(67,'carne seca',NULL,45,'disponible',0,9,NULL),(68,'tacacho con cecina',NULL,35,'disponible',0,9,NULL),(69,'tacacho con cecina',NULL,45,'disponible',0,9,NULL),(70,'tacacho con costillas',NULL,35,'disponible',0,9,NULL),(71,'tacacho con costillas',NULL,45,'disponible',0,9,NULL),(72,'patacones con costillas',NULL,40,'disponible',0,9,NULL),(73,'patacones con costillas',NULL,50,'disponible',0,9,NULL),(154,'Pollo a la brasa','1 pollo entero + papas fritas + ensalada + procion de arroz',50,'disponible',0,10,NULL),(155,'Pollo a la brasa','1/2 pollo + papas fritas + ensalada + porcion de arroz',25,'disponible',0,10,NULL),(156,'Pollo a la brasa','1/4 pollo + papas fritas + ensalada',13,'disponible',0,10,NULL),(157,'Pollo a la brasa','1/8 pollo + papas fritas + ensalada',10,'disponible',0,10,NULL),(158,'mostrazo','1/4 pollo + papas fritas + arroz chaufa + huevo frito + platano frito + ensalada',20,'disponible',0,18,NULL),(159,'mostrito','1/4 pollo + papas fritas + arroz chaufa + ensalada',17,'disponible',0,18,NULL),(160,'mostrito','1/8 pollo + papas fritas + arroz chaufa + ensalada',12,'disponible',0,18,NULL),(161,'parrilla mixta junior','1/4 pollo a la brasa + bistec + chuleta + chorizo + papas fritas + ensalada',45,'disponible',0,11,NULL),(162,'parrilla mixta familiar','1/4 pollo a la brasa + bistec + chuleta + chorizo + anticucho + papas fritas + ensalada',60,'disponible',0,11,NULL),(163,'Lomo saltado',NULL,20,'disponible',0,12,NULL),(164,'Pollo a la plancha',NULL,20,'disponible',0,12,NULL),(165,'bistec a lo pobre',NULL,22,'disponible',0,12,NULL),(166,'Chicharron de langostinos',NULL,35,'disponible',0,12,NULL),(167,'gallina','tallarines + arroz + ensalada',17,'disponible',0,13,NULL),(168,'arroz con pato',NULL,20,'disponible',0,13,NULL),(169,'cabrito con frijoles',NULL,20,'disponible',0,13,NULL),(170,'gallina entera',NULL,150,'disponible',0,13,NULL),(171,'porcion de arroz',NULL,3,'disponible',0,19,NULL),(172,'porcion de yuca',NULL,2,'disponible',0,19,NULL),(173,'porcion de camote',NULL,2,'disponible',0,19,NULL),(174,'porcion de tortas de maiz',NULL,5,'disponible',0,19,NULL),(175,'porcion de tortas de maiz',NULL,8,'disponible',0,19,NULL),(176,'porcion de cancha',NULL,3,'disponible',0,19,NULL),(177,'sarsa criolla',NULL,3,'disponible',0,19,NULL),(178,'porcion de platanos fritos',NULL,5,'disponible',0,19,NULL),(179,'porcion de platanos fritos',NULL,8,'disponible',0,19,NULL),(180,'porcion de papas fritas',NULL,8,'disponible',0,19,NULL),(181,'inca cola','1/2 litro',3.5,'disponible',0,14,NULL),(182,'gordita',NULL,4,'disponible',0,14,NULL),(183,'inca cola','1 litro',8,'disponible',0,14,NULL),(184,'inca cola','1 1/2 litro',10,'disponible',0,14,NULL),(185,'cerveza cristal',NULL,9,'disponible',0,15,NULL),(186,'cerveza pilsen',NULL,9,'disponible',0,15,NULL),(187,'cerveza cusqueña',NULL,9,'disponible',0,15,NULL),(188,'agua personal',NULL,2,'disponible',0,17,NULL),(189,'chicha morada','1 litro',10,'disponible',0,17,NULL),(190,'chicha morada','1 1/2 litro',13,'disponible',0,17,NULL),(191,'chicha de jora','1 litro',7,'disponible',0,17,NULL),(192,'chicha de jora','1 1/2 litro',10,'disponible',0,17,NULL),(193,'limonada frozen','1 litro',10,'disponible',0,17,NULL),(194,'inca cola','2 litros',12,'disponible',0,14,NULL);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_sm_producto'
--

--
-- Dumping routines for database 'db_sm_producto'
--
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-26 10:39:38
