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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily`
--

LOCK TABLES `daily` WRITE;
/*!40000 ALTER TABLE `daily` DISABLE KEYS */;
INSERT INTO `daily` VALUES (1,'Aujourd\'hui est le plus beau jour de ma vie car c\'est le jour que je vis.','10 minutes de lecture','https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fphotos%2Fzen&psig=AOvVaw2QODQKuO7sKDiYoppnUCEu&ust=1651678845352000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCw3qnVw_cCFQAAAAAdAAAAABAE'),(2,' Tu sais que tu es sur le bon chemin lorsque regarder en arrière ne t\'intéresse plus.','30 minutes de marche dans la nature',' https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.depositphotos.com%2Fstock-photos%2Fnature-zen.html&psig=AOvVaw2QODQKuO7sKDiYoppnUCEu&ust=1651678845352000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCw3qnVw_cCFQAAAAAdAAAAABAd'),(3,'En te levant le matin, rappelle-toi combien précieux est le privilège de vivre, de respirer, d\'être heureux.','Cuisiner un bon petit plat',' https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.fr%2Farmellehelouis%2Fphoto-zen%2F&psig=AOvVaw2QODQKuO7sKDiYoppnUCEu&ust=1651678845352000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCw3qnVw_cCFQAAAAAdAAAAABBQ'),(4,'Ayez le courage de suivre votre intuition et votre cœur.','15 minutes de méditation',' https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Fzen-wallpapers&psig=AOvVaw3ic26bxsPzbHQGUITMyZYI&ust=1651680055863000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjZ_evZw_cCFQAAAAAdAAAAABAO'),(5,' Tu es toujours plus fort que ce que tu penses.','Observer les oiseaux pendant 10 minutes','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwall.alphacoders.com%2Fby_sub_category.php%3Fid%3D178429%26name%3DZen%2BWallpapers&psig=AOvVaw3ic26bxsPzbHQGUITMyZYI&ust=1651680055863000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjZ_evZw_cCFQAAAAAdAAAAABAa'),(6,' A ceux qui osent, rien n’est impossible.','Rire pendant 15 minutes','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teahub.io%2Fviewwp%2FimRhm_japanese-zen%2F&psig=AOvVaw3ic26bxsPzbHQGUITMyZYI&ust=1651680055863000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjZ_evZw_cCFQAAAAAdAAAAABAf');
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
  `content` varchar(255) DEFAULT NULL COMMENT 'content',
  `avatar` longblob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Fanny','THIBERT','Fay','fanny@gmail.com','$2b$10$W5xM53dtZ6LcYR7maKD3EOE0SHEA8m9kAybTUosZhYoQy/rm3JQmS','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhbm55QGdtYWlsLmNvbSIsImlhdCI6MTY1MTU2NjE4NH0.lHTiXF8C-R2QNgZcCgRFCZB8YHKb8mNYfDoEne1Sfog',0,'2022-05-03 08:56:30','2022-05-03 08:56:30',NULL,_binary 'undefined'),(6,'Fanny2','THIBERT2','Fay2','fanny2@gmail.com','$2b$10$n356YJhIkFwIoa3a5RF2e.i.kyOoJxNBYLaJK7587Er6W4OxP6Qfu',NULL,0,'2022-05-03 13:22:31','2022-05-03 13:22:31',NULL,_binary 'avatar-1651576951440.jpg'),(7,'Fanny3','THIBERT3','Fay3','fanny3@gmail.com','$2b$10$2fHEBNBTTghDxnPHv4RAROhtzEXWk39F0VQHrH61derKiYhVLnGeS',NULL,0,'2022-05-03 13:35:37','2022-05-03 13:35:37',NULL,_binary 'avatar-1651577737824.jpg'),(8,'THIBERT10','Fanny10','Fay10','fanny10@gmail.com','$2b$10$wNuhPQgjb1wTsPgoTUVO3.Fc4cfl74DOBOnpTpgtvk09nOgUuMLO6',NULL,0,'2022-05-04 15:20:32','2022-05-04 15:20:32',NULL,_binary 'avatar-1651670432363.png');
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

-- Dump completed on 2022-05-04 15:36:18
