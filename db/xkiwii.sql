-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2026 at 10:43 AM
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
  `valid_till_date` date NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `businesses`
--

INSERT INTO `businesses` (`id`, `business_name`, `owner_name`, `address`, `start_date`, `valid_till_date`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test1', 'test2', '2024-07-02', '2024-10-02', 'inactive', '2026-01-10 15:12:26', '2026-01-10 15:12:26');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `business_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `payment_status` enum('online paid','cash paid','cancelled','pending') NOT NULL,
  `discount_amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `business_id`, `name`, `phone_number`, `order_id`, `payment_status`, `discount_amount`, `createdAt`, `updatedAt`) VALUES
(1, '1', 'test111', '1234567890', '1', 'pending', 10, '2024-07-03 18:30:28', '2025-10-04 20:35:22'),
(2, '1', 'test111', '1234567890', '1', 'pending', 10, '2025-10-04 20:34:24', '2025-10-04 22:57:05'),
(3, '1', 'test', '1234567890', '1', 'pending', 0, '2025-10-04 22:56:07', '2025-10-04 22:56:07');

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
(5, '1', 'akash2', '342', 'no', '2026-01-10 14:47:33', '2026-01-10 14:55:54');

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
(1, 'super_admin'),
(2, 'admin'),
(3, 'lawyer'),
(4, 'team_member');

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
(1, 0, 'akash1', '8287284653', '$2b$10$PPhzINViABUO7q8u7trPx.SMvv9bt2VEpvJd06Dv/lUc6/d96KDmi', 123456, 'Active', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(2, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(3, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(4, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(5, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(6, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(7, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(8, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(9, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(10, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(11, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(12, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(13, 0, 'akash2', '8287284654', '$2b$10$3k/l5xyF2pV.zKiowAXYe.BcOhrerQbLI3wEzew6vUmL0jy3O1l9e', 123456, 'Inactive', 'fb6ff3c1-8598-44bb-8655-bd1aefda67f1.jpg', 1, 2, '2023-06-29 07:57:00', '2023-06-29 07:57:00'),
(14, 0, 'akash1111111', '8287284612', '$2b$10$SsybT8.h.HlRD3DgrSsivOyE1QQLvIollkFBlJkBZdQ6746zuJvEK', NULL, 'Active', '', 1, 2, '2025-10-04 14:07:34', '2025-10-04 14:07:34');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
