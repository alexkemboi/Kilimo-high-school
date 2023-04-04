-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2023 at 11:00 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kilimohighschool`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `NoStudents` int(255) NOT NULL,
  `ClassName` varchar(255) NOT NULL,
  `NoSubjects` varchar(255) NOT NULL,
  `ClassTeacher` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`NoStudents`, `ClassName`, `NoSubjects`, `ClassTeacher`) VALUES
(20, 'Form 4', '12', 'peter'),
(30, 'Form 2', '10', 'MR BIWOTT');

-- --------------------------------------------------------

--
-- Table structure for table `stream`
--

CREATE TABLE `stream` (
  `StreamName` varchar(11) NOT NULL,
  `ClassName` varchar(11) NOT NULL,
  `AcademicYear` varchar(11) NOT NULL,
  `Teacher` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stream`
--

INSERT INTO `stream` (`StreamName`, `ClassName`, `AcademicYear`, `Teacher`) VALUES
('west', 'form one', '2020', 'alex');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `AdmissionNumber` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PhoneNumber` varchar(255) NOT NULL,
  `Class` varchar(255) NOT NULL,
  `Stream` varchar(255) NOT NULL,
  `Dob` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`AdmissionNumber`, `Name`, `Email`, `PhoneNumber`, `Class`, `Stream`, `Dob`) VALUES
('4127', 'alex kemboi', 'alexkemboi97@gmail.com', '0726837210', 'form one ', '', '2023-04-05'),
('4127', 'alex kemboi', 'alexkemboi97@gmail.com', '0726837210', 'form one ', '', '2023-04-07');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
