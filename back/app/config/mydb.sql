-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Дек 22 2018 г., 07:20
-- Версия сервера: 5.7.21
-- Версия PHP: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Структура таблицы `furioza_i_7maxov`
--

CREATE TABLE `furioza_i_7maxov` (
  `id` int(11) NOT NULL,
  `task` int(11) NOT NULL,
  `start_time` bigint(15) DEFAULT NULL,
  `end_time` bigint(15) DEFAULT NULL,
  `answers` varchar(250) DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `general`
--

CREATE TABLE `general` (
  `id` int(11) NOT NULL,
  `team_name` varchar(150) NOT NULL,
  `start_time` bigint(15) DEFAULT NULL,
  `end_time` bigint(15) DEFAULT NULL,
  `total_points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `kletki,svyazany`
--

CREATE TABLE `kletki,svyazany` (
  `id` int(11) NOT NULL,
  `task` int(11) NOT NULL,
  `start_time` bigint(15) DEFAULT NULL,
  `end_time` bigint(15) DEFAULT NULL,
  `answers` varchar(250) DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `oblachnyi_atlas`
--

CREATE TABLE `oblachnyi_atlas` (
  `id` int(11) NOT NULL,
  `task` int(11) NOT NULL,
  `start_time` bigint(15) DEFAULT NULL,
  `end_time` bigint(15) DEFAULT NULL,
  `answers` varchar(250) DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `prizraki_v_dospehah`
--

CREATE TABLE `prizraki_v_dospehah` (
  `id` int(11) NOT NULL,
  `task` int(11) NOT NULL,
  `start_time` bigint(15) DEFAULT NULL,
  `end_time` bigint(15) DEFAULT NULL,
  `answers` varchar(250) DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `spyce_i_chervi`
--

CREATE TABLE `spyce_i_chervi` (
  `id` int(11) NOT NULL,
  `task` int(11) NOT NULL,
  `start_time` bigint(15) DEFAULT NULL,
  `end_time` bigint(15) DEFAULT NULL,
  `answers` varchar(250) DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `furioza_i_7maxov`
--
ALTER TABLE `furioza_i_7maxov`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `kletki,svyazany`
--
ALTER TABLE `kletki,svyazany`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `oblachnyi_atlas`
--
ALTER TABLE `oblachnyi_atlas`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `prizraki_v_dospehah`
--
ALTER TABLE `prizraki_v_dospehah`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `spyce_i_chervi`
--
ALTER TABLE `spyce_i_chervi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `furioza_i_7maxov`
--
ALTER TABLE `furioza_i_7maxov`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `general`
--
ALTER TABLE `general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `kletki,svyazany`
--
ALTER TABLE `kletki,svyazany`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `oblachnyi_atlas`
--
ALTER TABLE `oblachnyi_atlas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT для таблицы `prizraki_v_dospehah`
--
ALTER TABLE `prizraki_v_dospehah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `spyce_i_chervi`
--
ALTER TABLE `spyce_i_chervi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
