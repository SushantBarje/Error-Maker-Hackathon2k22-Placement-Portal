-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2022 at 06:35 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `placement`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `ctc` varchar(100) NOT NULL,
  `ssc_marks` varchar(100) NOT NULL,
  `hsc_marks` varchar(100) NOT NULL,
  `degree_agg` varchar(100) NOT NULL,
  `backlog_allowed` varchar(100) NOT NULL,
  `other` varchar(255) DEFAULT NULL,
  `active_status` int(11) NOT NULL,
  `expires_date` datetime NOT NULL,
  `gap` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `description`, `location`, `role`, `ctc`, `ssc_marks`, `hsc_marks`, `degree_agg`, `backlog_allowed`, `other`, `active_status`, `expires_date`, `gap`) VALUES
(1, 'Google', 'Good company', 'SDE-1', '5000000', 'San Francisco', '60', '60', '60', '1', 'no', 1, '2022-03-12 00:25:27', 1),
(2, 'adsfa', 'Descriptiasdfaaon', 'sdfa', 'sdfa', 'sdf', 'asdf', 'adsf', 'asdf', 'asdf', 'adsf', 1, '2022-03-12 05:26:48', 0),
(3, 'adsfasd', 'Descriasdfasdfaption', 'sdfasda', 'sdfaa', 'sdfa', 'asdfa', 'sdfas', 'dfas', 'dfa', 'sdfa', 1, '2022-03-12 07:09:40', 0),
(4, 'afdasd', 'Deasdfscription', 'asdfa', 'adsfa', 'adfasd', 'asdfa', 'asdf', 'asdf', 'asdf', 'asdfa', 1, '2022-03-12 08:59:14', 0);

-- --------------------------------------------------------

--
-- Table structure for table `company_status`
--

CREATE TABLE `company_status` (
  `id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_status`
--

INSERT INTO `company_status` (`id`, `student_id`, `company_id`, `status`) VALUES
(1, NULL, 1, 1),
(2, NULL, 1, 1),
(3, NULL, 1, 1),
(6, 6, 1, 1),
(7, 6, 1, 1),
(8, 6, 1, 1),
(9, 6, 1, 1),
(10, 6, 1, 1),
(11, 6, 1, 1),
(12, 6, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `dept_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `dept_name`) VALUES
(1, 'Computer Science and Engineering'),
(2, 'Mechanical Engineering'),
(3, 'Electronics and Telecommunication'),
(4, 'Electrical Engineering'),
(5, 'Civil Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `prn_no` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `mother_name` varchar(100) NOT NULL,
  `father_name` varchar(100) NOT NULL,
  `mobile_no` varchar(100) NOT NULL,
  `dept_id` int(10) NOT NULL,
  `class` varchar(10) NOT NULL,
  `aadhar_no` varchar(20) NOT NULL,
  `pan_card` varchar(20) NOT NULL,
  `ssc_marks` varchar(20) NOT NULL,
  `hsc_marks` varchar(20) NOT NULL,
  `degree_marks` varchar(20) NOT NULL,
  `gap` varchar(10) NOT NULL,
  `backlog` varchar(10) NOT NULL,
  `technical_skills` varchar(10) NOT NULL,
  `project` varchar(255) DEFAULT NULL,
  `work_exp` varchar(255) DEFAULT NULL,
  `achievements` varchar(255) DEFAULT NULL,
  `certificates` varchar(255) DEFAULT NULL,
  `resume` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `first_name`, `middle_name`, `last_name`, `gender`, `prn_no`, `email`, `dob`, `mother_name`, `father_name`, `mobile_no`, `dept_id`, `class`, `aadhar_no`, `pan_card`, `ssc_marks`, `hsc_marks`, `degree_marks`, `gap`, `backlog`, `technical_skills`, `project`, `work_exp`, `achievements`, `certificates`, `resume`, `password`) VALUES
(4, 'Sushant', 'H', 'Jadhav', '', '', 'sushantmore4@gmail.com', '0000-00-00', '', '', '123445667', 0, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, '', 'ceadaea73b0a1f254a43e62cbcfd6a21f978f188b742d8c727de56804265e351'),
(5, 'Sushant', 'H', 'Jadhav', '', '', 'sushantjadhav4@gmail.com', '0000-00-00', '', '', '123445667', 0, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, '', '25c05c8c6c0dd2e251ebe8a7b1bc862277b899eb0b9b4f34d6874553702323c1'),
(6, 'Sushant', 'H', 'Jadhav', 'male', '12324534', 'sushantjadhav2@gmail.com', '2000-12-20', 'Aei', 'Papa', '12345667', 1, 'F.Y.B.Tech', '1231434', '12342134123', '90', '60', '70', '0', '0', 'C++', 'BLOCKcHAIN', NULL, 'no', NULL, '', '8b07dca01025c967d1a565c4b51c750f86e75831d38b92bda7bd7381cb5b4641'),
(7, 'sdfa', 'sdfa', 'sdfa', '', '', 'sdfa@gmail.com1', '0000-00-00', '', '', '341234123', 0, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, '', 'c26766eeefb2e89d370cc6f15ed38b6af49fc26c1f5b61df579a3e4b6a71e483'),
(8, 'sdfa', 'sdfa', 'sdfa', '', '', 'sdfaa@gmail.com1', '0000-00-00', '', '', '341234123', 0, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, '', 'ad4d999a231445e5e083c538a86905f538026bc9c1e350e82093eaf89fea6f6e'),
(9, 'qwerqwerq', 'werqq', 'werq', '', '', 'wweq@gmqi.com', '0000-00-00', '', '', '1231234', 0, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, '', 'b94ee3ef76de18744a69db2f426a37e2795ab54a165ad52ce64634a29cf224a4');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'admin', '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_status`
--
ALTER TABLE `company_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `company_status`
--
ALTER TABLE `company_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company_status`
--
ALTER TABLE `company_status`
  ADD CONSTRAINT `company_status_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  ADD CONSTRAINT `company_status_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
