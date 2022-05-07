-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: micros
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `daily`
--

DROP TABLE IF EXISTS `daily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `positive` varchar(255) NOT NULL,
  `challenge` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `dailyJoke` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily`
--

LOCK TABLES `daily` WRITE;
/*!40000 ALTER TABLE `daily` DISABLE KEYS */;
INSERT INTO `daily` VALUES (1,'Aujourd\'hui est le plus beau jour de ma vie car c\'est le jour que je vis.','10 minutes de lecture','https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_960_720.jpg','Pourquoi les canards sont toujours à l\'heure ? Parce qu’ils sont dans l’étang. '),(2,' Tu sais que tu es sur le bon chemin lorsque regarder en arrière ne t\'intéresse plus.','30 minutes de marche dans la nature','https://cdn.pixabay.com/photo/2017/02/05/15/04/stones-2040340_960_720.jpg','C\'est quoi un petit pois avec une épée face à une carotte avec une épée ? Un bon duel.'),(3,'En te levant le matin, rappelle-toi combien précieux est le privilège de vivre, de respirer, d\'être heureux.','Cuisiner un bon petit plat','https://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556_960_720.jpghttps://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556_960_720.jpg','C\'est quoi une chauve-souris avec une perruque ? Une souris.'),(4,'Ayez le courage de suivre votre intuition et votre cœur.','15 minutes de méditation','https://cdn.pixabay.com/photo/2018/04/21/15/21/yoga-3338691_960_720.jpg','C\'est l\'histoire du ptit dej, tu la connais ? Pas de bol.'),(5,' Tu es toujours plus fort que ce que tu penses.','Observer les oiseaux pendant 10 minutes','https://cdn.pixabay.com/photo/2020/08/31/20/24/zen-5533531_960_720.jpg','Dans quel pays ne bronze-t-on pas du nez ? Au Népal'),(6,' A ceux qui osent, rien n’est impossible.','Rire pendant 15 minutes','https://cdn.pixabay.com/photo/2018/07/19/13/49/buddha-3548554_960_720.jpg','La maman d’Émilie n’est pas contente - Regarde, le lait a débordé, je t’avais pourtant demandé de regarder ta montre. - Mais je l’ai fait, il était exactement 8 h 10 quand le lait a débordé !');
/*!40000 ALTER TABLE `daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `firstname` varchar(50) NOT NULL COMMENT 'First Name',
  `lastname` varchar(50) NOT NULL COMMENT 'Last Name',
  `username` varchar(50) NOT NULL COMMENT 'Username',
  `email` varchar(50) NOT NULL COMMENT 'Email',
  `password` varchar(255) NOT NULL COMMENT 'Password',
  `reset_password_token` varchar(255) DEFAULT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Role',
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'THIBERT','Fanny','Fay','fanny@gmail.com','$2b$10$0.bKyxLF2T74Ma7kpbc7RebiqMV8ZDcO/xDDAmyappTGwLfwRtkMu',NULL,0,'2022-05-05 11:09:54','2022-05-05 11:09:54'),(12,'Fanny2','THIBERT2','Fay2','fanny2@gmail.com','$2b$10$2UtUpomp41ydzF6ec0PGU.FVjsRCTALP68RdLlO98KnnedFz8xZzO',NULL,0,'2022-05-05 11:12:32','2022-05-05 11:12:32'),(13,'Fanny3','THIBERT3','Fay3','fanny3@gmail.com','$2b$10$n7yzEM26FFkPfRHCJdbCJ.czMiH2BHF/MNQssmB1U4aRRFOC.k6Ti',NULL,0,'2022-05-05 11:18:36','2022-05-05 11:18:36'),(14,'Fanny4','THIBERT4','Fay4','fanny4@gmail.com','$2b$10$PcBZukkW7iA0s7VOkENF3ORa/F8gDiTYVXmDqDpVcimzcyFfj8uRK',NULL,0,'2022-05-05 11:23:00','2022-05-05 11:23:00'),(15,'Fanny5','THIBERT5','Fay5','fanny5@gmail.com','$2b$10$E1DRJP4pKYBa3Wg.ECZ2B.SOdv1xPClta8.NtFcI4zFw5F8Z5OW3u',NULL,0,'2022-05-05 11:24:19','2022-05-05 11:24:19'),(16,'Fanny6','THIBERT6','Fay6','fanny6@gmail.com','$2b$10$f5IpjKuzLVUK6yhGuS.b/e0xCulXOIyjvYe7Ste2HdHwQS.kdLTGq',NULL,0,'2022-05-05 11:27:02','2022-05-05 11:27:02');
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

-- Dump completed on 2022-05-07 17:26:24
