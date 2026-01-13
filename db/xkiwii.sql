-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2026 at 02:35 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xkiwii`
--

-- --------------------------------------------------------

--
-- Table structure for table `businesses`
--

CREATE TABLE `businesses` (
  `id` int(11) NOT NULL,
  `business_name` varchar(255) NOT NULL,
  `owner_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `expiry_date` date NOT NULL,
  `tax` int(11) NOT NULL DEFAULT '0',
  `status` enum('Active','Inactive') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `businesses`
--

INSERT INTO `businesses` (`id`, `business_name`, `owner_name`, `address`, `start_date`, `expiry_date`, `tax`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test1', 'test2', '2024-07-02', '2024-10-02', 5, 'Active', '2026-01-10 15:12:26', '2026-01-10 15:12:26'),
(2, 'akash business', 'akash', 'jffhdksl', '2026-01-10', '2027-01-10', 0, 'Active', '2026-01-10 15:25:12', '2026-01-10 15:25:12'),
(3, 'akash business', 'akash', 'kjsdads', '2026-01-10', '2027-01-10', 0, 'Active', '2026-01-10 15:30:54', '2026-01-10 15:30:54'),
(4, 'akash business', 'akash', 'fnjkdskl', '2026-01-10', '2027-01-10', 0, '', '2026-01-10 15:31:20', '2026-01-10 15:31:20'),
(5, 'akash business', 'akash', 'klfds', '2026-01-10', '2027-01-10', 0, '', '2026-01-10 16:06:21', '2026-01-10 16:06:21'),
(6, 'akash business', 'akash', 'klfds', '2026-01-10', '2027-01-10', 0, '', '2026-01-10 16:07:33', '2026-01-10 16:07:33'),
(7, 'akash business', 'akash', 'jksjlkdsasasd', '2026-01-10', '2027-01-10', 0, '', '2026-01-10 16:30:50', '2026-01-10 16:30:50');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `business_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `payment_status` enum('online paid','cash paid','cancelled','pending') NOT NULL,
  `discount_amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `business_id`, `name`, `phone`, `order_id`, `payment_status`, `discount_amount`, `createdAt`, `updatedAt`) VALUES
(1, '6', 'jksdlk1', '1234567890', '0', 'cancelled', 768, '2026-01-13 17:35:15', '2026-01-13 17:35:31');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `business_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` varchar(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `business_id`, `name`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, '1', 'test', '1113212213', '11', '2025-10-25 13:36:08', '2025-10-25 13:39:49');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `business_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `availability` enum('yes','no') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `business_id`, `name`, `price`, `availability`, `createdAt`, `updatedAt`) VALUES
(2, '1', 'test', '12', 'yes', '2025-10-04 22:52:35', '2025-10-04 22:52:35'),
(3, '1', 'akash2', '2', 'yes', '2026-01-10 14:44:54', '2026-01-10 14:44:54'),
(4, '1', 'test', '23', 'no', '2026-01-10 14:47:15', '2026-01-10 14:47:15'),
(5, '1', 'akash2', '342', 'no', '2026-01-10 14:47:33', '2026-01-10 14:55:54'),
(6, '4', 'akash1111111', '3221', 'no', '2026-01-13 15:51:26', '2026-01-13 15:51:26');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `delivery_status` enum('ordered','delivered') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `business_id`, `customer_id`, `menu_id`, `quantity`, `delivery_status`, `createdAt`, `updatedAt`) VALUES
(2, 1, 1, 1, 1, 'ordered', '2025-10-04 22:58:02', '2025-10-04 22:58:02');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `business_id` varchar(255) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `status` enum('Pending','Failed','Completed') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `business_id`, `amount`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '1', '390823', 'Pending', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `business_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` varchar(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `business_id`, `name`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, '1', 'akash2', '1111', '43223234432', '2025-10-25 15:07:03', '2025-10-25 15:10:56');

-- --------------------------------------------------------

--
-- Table structure for table `referrals`
--

CREATE TABLE `referrals` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `referral_code` varchar(11) NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `referrals`
--

INSERT INTO `referrals` (`id`, `business_id`, `referral_code`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'test123', 'inactive', '2025-10-05 20:07:48', '2025-10-26 18:47:33'),
(2, 1, 'ajhg', 'active', '2025-10-05 20:10:02', '0000-00-00 00:00:00'),
(3, 1, 'test123', 'active', '2025-10-05 20:10:22', '0000-00-00 00:00:00'),
(4, 1, 'dsfo7327098', 'active', '2025-10-25 15:28:35', '0000-00-00 00:00:00'),
(5, 1, 'test123', 'active', '2025-10-26 18:51:48', '2025-10-26 18:51:48');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'admin'),
(2, 'user'),
(3, 'team member');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `otp` int(11) DEFAULT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `profile_pic` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `business_id`, `name`, `phone`, `password`, `otp`, `status`, `profile_pic`, `parent_id`, `role_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'akash2', '8287284653', '$2b$10$mMB2cCxwqiqWF5vlEBjrQuU.NAUvfrnQ6EYgSr9iE3cq2H0QYmcTy', NULL, 'Active', '', 1, 1, '2026-01-10 15:32:53', '2026-01-10 15:32:53'),
(2, 2, 'akash2', '8287284654', '$2b$10$xg8p3AMZjZuPMhZwuKRWU.2M2MepSJyrIrysdlv/hDgdi37lOs.OC', NULL, 'Active', '', 1, 2, '2026-01-10 16:10:18', '2026-01-10 16:10:18'),
(3, 3, 'akash2', '8287284655', '$2b$10$dseZOAI6lWyT/8VczOOoIONP2R.D25e39LSYomZYihfI9hSE1DmlS', NULL, 'Active', '', 1, 3, '2026-01-10 16:30:56', '2026-01-10 16:30:56'),
(4, 1, 'akash2_user', '8287284656', '$2b$10$ePYU7d1LrWoRwVEshdbA0elvxm8TgZt3uwllKwt7fPYamM0vqHmH.', NULL, 'Active', '', 1, 3, '2026-01-13 18:48:48', '2026-01-13 18:48:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `businesses`
--
ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `referrals`
--
ALTER TABLE `referrals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `businesses`
--
ALTER TABLE `businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `referrals`
--
ALTER TABLE `referrals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
