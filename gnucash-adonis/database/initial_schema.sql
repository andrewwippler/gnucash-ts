-- gnucash 5.1 22.5.2023
SET sql_notes = 0;
CREATE TABLE IF NOT EXISTS `accounts` (
  `guid` varchar(32) NOT NULL,
  `name` varchar(2048) NOT NULL,
  `account_type` varchar(2048) NOT NULL,
  `commodity_guid` varchar(32) DEFAULT NULL,
  `commodity_scu` int NOT NULL,
  `non_std_scu` int NOT NULL,
  `parent_guid` varchar(32) DEFAULT NULL,
  `code` varchar(2048) DEFAULT NULL,
  `description` varchar(2048) DEFAULT NULL,
  `hidden` int DEFAULT NULL,
  `placeholder` int DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `billterms` (
  `guid` varchar(32) NOT NULL,
  `name` varchar(2048) NOT NULL,
  `description` varchar(2048) NOT NULL,
  `refcount` int NOT NULL,
  `invisible` int NOT NULL,
  `parent` varchar(32) DEFAULT NULL,
  `type` varchar(2048) NOT NULL,
  `duedays` int DEFAULT NULL,
  `discountdays` int DEFAULT NULL,
  `discount_num` bigint DEFAULT NULL,
  `discount_denom` bigint DEFAULT NULL,
  `cutoff` int DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `books` (
  `guid` varchar(32) NOT NULL,
  `root_account_guid` varchar(32) NOT NULL,
  `root_template_guid` varchar(32) NOT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `budget_amounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `budget_guid` varchar(32) NOT NULL,
  `account_guid` varchar(32) NOT NULL,
  `period_num` int NOT NULL,
  `amount_num` bigint NOT NULL,
  `amount_denom` bigint NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `budgets` (
  `guid` varchar(32) NOT NULL,
  `name` varchar(2048) NOT NULL,
  `description` varchar(2048) DEFAULT NULL,
  `num_periods` int NOT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `commodities` (
  `guid` varchar(32) NOT NULL,
  `namespace` varchar(2048) NOT NULL,
  `mnemonic` varchar(2048) NOT NULL,
  `fullname` varchar(2048) DEFAULT NULL,
  `cusip` varchar(2048) DEFAULT NULL,
  `fraction` int NOT NULL,
  `quote_flag` int NOT NULL,
  `quote_source` varchar(2048) DEFAULT NULL,
  `quote_tz` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `customers` (
  `guid` varchar(32) NOT NULL,
  `name` varchar(2048) NOT NULL,
  `id` varchar(2048) NOT NULL,
  `notes` varchar(2048) NOT NULL,
  `active` int NOT NULL,
  `discount_num` bigint NOT NULL,
  `discount_denom` bigint NOT NULL,
  `credit_num` bigint NOT NULL,
  `credit_denom` bigint NOT NULL,
  `currency` varchar(32) NOT NULL,
  `tax_override` int NOT NULL,
  `addr_name` varchar(1024) DEFAULT NULL,
  `addr_addr1` varchar(1024) DEFAULT NULL,
  `addr_addr2` varchar(1024) DEFAULT NULL,
  `addr_addr3` varchar(1024) DEFAULT NULL,
  `addr_addr4` varchar(1024) DEFAULT NULL,
  `addr_phone` varchar(128) DEFAULT NULL,
  `addr_fax` varchar(128) DEFAULT NULL,
  `addr_email` varchar(256) DEFAULT NULL,
  `shipaddr_name` varchar(1024) DEFAULT NULL,
  `shipaddr_addr1` varchar(1024) DEFAULT NULL,
  `shipaddr_addr2` varchar(1024) DEFAULT NULL,
  `shipaddr_addr3` varchar(1024) DEFAULT NULL,
  `shipaddr_addr4` varchar(1024) DEFAULT NULL,
  `shipaddr_phone` varchar(128) DEFAULT NULL,
  `shipaddr_fax` varchar(128) DEFAULT NULL,
  `shipaddr_email` varchar(256) DEFAULT NULL,
  `terms` varchar(32) DEFAULT NULL,
  `tax_included` int DEFAULT NULL,
  `taxtable` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `employees` (
  `guid` varchar(32) NOT NULL,
  `username` varchar(2048) NOT NULL,
  `id` varchar(2048) NOT NULL,
  `language` varchar(2048) NOT NULL,
  `acl` varchar(2048) NOT NULL,
  `active` int NOT NULL,
  `currency` varchar(32) NOT NULL,
  `ccard_guid` varchar(32) DEFAULT NULL,
  `workday_num` bigint NOT NULL,
  `workday_denom` bigint NOT NULL,
  `rate_num` bigint NOT NULL,
  `rate_denom` bigint NOT NULL,
  `addr_name` varchar(1024) DEFAULT NULL,
  `addr_addr1` varchar(1024) DEFAULT NULL,
  `addr_addr2` varchar(1024) DEFAULT NULL,
  `addr_addr3` varchar(1024) DEFAULT NULL,
  `addr_addr4` varchar(1024) DEFAULT NULL,
  `addr_phone` varchar(128) DEFAULT NULL,
  `addr_fax` varchar(128) DEFAULT NULL,
  `addr_email` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `entries` (
  `guid` varchar(32) NOT NULL,
  `date` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `date_entered` datetime DEFAULT '1970-01-01 00:00:00',
  `description` varchar(2048) DEFAULT NULL,
  `action` varchar(2048) DEFAULT NULL,
  `notes` varchar(2048) DEFAULT NULL,
  `quantity_num` bigint DEFAULT NULL,
  `quantity_denom` bigint DEFAULT NULL,
  `i_acct` varchar(32) DEFAULT NULL,
  `i_price_num` bigint DEFAULT NULL,
  `i_price_denom` bigint DEFAULT NULL,
  `i_discount_num` bigint DEFAULT NULL,
  `i_discount_denom` bigint DEFAULT NULL,
  `invoice` varchar(32) DEFAULT NULL,
  `i_disc_type` varchar(2048) DEFAULT NULL,
  `i_disc_how` varchar(2048) DEFAULT NULL,
  `i_taxable` int DEFAULT NULL,
  `i_taxincluded` int DEFAULT NULL,
  `i_taxtable` varchar(32) DEFAULT NULL,
  `b_acct` varchar(32) DEFAULT NULL,
  `b_price_num` bigint DEFAULT NULL,
  `b_price_denom` bigint DEFAULT NULL,
  `bill` varchar(32) DEFAULT NULL,
  `b_taxable` int DEFAULT NULL,
  `b_taxincluded` int DEFAULT NULL,
  `b_taxtable` varchar(32) DEFAULT NULL,
  `b_paytype` int DEFAULT NULL,
  `billable` int DEFAULT NULL,
  `billto_type` int DEFAULT NULL,
  `billto_guid` varchar(32) DEFAULT NULL,
  `order_guid` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `gnclock` (
  `Hostname` varchar(255) DEFAULT NULL,
  `PID` int DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `invoices` (
  `guid` varchar(32) NOT NULL,
  `id` varchar(2048) NOT NULL,
  `date_opened` datetime DEFAULT '1970-01-01 00:00:00',
  `date_posted` datetime DEFAULT '1970-01-01 00:00:00',
  `notes` varchar(2048) NOT NULL,
  `active` int NOT NULL,
  `currency` varchar(32) NOT NULL,
  `owner_type` int DEFAULT NULL,
  `owner_guid` varchar(32) DEFAULT NULL,
  `terms` varchar(32) DEFAULT NULL,
  `billing_id` varchar(2048) DEFAULT NULL,
  `post_txn` varchar(32) DEFAULT NULL,
  `post_lot` varchar(32) DEFAULT NULL,
  `post_acc` varchar(32) DEFAULT NULL,
  `billto_type` int DEFAULT NULL,
  `billto_guid` varchar(32) DEFAULT NULL,
  `charge_amt_num` bigint DEFAULT NULL,
  `charge_amt_denom` bigint DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `jobs` (
  `guid` varchar(32) NOT NULL,
  `id` varchar(2048) NOT NULL,
  `name` varchar(2048) NOT NULL,
  `reference` varchar(2048) NOT NULL,
  `active` int NOT NULL,
  `owner_type` int DEFAULT NULL,
  `owner_guid` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `lots` (
  `guid` varchar(32) NOT NULL,
  `account_guid` varchar(32) DEFAULT NULL,
  `is_closed` int NOT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `orders` (
  `guid` varchar(32) NOT NULL,
  `id` varchar(2048) NOT NULL,
  `notes` varchar(2048) NOT NULL,
  `reference` varchar(2048) NOT NULL,
  `active` int NOT NULL,
  `date_opened` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `date_closed` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `owner_type` int NOT NULL,
  `owner_guid` varchar(32) NOT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `prices` (
  `guid` varchar(32) NOT NULL,
  `commodity_guid` varchar(32) NOT NULL,
  `currency_guid` varchar(32) NOT NULL,
  `date` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `source` varchar(2048) DEFAULT NULL,
  `type` varchar(2048) DEFAULT NULL,
  `value_num` bigint NOT NULL,
  `value_denom` bigint NOT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `recurrences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `obj_guid` varchar(32) NOT NULL,
  `recurrence_mult` int NOT NULL,
  `recurrence_period_type` varchar(2048) NOT NULL,
  `recurrence_period_start` date NOT NULL,
  `recurrence_weekend_adjust` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `schedxactions` (
  `guid` varchar(32) NOT NULL,
  `name` varchar(2048) DEFAULT NULL,
  `enabled` int NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `last_occur` date DEFAULT NULL,
  `num_occur` int NOT NULL,
  `rem_occur` int NOT NULL,
  `auto_create` int NOT NULL,
  `auto_notify` int NOT NULL,
  `adv_creation` int NOT NULL,
  `adv_notify` int NOT NULL,
  `instance_count` int NOT NULL,
  `template_act_guid` varchar(32) NOT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `slots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `obj_guid` varchar(32) NOT NULL,
  `name` varchar(4096) NOT NULL,
  `slot_type` int NOT NULL,
  `int64_val` bigint DEFAULT NULL,
  `string_val` varchar(4096) DEFAULT NULL,
  `double_val` double DEFAULT NULL,
  `timespec_val` datetime DEFAULT '1970-01-01 00:00:00',
  `guid_val` varchar(32) DEFAULT NULL,
  `numeric_val_num` bigint DEFAULT NULL,
  `numeric_val_denom` bigint DEFAULT NULL,
  `gdate_val` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `slots_guid_index` (`obj_guid`)
) ENGINE=InnoDB AUTO_INCREMENT=62678 DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `splits` (
  `guid` varchar(32) NOT NULL,
  `tx_guid` varchar(32) NOT NULL,
  `account_guid` varchar(32) NOT NULL,
  `memo` varchar(2048) NOT NULL,
  `action` varchar(2048) NOT NULL,
  `reconcile_state` varchar(1) NOT NULL,
  `reconcile_date` datetime DEFAULT '1970-01-01 00:00:00',
  `value_num` bigint NOT NULL,
  `value_denom` bigint NOT NULL,
  `quantity_num` bigint NOT NULL,
  `quantity_denom` bigint NOT NULL,
  `lot_guid` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`guid`),
  KEY `splits_tx_guid_index` (`tx_guid`),
  KEY `splits_account_guid_index` (`account_guid`)
);

CREATE TABLE IF NOT EXISTS `taxtable_entries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `taxtable` varchar(32) NOT NULL,
  `account` varchar(32) NOT NULL,
  `amount_num` bigint NOT NULL,
  `amount_denom` bigint NOT NULL,
  `type` int NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `taxtables` (
  `guid` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  `refcount` bigint NOT NULL,
  `invisible` int NOT NULL,
  `parent` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `transactions` (
  `guid` varchar(32) NOT NULL,
  `currency_guid` varchar(32) NOT NULL,
  `num` varchar(2048) NOT NULL,
  `post_date` datetime DEFAULT '1970-01-01 00:00:00',
  `enter_date` datetime DEFAULT '1970-01-01 00:00:00',
  `description` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`guid`),
  KEY `tx_post_date_index` (`post_date`)
);

CREATE TABLE IF NOT EXISTS `vendors` (
  `guid` varchar(32) NOT NULL,
  `name` varchar(2048) NOT NULL,
  `id` varchar(2048) NOT NULL,
  `notes` varchar(2048) NOT NULL,
  `currency` varchar(32) NOT NULL,
  `active` int NOT NULL,
  `tax_override` int NOT NULL,
  `addr_name` varchar(1024) DEFAULT NULL,
  `addr_addr1` varchar(1024) DEFAULT NULL,
  `addr_addr2` varchar(1024) DEFAULT NULL,
  `addr_addr3` varchar(1024) DEFAULT NULL,
  `addr_addr4` varchar(1024) DEFAULT NULL,
  `addr_phone` varchar(128) DEFAULT NULL,
  `addr_fax` varchar(128) DEFAULT NULL,
  `addr_email` varchar(256) DEFAULT NULL,
  `terms` varchar(32) DEFAULT NULL,
  `tax_inc` varchar(2048) DEFAULT NULL,
  `tax_table` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`guid`)
);

CREATE TABLE IF NOT EXISTS `versions` (
  `table_name` varchar(50) NOT NULL,
  `table_version` int NOT NULL,
  PRIMARY KEY (`table_name`)
);
SET sql_notes = 1;
