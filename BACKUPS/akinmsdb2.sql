-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: akinmsdb2
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
-- Table structure for table `bodega`
--

DROP TABLE IF EXISTS `bodega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bodega` (
  `idbodega` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `premium` varchar(1) NOT NULL DEFAULT '0',
  `idubicacion` bigint NOT NULL,
  PRIMARY KEY (`idbodega`),
  KEY `fk_ubicacion_idx` (`idubicacion`),
  CONSTRAINT `fk_ubicacion` FOREIGN KEY (`idubicacion`) REFERENCES `ubicacion` (`idubicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodega`
--

LOCK TABLES `bodega` WRITE;
/*!40000 ALTER TABLE `bodega` DISABLE KEYS */;
INSERT INTO `bodega` VALUES (1,'Don Gilberto','1',1),(2,'Doña Mary','0',2),(3,'Express','1',3),(4,'Tu Vecino','0',4),(5,'Doña Julia','1',5);
/*!40000 ALTER TABLE `bodega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bodeguero`
--

DROP TABLE IF EXISTS `bodeguero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bodeguero` (
  `idbodeguero` bigint NOT NULL AUTO_INCREMENT,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `idbodega` bigint NOT NULL,
  `correo` varchar(45) NOT NULL DEFAULT 'corre@gmail.com',
  `contraseña` varchar(255) NOT NULL DEFAULT 'abcdef',
  PRIMARY KEY (`idbodeguero`),
  KEY `fk_bodega_idx` (`idbodega`),
  CONSTRAINT `fk_bodega` FOREIGN KEY (`idbodega`) REFERENCES `bodega` (`idbodega`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodeguero`
--

LOCK TABLES `bodeguero` WRITE;
/*!40000 ALTER TABLE `bodeguero` DISABLE KEYS */;
INSERT INTO `bodeguero` VALUES (1,'Gilberto','Collazos','2545857',1,'gilberto.collazos@gmail.com','abcdef'),(2,'Mary','Gonzales','2544555',2,'mary.gonzales@gmail.com','abcdef'),(3,'Lucia','Diaz','8545454',3,'lucia.diaz@gmail.com','abcdef'),(4,'Carlos','Palma','4557575',4,'carlos.palma@gmail.com','abcdef'),(5,'Julia','Fernandez','2542525',5,'julia.fern@gmail.com','abcdef');
/*!40000 ALTER TABLE `bodeguero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `idcategoria` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Comidas','https://storageakinms.blob.core.windows.net/akinms-blob-container/empanadas-carne-001.webp'),(2,'Bebidas Alcoholicas','https://storageakinms.blob.core.windows.net/akinms-blob-container/pilsen355.webp'),(3,'Cigarros','https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lym-001.webp'),(4,'Bebidas No Alcoholicas','https://storageakinms.blob.core.windows.net/akinms-blob-container/coca-cola-001.webp'),(5,'Helados','https://storageakinms.blob.core.windows.net/akinms-blob-container/alaska-maracuya-001.webp'),(6,'Confiteria','https://storageakinms.blob.core.windows.net/akinms-blob-container/alfajor-bon-001.webp'),(7,'Piqueos y Snacks','https://storageakinms.blob.core.windows.net/akinms-blob-container/lays-001.webp');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idcliente` bigint NOT NULL AUTO_INCREMENT,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `correo` varchar(45) NOT NULL DEFAULT 'correo@gmail.com',
  `contraseña` varchar(255) NOT NULL DEFAULT 'abcdef',
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Javier','Valle','Av. San Carlos 334','995999885','javier.valle@gmail.com','abcdef'),(2,'Piero','Curay','Av. Santa Teresa 225','995845858','piero.curay@gmail.com','abcdef'),(3,'Saul','Yalle','Av. Arequipa 122','920541555','saul.yalle@gmail.com','abcdef'),(4,'Sharon','Barrientos','Av. Huascar 242','966969999','sharon.barrientos@gmail.com','abcdef'),(5,'Manuel','Pimentel','Av. Argentina 141','920525555','manuel.pimentel@gmail.com','abcdef');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_pedido`
--

DROP TABLE IF EXISTS `detalle_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_pedido` (
  `cantidad` int NOT NULL,
  `idpedido` bigint NOT NULL,
  `idproducto` bigint NOT NULL,
  PRIMARY KEY (`idproducto`,`idpedido`),
  KEY `FK3ngeh5hvwlo22m8628cv1akuu` (`idpedido`),
  CONSTRAINT `FK3ngeh5hvwlo22m8628cv1akuu` FOREIGN KEY (`idpedido`) REFERENCES `pedidos` (`idpedido`),
  CONSTRAINT `FKhqt06dp50sdlv2jlb5xrii17y` FOREIGN KEY (`idproducto`) REFERENCES `producto` (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_pedido`
--

LOCK TABLES `detalle_pedido` WRITE;
/*!40000 ALTER TABLE `detalle_pedido` DISABLE KEYS */;
INSERT INTO `detalle_pedido` VALUES (2,9,2),(2,10,2),(2,11,2),(2,12,2),(2,21,2),(2,27,2),(2,31,2),(1,26,4),(2,28,4),(2,29,4),(3,6,5),(3,7,5),(3,8,5),(1,20,5),(1,22,6),(2,15,7),(2,16,7),(1,15,9),(1,16,9),(1,20,10),(2,1,11),(1,23,11),(4,24,11),(3,2,12),(2,10,12),(2,11,12),(2,12,12),(3,21,12),(2,27,12),(2,31,12),(2,3,13),(1,4,14),(1,26,14),(2,28,14),(2,29,14),(2,5,15),(1,20,15),(11,30,15),(1,23,16),(1,15,18),(2,16,18),(2,17,19),(1,17,20),(1,20,20),(2,17,21),(1,17,22),(1,17,23),(1,17,24),(1,17,25),(1,20,25),(1,18,26),(1,18,27),(1,18,28),(1,18,29),(1,18,30),(1,20,30),(1,18,31),(1,18,32),(1,19,33),(1,19,34),(1,26,34),(1,19,35),(1,20,35),(1,19,36),(1,19,37),(1,19,38),(1,19,39),(3,25,55);
/*!40000 ALTER TABLE `detalle_pedido` ENABLE KEYS */;
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
INSERT INTO `hibernate_sequence` VALUES (6);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idpedido` bigint NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `monto_total` double NOT NULL,
  `estado` varchar(45) NOT NULL,
  `tipo_entrega` varchar(45) NOT NULL,
  `metodo_pago` varchar(45) NOT NULL,
  `idcliente` bigint NOT NULL,
  `idbodega` bigint NOT NULL,
  PRIMARY KEY (`idpedido`),
  KEY `fk_cliente_idx` (`idcliente`),
  KEY `FK_bode_idx` (`idbodega`),
  CONSTRAINT `FK_bode` FOREIGN KEY (`idbodega`) REFERENCES `bodega` (`idbodega`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'2022-11-26',50,'Entregado 69','delivery','efectivo',5,1),(2,'2022-11-27',75,'enviado','delivery','efectivo',4,2),(3,'2022-11-28',55,'enviado','delivery','efectivo',3,3),(4,'2022-11-29',59,'enviado','delivery','efectivo',2,5),(5,'2022-11-29',62,'enviado','delivery','efectivo',1,5),(6,'2022-11-30',69,'enviado','delivery','efectivo',1,5),(7,'2022-11-30',69,'enviado','delivery','efectivo',1,5),(8,'2022-11-30',69,'enviado','delivery','efectivo',1,5),(9,'2022-12-01',69,'entregado','delivery','tarjeta',1,5),(10,'2022-12-02',69,'entregado','delivery','efectivo',2,5),(11,'2022-12-03',69,'entregado','delivery','efectivo',2,5),(12,'2022-12-04',99,'entregado','delivery','efectivo',4,5),(15,'2022-12-24',34.3,'enviado','Recojo en Tienda','efectivo',1,4),(16,'2022-12-24',37.1,'enviado','Recojo en Tienda','efectivo',1,4),(17,'2022-12-24',74.4,'enviado','Entrega a Domicilio','tarjeta',1,1),(18,'2022-12-24',62.5,'enviado','Recojo en Tienda','efectivo',1,4),(19,'2022-12-24',69.3,'enviado','Recojo en Tienda','efectivo',1,4),(20,'2022-12-24',72.3,'enviado','Entrega a Domicilio','efectivo',1,5),(21,'2022-12-28',47.5,'enviado','Entrega a Domicilio','tarjeta',1,2),(22,'2022-12-29',8.5,'enviado','Recojo en Tienda','efectivo',1,1),(23,'2022-12-29',19.4,'enviado','Recojo en Tienda','efectivo',1,1),(24,'2022-12-29',26,'enviado','Recojo en Tienda','efectivo',1,1),(25,'2022-12-29',8.399999999999999,'enviado','Recojo en Tienda','efectivo',2,5),(26,'2022-12-29',31,'enviado','Recojo en Tienda','efectivo',3,4),(27,'2022-12-29',99,'enviado','delivery','efectivo',4,5),(28,'2023-01-02',41,'enviado','Entrega a Domicilio','tarjeta',1,4),(29,'2023-01-02',41,'enviado','Entrega a Domicilio','tarjeta',1,4),(30,'2023-07-06',74.5,'enviado','Entrega a Domicilio','efectivo',1,5),(31,'2023-01-01',199,'enviado','delivery','efectivo',4,5);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idproducto` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(90) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `descuento` double NOT NULL,
  `stock` int NOT NULL,
  `img` varchar(150) NOT NULL,
  `idcategoria` bigint NOT NULL,
  `idbodega` bigint NOT NULL,
  PRIMARY KEY (`idproducto`),
  KEY `fk_categoria_idx` (`idcategoria`),
  KEY `fk_bodeg_idx` (`idbodega`),
  CONSTRAINT `fk_bodeg` FOREIGN KEY (`idbodega`) REFERENCES `bodega` (`idbodega`),
  CONSTRAINT `fk_categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categorias` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (2,'Empanadas De Carne','Combo 05',6.6,0,71,'https://storageakinms.blob.core.windows.net/akinms-blob-container/empanadas-carne-001.webp',1,2),(3,'Empanadas De Carne 3','Combo 05',12.5,0,14,'https://storageakinms.blob.core.windows.net/akinms-blob-container/empanadas-carne-001.webp',1,3),(4,'Empanadas De Carne','Combo 05',12.5,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/empanadas-carne-001.webp',1,4),(5,'Empanadas De Carne 5','Combo 05',12.5,0,13,'https://storageakinms.blob.core.windows.net/akinms-blob-container/empanadas-carne-001.webp',1,5),(6,'Enrollado de Jamón y Queso','1 und',8.5,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/enrollado-001.jpg',1,1),(7,'Enrollado de Jamón y Queso','1 und',8.5,0,6,'https://storageakinms.blob.core.windows.net/akinms-blob-container/enrollado-001.jpg',1,2),(8,'Enrollado de Jamón y Queso','1 und',8.5,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/enrollado-001.jpg',1,3),(9,'Enrollado de Jamón y Queso','1 und',8.5,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/enrollado-001.jpg',1,4),(10,'Enrollado de Jamón y Queso','1 und',8.5,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/enrollado-001.jpg',1,5),(11,'Cerveza Pilsen','1 unid | 355ml',6.5,0,72,'https://storageakinms.blob.core.windows.net/akinms-blob-container/pilsen355.webp',2,1),(12,'Cerveza Pilsen','1 unid | 355ml',6.5,0,64,'https://storageakinms.blob.core.windows.net/akinms-blob-container/pilsen355.webp',2,2),(13,'Cerveza Pilsen','1 unid | 355ml',6.5,0,77,'https://storageakinms.blob.core.windows.net/akinms-blob-container/pilsen355.webp',2,3),(14,'Cerveza Pilsen','1 unid | 355ml',6.5,0,72,'https://storageakinms.blob.core.windows.net/akinms-blob-container/pilsen355.webp',2,4),(15,'Cerveza Pilsen','1 unid | 355ml',6.5,0,65,'https://storageakinms.blob.core.windows.net/akinms-blob-container/pilsen355.webp',2,5),(16,'Bebida De Maíz Golden ','355 ml',12.9,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/golden-cerveza-001.webp',2,1),(17,'Bebida De Maíz Golden ','355 ml',12.9,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/golden-cerveza-001.webp',2,2),(18,'Bebida De Maíz Golden ','355 ml',12.9,0,7,'https://storageakinms.blob.core.windows.net/akinms-blob-container/golden-cerveza-001.webp',2,3),(19,'Bebida De Maíz Golden ','355 ml',12.9,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/golden-cerveza-001.webp',2,4),(20,'Bebida De Maíz Golden ','355 ml',12.9,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/golden-cerveza-001.webp',2,5),(21,'Cigarro L&M Electro Fusion Ks Box','10 und',6.6,0,18,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lym-001.webp',3,1),(22,'Cigarro L&M Electro Fusion Ks Box','10 und',6.6,0,19,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lym-001.webp',3,2),(23,'Cigarro L&M Electro Fusion Ks Box','10 und',6.6,0,19,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lym-001.webp',3,3),(24,'Cigarro L&M Electro Fusion Ks Box','10 und',6.6,0,19,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lym-001.webp',3,4),(25,'Cigarro L&M Electro Fusion Ks Box','10 und',6.6,0,18,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lym-001.webp',3,5),(26,'Cigarro Lucky Strike Crush','10 und',10.3,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lucky-001.webp',3,1),(27,'Cigarro Lucky Strike Crush','10 und',10.3,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lucky-001.webp',3,2),(28,'Cigarro Lucky Strike Crush','10 und',10.3,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lucky-001.webp',3,3),(29,'Cigarro Lucky Strike Crush','10 und',10.3,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lucky-001.webp',3,4),(30,'Cigarro Lucky Strike Crush','10 und',10.3,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/cigarrillos-lucky-001.webp',3,5),(31,'Gaseosa Coca Cola','3 L',12,0,19,'https://storageakinms.blob.core.windows.net/akinms-blob-container/coca-cola-001.webp',4,1),(32,'Gaseosa Coca Cola','3 L',12,0,19,'https://storageakinms.blob.core.windows.net/akinms-blob-container/coca-cola-001.webp',4,2),(33,'Gaseosa Coca Cola','3 L',12,0,19,'https://storageakinms.blob.core.windows.net/akinms-blob-container/coca-cola-001.webp',4,3),(34,'Gaseosa Coca Cola','3 L',12,0,18,'https://storageakinms.blob.core.windows.net/akinms-blob-container/coca-cola-001.webp',4,4),(35,'Gaseosa Coca Cola','3 L',12,0,18,'https://storageakinms.blob.core.windows.net/akinms-blob-container/coca-cola-001.webp',4,5),(36,'Gaseosa Inca Kola Sin Azucar','1 L',4.5,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/inca-cola-001.webp',4,1),(37,'Gaseosa Inca Kola Sin Azucar','1 L',4.5,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/inca-cola-001.webp',4,2),(38,'Gaseosa Inca Kola Sin Azucar','1 L',4.5,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/inca-cola-001.webp',4,3),(39,'Gaseosa Inca Kola Sin Azucar','1 L',4.5,0,9,'https://storageakinms.blob.core.windows.net/akinms-blob-container/inca-cola-001.webp',4,4),(40,'Gaseosa Inca Kola Sin Azucar','1 L',4.5,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/inca-cola-001.webp',4,5),(41,'Helado Frio Rico Chocolate Paleta','93 ml',5.2,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/frio-rico-001.webp',5,1),(42,'Helado Frio Rico Chocolate Paleta','93 ml',5.2,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/frio-rico-001.webp',5,2),(43,'Helado Frio Rico Chocolate Paleta','93 ml',5.2,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/frio-rico-001.webp',5,3),(44,'Helado Frio Rico Chocolate Paleta','93 ml',5.2,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/frio-rico-001.webp',5,4),(45,'Helado Frio Rico Chocolate Paleta','93 ml',5.2,0,8,'https://storageakinms.blob.core.windows.net/akinms-blob-container/frio-rico-001.webp',5,5),(46,'Helado Alaska Maracuya','75 ml',2.5,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alaska-maracuya-001.webp',5,1),(47,'Helado Alaska Maracuya','75 ml',2.5,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alaska-maracuya-001.webp',5,2),(48,'Helado Alaska Maracuya','75 ml',2.5,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alaska-maracuya-001.webp',5,3),(49,'Helado Alaska Maracuya','75 ml',2.5,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alaska-maracuya-001.webp',5,4),(50,'Helado Alaska Maracuya','75 ml',2.5,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alaska-maracuya-001.webp',5,5),(51,'Alfajor Bon O Bon','40 g',2.8,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alfajor-bon-001.webp',6,1),(52,'Alfajor Bon O Bon','40 g',2.8,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alfajor-bon-001.webp',6,2),(53,'Alfajor Bon O Bon','40 g',2.8,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alfajor-bon-001.webp',6,3),(54,'Alfajor Bon O Bon','40 g',2.8,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alfajor-bon-001.webp',6,4),(55,'Alfajor Bon O Bon','40 g',2.8,0,7,'https://storageakinms.blob.core.windows.net/akinms-blob-container/alfajor-bon-001.webp',6,5),(56,'Barquillo Obsesión','21 g',1.4,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/obsecion-001.webp',6,1),(57,'Barquillo Obsesión','21 g',1.4,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/obsecion-001.webp',6,2),(58,'Barquillo Obsesión','21 g',1.4,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/obsecion-001.webp',6,3),(59,'Barquillo Obsesión','21 g',1.4,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/obsecion-001.webp',6,4),(60,'Barquillo Obsesión','21 g',1.4,0,10,'https://storageakinms.blob.core.windows.net/akinms-blob-container/obsecion-001.webp',6,5),(61,'Papas Lays Clásicas','160 g',4.6,0,20,'https://storageakinms.blob.core.windows.net/akinms-blob-container/lays-001.webp',7,1),(62,'Papas Lays Clásicas','160 g',4.6,0,20,'https://storageakinms.blob.core.windows.net/akinms-blob-container/lays-001.webp',7,2),(63,'Papas Lays Clásicas','160 g',4.6,0,20,'https://storageakinms.blob.core.windows.net/akinms-blob-container/lays-001.webp',7,3),(64,'Papas Lays Clásicas','160 g',4.6,0,20,'https://storageakinms.blob.core.windows.net/akinms-blob-container/lays-001.webp',7,4),(65,'Papas Lays Clásicas','160 g',4.6,0,20,'https://storageakinms.blob.core.windows.net/akinms-blob-container/lays-001.webp',7,5);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ubicacion`
--

DROP TABLE IF EXISTS `ubicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ubicacion` (
  `idubicacion` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `latitud` varchar(45) NOT NULL,
  `longitud` varchar(45) NOT NULL,
  PRIMARY KEY (`idubicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubicacion`
--

LOCK TABLES `ubicacion` WRITE;
/*!40000 ALTER TABLE `ubicacion` DISABLE KEYS */;
INSERT INTO `ubicacion` VALUES (1,'Surquillo','-12.114266772431108','-77.02397560190852'),(2,'Jesus Maria','-12.075788388775635','-77.05240504508424'),(3,'San Juan M.','-12.136070643184594','-76.96865918926244'),(4,'Jesus Maria','-12.074385687512693','-77.05429713344195'),(5,'Cercado de Lima','-12.031550156033774','-77.07748989634506');
/*!40000 ALTER TABLE `ubicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'akinmsdb2'
--

--
-- Dumping routines for database 'akinmsdb2'
--
/*!50003 DROP PROCEDURE IF EXISTS `actualizarEstadoPedido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarEstadoPedido`(nuevo_estado varchar(45), id_pedido bigint)
BEGIN
	UPDATE pedidos 
    SET estado = nuevo_estado
	WHERE idpedido = id_pedido;
    commit;
    SELECT * FROM pedidos WHERE idpedido = id_pedido;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `actualizarProducto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarProducto`(p_idproducto bigint,
										p_nombre varchar(30),
                                        p_stock int,
                                        p_precio double)
BEGIN
	UPDATE producto
	SET nombre = p_nombre,
    stock = p_stock,
    precio = p_precio
	WHERE idproducto = p_idproducto;
    commit;
    SELECT * FROM producto WHERE idproducto = p_idproducto;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `buscarBodeguero` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarBodeguero`(correo_b varchar(45),passw varchar(255))
BEGIN
	DECLARE existe_bodeguero INT;
	DECLARE id_bodeguero BIGINT;
	SET existe_bodeguero = (SELECT COUNT(*) FROM bodeguero WHERE correo = correo_b);
	IF existe_bodeguero = 1 THEN
		SET id_bodeguero = (SELECT idbodeguero FROM bodeguero WHERE correo = correo_b AND contraseña = passw);
		IF id_bodeguero = 0 THEN 
			SELECT "NO EXISTE CLIENTE" FROM bodeguero;
		ELSE
			SELECT * FROM bodeguero WHERE  idbodeguero = id_bodeguero;
		END IF;
	ELSE 	
		SELECT * FROM bodeguero WHERE  idbodeguero = -1;
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `buscarCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarCliente`(correo_b varchar(45),passw varchar(255))
BEGIN
	DECLARE existe_cliente INT;
    DECLARE id_cliente BIGINT;
    SET existe_cliente = (SELECT COUNT(*) FROM clientes WHERE correo = correo_b);
    IF existe_cliente = 1 THEN
		SET id_cliente = (SELECT idcliente FROM clientes WHERE correo = correo_b AND contraseña = passw);
		IF id_cliente = 0 THEN 
			SELECT "NO EXISTE CLIENTE" FROM clientes;
		ELSE
			SELECT * FROM clientes WHERE  idcliente = id_cliente;
		END IF;
	ELSE 	
		SELECT * FROM clientes WHERE  idcliente = -1;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `buscarProductoNombre` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarProductoNombre`(nombreBuscar varchar(25))
BEGIN
	SELECT 
		idproducto, 
        nombre, 
        descripcion, 
        precio, 
        descuento, 
        stock, 
        img, 
        idcategoria, 
        idbodega 
	FROM producto 
    WHERE 
		nombre LIKE CONCAT('%',nombreBuscar,'%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `buscarProductoNombreBodega` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarProductoNombreBodega`(nombreBuscar varchar(25), id_bodega int)
BEGIN
	SELECT 
		p.idproducto, 
		p.nombre, 
		p.descripcion, 
		p.precio, 
		p.descuento, 
		p.stock, 
		p.img, 
		p.idcategoria, 
		p.idbodega 
    FROM producto as p
    LEFT JOIN BODEGA b ON b.idbodega = p.idbodega 
    WHERE
		p.nombre LIKE CONCAT('%',nombreBuscar,'%') AND 
        p.idbodega = id_bodega;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `categoriaBodega` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `categoriaBodega`(id_bodega BIGINT)
BEGIN
	SELECT 
    categorias.idcategoria, 
	categorias.nombre,
    categorias.img_url
	FROM producto
	LEFT JOIN categorias
	ON producto.idcategoria = categorias.idcategoria
	LEFT JOIN bodega
	ON bodega.idbodega = producto.idbodega
	WHERE bodega.idbodega = id_bodega
    GROUP BY idcategoria;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `detallePedidoCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `detallePedidoCliente`(id_cliente BIGINT, id_pedido BIGINT)
BEGIN
	SELECT 
		ped.idpedido, 
        ped.fecha,
        ped.monto_total,
        ped.estado,
        ped.tipo_entrega,
        ped.metodo_pago,
        ped.idcliente,
        ped.idbodega
	FROM pedidos ped
	LEFT JOIN clientes c
	ON ped.idcliente = c.idcliente
	WHERE c.idcliente = id_cliente AND ped.idpedido = id_pedido
	GROUP BY ped.idpedido;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarProducto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarProducto`(idprod int)
BEGIN
	DECLARE existe_prod INT;
	SET existe_prod = (SELECT COUNT(*) FROM producto WHERE (idproducto = idprod));
    IF existe_prod = 1 THEN
		DELETE FROM producto WHERE idproducto = idprod;
        SELECT 'Producto fue Eliminado' as 'Mensaje';
	ELSE
		SELECT 'Producto no se encuentra en la lista de productos' as 'Mensaje';
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `listarBodegas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `listarBodegas`()
BEGIN
	SELECT 
		idbodega,
        nombre,
        premium,
        idubicacion
	FROM bodega;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `listarBodegasPremium` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `listarBodegasPremium`()
BEGIN
	SELECT 
		idbodega,
        nombre,
        premium,
        idubicacion
	FROM bodega
    WHERE premium = "1";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `mostrarProductosCategoria` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `mostrarProductosCategoria`(id_Categoria int, id_Bodega int)
BEGIN
	SELECT 
		#bodega.nombre BODEGA,
        producto.idproducto,
		producto.nombre,
		#categorias.nombre CATEGORIA,  
		producto.descripcion,
		producto.precio,
		producto.descuento,
		producto.stock,
		producto.img,
        producto.idcategoria,
        producto.idbodega
	FROM producto
	LEFT JOIN categorias
		ON producto.idcategoria = categorias.idcategoria
	LEFT JOIN bodega
		ON bodega.idbodega = producto.idbodega
	WHERE 
		categorias.idcategoria = id_Categoria AND bodega.idbodega = id_Bodega
	GROUP BY producto.nombre;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `mostrarVentas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `mostrarVentas`(fecha_inicio varchar(11), fecha_fin varchar(11), idBodega bigint)
BEGIN
	SELECT 
		a.idpedido,
        a.fecha,
		SUM(a.monto_total) monto_total,
        a.estado,
        a.tipo_entrega,
        a.metodo_pago,
        a.idcliente,
        a.idbodega
	FROM pedidos a
	LEFT JOIN BODEGA b ON b.idbodega = a.idbodega 
    WHERE 
		a.fecha between fecha_inicio AND 
        fecha_fin AND a.idbodega = idBodega
	group by a.fecha;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `pedidosBodega` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `pedidosBodega`(id_bodega int)
BEGIN
	SELECT 
		ped.idpedido, 
        ped.fecha,
        ped.monto_total,
        ped.estado,
        ped.tipo_entrega,
        ped.metodo_pago,
        ped.idcliente,
        ped.idbodega
	FROM pedidos ped
	LEFT JOIN bodega b
	ON ped.idbodega = b.idbodega
	WHERE b.idbodega = id_bodega
	GROUP BY ped.idpedido;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `pedidosCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `pedidosCliente`(id_cliente BIGINT)
BEGIN
	SELECT 
		ped.idpedido, 
        ped.fecha,
        ped.monto_total,
        ped.estado,
        ped.tipo_entrega,
        ped.metodo_pago,
        ped.idcliente,
        ped.idbodega
	FROM pedidos ped
	LEFT JOIN clientes c
	ON ped.idcliente = c.idcliente
	WHERE c.idcliente = id_cliente
	GROUP BY ped.idpedido;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `productosBodega` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `productosBodega`(IN id_bodega BIGINT)
BEGIN
	SELECT 
		idproducto, 
        nombre, 
        descripcion, 
        precio, 
        descuento, 
        stock, 
        img, 
        idcategoria, 
        idbodega 
	FROM producto 
    WHERE idBodega = id_bodega;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `registrarDetallesPedido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarDetallesPedido`(id_producto int, cantidad_r int)
BEGIN
	INSERT INTO detalle_pedido 
		(idpedido,
        cantidad,
        idproducto) 
	SELECT LAST_INSERT_ID() as idpedido, 
		cantidad_r as cantidad, 
        id_producto as idproducto 
	FROM pedidos LIMIT 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `registrarPedido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarPedido`(fecha_r date,
    monto double,
    estado varchar(45),
    entrega varchar(45),
    metodo varchar(45),
    idCliente int,
    idBodega int)
BEGIN
	INSERT INTO pedidos 
		(fecha,
        monto_total,
        estado,
        tipo_entrega, 
        metodo_pago,
        idcliente,
        idbodega) 
	VALUES
		(fecha_r,
        monto,
        estado,
        entrega,
        metodo,
        idCliente,
        idBodega);
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

-- Dump completed on 2023-07-08 20:38:08
