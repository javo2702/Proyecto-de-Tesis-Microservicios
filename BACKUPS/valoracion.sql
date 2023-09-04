-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: db_sm_valoracion
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
-- Table structure for table `m_tipo_transaccion`
--

DROP TABLE IF EXISTS `m_tipo_transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_tipo_transaccion` (
  `id_tipo_transaccion` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_tipo_transaccion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_tipo_transaccion`
--

LOCK TABLES `m_tipo_transaccion` WRITE;
/*!40000 ALTER TABLE `m_tipo_transaccion` DISABLE KEYS */;
INSERT INTO `m_tipo_transaccion` VALUES (1,'Pedido'),(2,'Pago');
/*!40000 ALTER TABLE `m_tipo_transaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaccion`
--

DROP TABLE IF EXISTS `transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaccion` (
  `idtransaccion` int NOT NULL AUTO_INCREMENT,
  `monto` double NOT NULL,
  `fecha` datetime NOT NULL,
  `idorigen` int DEFAULT NULL,
  `id_tipo` int NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idtransaccion`),
  KEY `fk_tipo_idx` (`id_tipo`),
  CONSTRAINT `fk_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `m_tipo_transaccion` (`id_tipo_transaccion`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaccion`
--

LOCK TABLES `transaccion` WRITE;
/*!40000 ALTER TABLE `transaccion` DISABLE KEYS */;
INSERT INTO `transaccion` VALUES (4,100,'2023-08-14 10:00:00',1,1,NULL),(5,50,'2023-08-14 11:00:00',2,1,NULL),(6,69,'2023-08-14 12:00:00',3,1,NULL),(7,100,'2023-08-15 10:00:00',4,1,NULL),(8,100,'2023-08-21 10:00:00',7,1,NULL),(9,35,'2023-08-21 10:00:00',7,1,NULL),(10,60,'2023-08-22 10:00:00',7,1,NULL),(11,69,'2023-08-22 12:00:00',15,1,NULL),(12,30,'2023-08-22 15:00:00',65,1,NULL),(13,30,'2023-08-22 12:00:00',NULL,2,NULL),(14,40,'2023-08-22 15:00:00',65,1,'Descripcion del registro'),(15,65,'2023-08-22 12:00:00',NULL,2,'Descripcion del registro'),(16,80,'2023-08-23 10:00:00',1,1,NULL),(17,65,'2023-08-23 12:00:00',55,1,NULL),(18,30,'2023-08-24 10:00:00',2,1,NULL),(19,55,'2023-08-24 11:00:00',3,1,NULL),(20,80,'2023-08-24 12:00:00',4,1,NULL),(21,100,'2023-08-24 13:00:00',5,1,NULL),(22,35,'2023-08-25 10:00:00',21,1,NULL),(23,85,'2023-08-25 11:00:00',3,1,NULL),(24,70,'2023-08-25 12:00:00',41,1,NULL),(25,98,'2023-08-25 13:00:00',51,1,NULL),(26,43,'2023-08-26 10:00:00',22,1,NULL),(27,56,'2023-08-26 11:00:00',32,1,NULL),(28,22,'2023-08-26 12:00:00',42,1,NULL),(29,78,'2023-08-26 13:00:00',52,1,NULL),(30,78,'2023-08-27 10:00:00',23,1,NULL),(31,99,'2023-08-27 11:00:00',33,1,NULL),(32,45,'2023-08-27 12:00:00',43,1,NULL),(33,120,'2023-08-27 13:00:00',53,1,NULL);
/*!40000 ALTER TABLE `transaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoracion`
--

DROP TABLE IF EXISTS `valoracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valoracion` (
  `idvaloracion` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `valoracion` int NOT NULL,
  `opinion` varchar(255) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `clasificacion` varchar(45) DEFAULT NULL,
  `idpedido` int NOT NULL,
  PRIMARY KEY (`idvaloracion`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoracion`
--

LOCK TABLES `valoracion` WRITE;
/*!40000 ALTER TABLE `valoracion` DISABLE KEYS */;
INSERT INTO `valoracion` VALUES (1,'76127998','Javier Valle',3,'test','2023-08-15 00:00:00',NULL,1),(2,'76127999','Eduardo Romero',4,'test','2023-08-15 00:00:00',NULL,2),(3,'40300433','Isela Romero',5,'test','2023-08-16 00:00:00',NULL,3),(4,'54896225','Usuario de prueba',4,'Opinion detallada deberia ir aca para poder clasificar','2023-08-22 00:00:00','',5),(5,'52689566','Usuario de prueba 2',5,'Opinion detallada deberia ir aca para poder clasificar 2','2023-08-22 23:45:29','',69),(6,'52689599','Usuario de prueba 68',3,'La comida estuvo buena pero el servicio debe mejorar','2023-08-27 21:04:26','',55),(7,'52689551','Usuario de prueba 78',3,'La comida estuvo buena pero el servicio debe mejorar','2023-08-27 21:06:45','Neutral',45),(8,'70689851','Usuario de prueba 5',3,'La comida estuvo buena y el servicio excelente','2023-08-27 21:07:28','Positivo',69),(9,'70689851','Usuario de prueba 5',3,'La comida estuvo buena y el servicio excelente','2023-08-27 22:08:25','Positivo',69),(10,'70689851','Usuario de prueba 99',3,'La comida estuvo buena y el servicio excelente','2023-08-27 22:10:47','Positivo',69),(11,'70689851','Usuario de prueba 99',3,'La comida estuvo buena y el servicio excelente','2023-08-27 22:20:14','Positivo',69),(12,'undefined','Javier Eduardo Valle Romero',5,'El servicio estuvo excelente','2023-08-27 22:26:38','Positivo',99),(13,'undefined','Usuario de prueba angular',3,'El servicio puede mejorar','2023-08-27 22:34:26','Neutral',55),(14,'undefined','fasfsfaf',2,'Esta es una opinion','2023-08-27 22:36:15','Negativo',555),(15,'undefined','usuario',5,'Excelente comida','2023-08-27 22:37:01','Positivo',123),(16,'undefined','afsfs',2,'Opinion','2023-08-27 22:38:00','Neutral',12311),(17,'undefined','Javier Valle',5,'Excelente servicio y comida','2023-08-27 22:38:46','Positivo',985),(18,'undefined','Javier Valle',5,'Excelente','2023-08-27 22:39:24','Positivo',215);
/*!40000 ALTER TABLE `valoracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_sm_valoracion'
--

--
-- Dumping routines for database 'db_sm_valoracion'
--
/*!50003 DROP PROCEDURE IF EXISTS `get_orders_date` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_orders_date`(
	IN fechain VARCHAR(12)
)
BEGIN
	SELECT t.idtransaccion, t.monto, t.fecha, t.idorigen, mt.nombre tipo, t.descripcion
   	FROM db_sm_valoracion.transaccion as t 
    inner join db_sm_valoracion.m_tipo_transaccion AS mt on
    mt.id_tipo_transaccion = t.id_tipo 
	WHERE t.fecha like fechain AND t.id_tipo = 1 order by t.fecha asc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_payments_date` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_payments_date`(
	IN fechain varchar(12)
)
BEGIN
	SELECT t.idtransaccion, t.monto, t.fecha, mt.nombre tipo, t.descripcion
   	FROM db_sm_valoracion.transaccion as t 
    inner join db_sm_valoracion.m_tipo_transaccion AS mt on
    mt.id_tipo_transaccion = t.id_tipo 
	WHERE t.fecha like fechain AND t.id_tipo = 2 order by t.fecha asc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_transacciones_date` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_transacciones_date`(
	IN fechain VARCHAR(12)
)
begin
	SELECT t.idtransaccion, t.monto, t.fecha, t.idorigen, mt.nombre tipo, t.descripcion
   	FROM db_sm_valoracion.transaccion as t 
    inner join db_sm_valoracion.m_tipo_transaccion AS mt on
    mt.id_tipo_transaccion = t.id_tipo 
	WHERE t.fecha like fechain order by t.fecha asc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `list_valoration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `list_valoration`(
	IN fecha_ VARCHAR(45)
)
BEGIN
	SELECT * FROM valoracion WHERE fecha LIKE fecha_;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `register_payment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `register_payment`(
	IN montoin DOUBLE,
    IN fechain DATETIME,
    in idtipo INT,
    IN descri VARCHAR(100)
)
BEGIN
	INSERT INTO transaccion (monto,fecha,id_tipo,descripcion)
    VALUES (montoin,fechain,idtipo,descri);
    SELECT t.idtransaccion, t.monto, t.fecha, mt.nombre tipo, t.descripcion 
   	FROM db_sm_valoracion.transaccion as t 
    inner join db_sm_valoracion.m_tipo_transaccion AS mt on
    mt.id_tipo_transaccion = t.id_tipo 
   	WHERE idtransaccion = last_insert_id();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `saveTransaccionOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveTransaccionOrder`(
	IN montoin DOUBLE,
    IN fechain DATETIME,
    IN idorigin INT,
    in idtipo INT,
    IN descri VARCHAR(100)
)
BEGIN
	INSERT INTO transaccion (monto,fecha,idorigen,id_tipo,descripcion)
    VALUES (montoin,fechain,idorigin,idtipo,descri);
    SELECT t.idtransaccion, t.monto, t.fecha, t.idorigen, mt.nombre tipo, t.descripcion 
   	FROM db_sm_valoracion.transaccion as t 
    inner join db_sm_valoracion.m_tipo_transaccion AS mt on
    mt.id_tipo_transaccion = t.id_tipo 
   	WHERE idtransaccion = last_insert_id();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `save_valoration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `save_valoration`(
	IN usuario VARCHAR(45),
    IN nombres VARCHAR(255),
    IN valoracion INT,
    IN opinion VARCHAR(255),
    IN clasificacion VARCHAR(45),
    IN idpedidoin INT
)
BEGIN
	INSERT INTO valoracion (usuario,nombres,valoracion,opinion,fecha,clasificacion,idpedido)
    VALUES (usuario,nombres,valoracion,opinion,CURRENT_TIMESTAMP(),clasificacion,idpedidoin);
    SELECT * FROM valoracion WHERE idvaloracion = last_insert_id();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ventas_semanales` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ventas_semanales`(
	IN fechaini VARCHAR(12),
	IN fechafin VARCHAR(12)
)
begin
	SELECT t.idtransaccion, t.monto, t.fecha, t.idorigen, mt.nombre tipo, t.descripcion
   	FROM db_sm_valoracion.transaccion as t 
    inner join db_sm_valoracion.m_tipo_transaccion AS mt on
    mt.id_tipo_transaccion = t.id_tipo 
	WHERE DATE_FORMAT(t.fecha, "%Y-%m-%d") >= fechaini and DATE_FORMAT(t.fecha, "%Y-%m-%d") <= fechafin AND t.id_tipo = 1 order by t.fecha asc;
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

-- Dump completed on 2023-09-02 23:51:10
