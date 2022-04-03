USE ngm_reporter;

INSERT IGNORE INTO `log_registry` (`id`, `table_name`, `display_name`) VALUES
(1, 'email_connection_log', 'Email connections');

INSERT IGNORE INTO `log_registry` (`id`, `table_name`, `display_name`) VALUES
(2, 'ssh_log', 'SSH connections');

INSERT IGNORE INTO `log_registry` (`id`, `table_name`, `display_name`) VALUES
(3, 'network_discovery_task', 'Network Discovery Tasks');

INSERT IGNORE INTO `dnsrbl_status` (status, name) VALUES
(0, 'Clean');

INSERT INTO `dnsrbl_status` (status, name) VALUES
(2, 'Static UBE sources, verified spam services (hosting or support) and ROKSO spammers');

INSERT INTO `dnsrbl_status` (status, name) VALUES
(3, 'Static UBE sources, verified spam services (hosting or support) and ROKSO spammers');

INSERT INTO `dnsrbl_status` (status, name) VALUES
(4, 'Illegal 3rd party exploits, including proxies, worms and trojan exploits');

INSERT INTO `dnsrbl_status` (status, name) VALUES
(9, 'Static UBE sources, verified spam services (hosting or support) and ROKSO spammers');

INSERT INTO `dnsrbl_status` (status, name) VALUES
(10, 'PBL. IP ranges which should not be delivering unauthenticated SMTP email. ISP Maintained.');

INSERT INTO `dnsrbl_status` (status, name) VALUES
(11, 'PBL. IP ranges which should not be delivering unauthenticated SMTP email. Spamhaus Maintained');

INSERT IGNORE INTO `geoscheme` (`id`,`name`,`deletable`) VALUES
(1,'Eurasian Customs Union',0);

INSERT IGNORE INTO `geoscheme` (`id`,`name`,`deletable`) VALUES
(2,'European Union',0);

INSERT IGNORE INTO `geoscheme` (`id`,`name`,`deletable`) VALUES
(3,'United Nations geoscheme',0);

INSERT IGNORE INTO `geoscheme` (`id`,`name`,`default`,`deletable`) VALUES
(4,'Default',1,0);

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AF',' Afghanistan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AX',' Aland Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AL',' Albania');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('DZ',' Algeria');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AS',' American Samoa');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AD',' Andorra');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AO',' Angola');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AI',' Anguilla');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AQ',' Antarctica');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AG','Antigua and Barbuda');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AR','Argentina');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AM','Armenia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AW','Aruba');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AU','Australia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AT','Austria');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AZ','Azerbaijan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BS','Bahamas');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BH','Bahrain');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BD','Bangladesh');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BB','Barbados');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BY','Belarus');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BE','Belgium');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BZ','Belize');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BJ','Benin');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BM','Bermuda');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BT','Bhutan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BO','Bolivia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BA','Bosnia and Herzegovina');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BW','Botswana');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BV','Bouvet Island');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BR','Brazil');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('VG','British Virgin Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IO','British Indian Ocean Territory');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BN','Brunei Darussalam');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BG','Bulgaria');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BF','Burkina Faso');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BI','Burundi');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KH','Cambodia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CM','Cameroon');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CA','Canada');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CV','Cape Verde');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KY','Cayman Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CF','Central African Republic');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TD','Chad');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CL','Chile');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CN','China');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('HK','Hong Kong, SAR China');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MO','Macao, SAR China');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CX','Christmas Island');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CC','Cocos (Keeling) Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CO','Colombia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KM','Comoros');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CG','Congo (Brazzaville)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CD','Congo, (Kinshasa)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CK','Cook Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CR','Costa Rica');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CI','Côte d\'Ivoire');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('HR','Croatia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CU','Cuba');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CY','Cyprus');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CZ','Czech Republic');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('DK','Denmark');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('DJ','Djibouti');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('DM','Dominica');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('DO','Dominican Republic');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('EC','Ecuador');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('EG','Egypt');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SV','El Salvador');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GQ','Equatorial Guinea');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ER','Eritrea');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('EE','Estonia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ET','Ethiopia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('FK','Falkland Islands (Malvinas)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('FO','Faroe Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('FJ','Fiji');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('FI','Finland');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('FR','France');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GF','French Guiana');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PF','French Polynesia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TF','French Southern Territories');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GA','Gabon');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GM','Gambia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GE','Georgia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('DE','Germany');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GH','Ghana');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GI','Gibraltar');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GR','Greece');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GL','Greenland');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GD','Grenada');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GP','Guadeloupe');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GU','Guam');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GT','Guatemala');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GG','Guernsey');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GN','Guinea');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GW','Guinea-Bissau');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GY','Guyana');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('HT','Haiti');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('HM','Heard and Mcdonald Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('VA','Holy See (Vatican City State)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('HN','Honduras');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('HU','Hungary');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IS','Iceland');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IN','India');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ID','Indonesia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IR','Iran, Islamic Republic of');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IQ','Iraq');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IE','Ireland');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IM','Isle of Man');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IL','Israel');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('IT','Italy');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('JM','Jamaica');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('JP','Japan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('JE','Jersey');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('JO','Jordan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KZ','Kazakhstan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KE','Kenya');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KI','Kiribati');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KP','Korea (North)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KR','Korea (South)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KW','Kuwait');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KG','Kyrgyzstan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LA','Laos');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LV','Latvia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LB','Lebanon');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LS','Lesotho');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LR','Liberia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LY','Libya');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LI','Liechtenstein');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LT','Lithuania');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LU','Luxembourg');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MK','Macedonia, Republic of');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MG','Madagascar');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MW','Malawi');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MY','Malaysia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MV','Maldives');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ML','Mali');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MT','Malta');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MH','Marshall Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MQ','Martinique');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MR','Mauritania');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MU','Mauritius');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('YT','Mayotte');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MX','Mexico');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('FM','Micronesia, Federated States of');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MD','Moldova');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MC','Monaco');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MN','Mongolia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ME','Montenegro');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MS','Montserrat');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MA','Morocco');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MZ','Mozambique');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MM','Myanmar');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NA','Namibia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NR','Nauru');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NP','Nepal');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NL','Netherlands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AN','Netherlands Antilles');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NC','New Caledonia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NZ','New Zealand');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NI','Nicaragua');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NE','Niger');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NG','Nigeria');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NU','Niue');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NF','Norfolk Island');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MP','Northern Mariana Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('NO','Norway');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('OM','Oman');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PK','Pakistan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PW','Palau');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PS','Palestinian Territory');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PA','Panama');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PG','Papua New Guinea');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PY','Paraguay');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PE','Peru');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PH','Philippines');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PN','Pitcairn');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PL','Poland');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PT','Portugal');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PR','Puerto Rico');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('QA','Qatar');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('RE','Reunion');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('RO','Romania');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('RU','Russia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('RW','Rwanda');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('BL','Saint-Barthélemy');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SH','Saint Helena');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('KN','Saint Kitts and Nevis');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LC','Saint Lucia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('MF','Saint-Martin (French part)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('PM','Saint Pierre and Miquelon');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('VC','Saint Vincent and Grenadines');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('WS','Samoa');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SM','San Marino');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ST','Sao Tome and Principe');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SA','Saudi Arabia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SN','Senegal');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('RS','Serbia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SC','Seychelles');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SL','Sierra Leone');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SG','Singapore');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SK','Slovakia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SI','Slovenia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SB','Solomon Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SO','Somalia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ZA','South Africa');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GS','South Georgia and the South Sandwich Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SS','South Sudan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ES','Spain');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('LK','Sri Lanka');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SD','Sudan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SR','Suriname');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SJ','Svalbard and Jan Mayen Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SZ','Swaziland');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SE','Sweden');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('CH','Switzerland');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('SY','Syrian Arab Republic (Syria)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TW','Taiwan, Republic of China');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TJ','Tajikistan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TZ','Tanzania, United Republic of');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TH','Thailand');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TL','Timor-Leste');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TG','Togo');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TK','Tokelau');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TO','Tonga');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TT','Trinidad and Tobago');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TN','Tunisia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TR','Turkey');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TM','Turkmenistan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TC','Turks and Caicos Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('TV','Tuvalu');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('UG','Uganda');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('UA','Ukraine');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('AE','United Arab Emirates');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('GB','United Kingdom');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('US','United States of America');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('UM','US Minor Outlying Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('UY','Uruguay');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('UZ','Uzbekistan');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('VU','Vanuatu');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('VE','Venezuela (Bolivarian Republic)');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('VN','Viet Nam');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('VI','Virgin Islands, US');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('WF','Wallis and Futuna Islands');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('EH','Western Sahara');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('YE','Yemen');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ZM','Zambia');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('ZW','Zimbabwe');

INSERT IGNORE INTO `geoscheme_country` (`country_code`,`name`) VALUES
('XK','Kosovo');



INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(1,1,'Russia','#ffd0d0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(2,1,'Belarus','#ffd0e8');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(3,1,'Kazakhstan','#ffd0fa');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(4,1,'Armenia','#f6d0ff');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(5,1,'Kyrgyzstan','#e1d0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(1,1,'RU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(2,2,'BY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(3,3,'KZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(4,4,'AM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(5,5,'KG');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(6,2,'Austria','#ffd0d0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(7,2,'Belgium','#ffd0e8');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(8,2,'Bulgaria','#ffd0fa');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(9,2,'United Kingdom','#f6d0ff');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(10,2,'Hungary','#e1d0ff');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(11,2,'Germany','#d0e1ff');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(12,2,'Greece','#d0f0ff');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(13,2,'Denmark','#d0feff');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(14,2,'Ireland','#d0ffec');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(15,2,'Spain','#d7ffd0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(16,2,'Italy','#ecffd0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(17,2,'Cyprus','#fbffd0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(18,2,'Latvia','#fff7d0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(19,2,'Lithuania','#ffeed0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(20,2,'Luxembourg','#ffe4d0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(21,2,'Malta','#ffdbd0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(22,2,'Netherlands','#dbffd0');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(23,2,'Poland','#d1d0ff');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(24,2,'Portugal','#ffd0f1');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(25,2,'Romania','#fcb0e6');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(26,2,'Slovakia','#95a3fa');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(27,2,'Slovenia','#95faaa');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(28,2,'Finland','#effa95');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(29,2,'France','#fac995');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(30,2,'Croatia','#da95fa');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(31,2,'Czech Republic','#95f6fa');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(32,2,'Sweden','#fa4bba');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(33,2,'Estonia','#4b4cfa');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(6,6,'AT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(7,7,'BE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(8,8,'BG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(9,9,'GB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(10,10,'HU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(11,11,'DE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(12,12,'GR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(13,13,'DK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(14,14,'IE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(15,15,'ES');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(16,16,'IT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(17,17,'CY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(18,18,'LV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(19,19,'LT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(20,20,'LU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(21,21,'MT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(22,22,'NL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(23,23,'PL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(24,24,'PT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(25,25,'RO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(26,26,'SK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(27,27,'SI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(28,28,'FI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(29,29,'FR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(30,30,'HR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(31,31,'CZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(32,32,'SE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(33,33,'EE');



INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(34,3,'Eastern Africa','#ffd0d0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(35,34,'BI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(36,34,'KM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(37,34,'DJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(38,34,'ER');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(39,34,'ET');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(40,34,'KE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(41,34,'MG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(42,34,'MW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(43,34,'MU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(44,34,'YT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(45,34,'MZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(46,34,'RE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(47,34,'RW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(48,34,'SC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(49,34,'SO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(50,34,'SS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(51,34,'TZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(52,34,'UG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(53,34,'ZM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(54,34,'ZW');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(35,3,'Central Africa','#ffd0e8');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(55,35,'AO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(56,35,'CM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(57,35,'CF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(58,35,'TD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(59,35,'CD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(60,35,'GQ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(61,35,'GA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(62,35,'CG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(63,35,'ST');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(36,3,'Northern Africa','#ffd0fa');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(64,36,'DZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(65,36,'EG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(66,36,'LY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(67,36,'MA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(68,36,'SD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(69,36,'TN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(70,36,'EH');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(37,3,'Southern Africa','#f6d0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(71,37,'BW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(72,37,'LS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(73,37,'NA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(74,37,'ZA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(75,37,'SZ');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(38,3,'Western Africa','#e1d0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(76,38,'BJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(77,38,'BF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(78,38,'CV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(79,38,'CI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(80,38,'GM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(81,38,'GH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(82,38,'GN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(83,38,'GW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(84,38,'LR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(85,38,'ML');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(86,38,'MR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(87,38,'NE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(88,38,'NG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(89,38,'SH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(90,38,'SN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(91,38,'SL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(92,38,'TG');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(39,3,'Southern America','#d0e1ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(93,39,'AR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(94,39,'BO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(95,39,'BV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(96,39,'BR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(97,39,'CL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(98,39,'CO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(99,39,'EC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(100,39,'FK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(101,39,'GF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(102,39,'GY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(103,39,'PY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(104,39,'PE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(105,39,'GS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(106,39,'SR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(107,39,'UY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(108,39,'VE');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(40,3,'Caribbean','#d0f0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(109,40,'AI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(110,40,'AG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(111,40,'AW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(112,40,'BS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(113,40,'BB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(114,40,'AN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(115,40,'VG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(116,40,'KY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(117,40,'CU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(118,40,'CW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(119,40,'DM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(120,40,'DO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(121,40,'GD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(122,40,'GP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(123,40,'HT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(124,40,'JM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(125,40,'MQ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(126,40,'MS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(127,40,'PR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(128,40,'BL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(129,40,'KN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(130,40,'LC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(131,40,'MF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(132,40,'VC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(133,40,'SX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(134,40,'TT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(135,40,'TC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(136,40,'VI');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(41,3,'Central America','#d0feff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(137,41,'BZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(138,41,'CR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(139,41,'SV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(140,41,'GT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(141,41,'HN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(142,41,'MX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(143,41,'NI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(144,41,'PA');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(42,3,'Northern America','#d0ffec');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(145,42,'BM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(146,42,'CA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(147,42,'GL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(148,42,'PM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(149,42,'US');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(43,3,'Central Asia','#d7ffd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(150,43,'KZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(151,43,'KG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(152,43,'TJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(153,43,'TM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(154,43,'UZ');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(44,3,'Eastern Asia','#ecffd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(155,44,'CN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(156,44,'TW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(157,44,'JP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(158,44,'MO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(159,44,'MN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(160,44,'KP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(161,44,'KR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(162,44,'HK');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(45,3,'Southern Asia','#fbffd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(163,45,'AF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(164,45,'BD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(165,45,'BT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(166,45,'IN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(167,45,'IR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(168,45,'MV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(169,45,'NP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(170,45,'PK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(171,45,'LK');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(46,3,'Southeast Asia','#fff7d0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(172,46,'BN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(173,46,'KH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(174,46,'ID');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(175,46,'LA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(176,46,'MY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(177,46,'MM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(178,46,'PH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(179,46,'SG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(180,46,'TH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(181,46,'TL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(182,46,'VN');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(47,3,'Western Asia','#ffeed0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(183,47,'AM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(184,47,'AZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(185,47,'BH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(186,47,'CY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(187,47,'GE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(188,47,'IQ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(189,47,'IL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(190,47,'JO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(191,47,'KW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(192,47,'LB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(193,47,'OM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(194,47,'QA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(195,47,'SA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(196,47,'PS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(197,47,'SY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(198,47,'TR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(199,47,'AE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(200,47,'YE');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(48,3,'Eastern Europe','#ffe4d0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(201,48,'BY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(202,48,'BG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(203,48,'CZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(204,48,'HU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(205,48,'PL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(206,48,'MD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(207,48,'RO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(208,48,'RU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(209,48,'SK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(210,48,'UA');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(49,3,'Northern Europe','#ffdbd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(211,49,'AX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(212,49,'DK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(213,49,'EE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(214,49,'GG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(215,49,'IS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(216,49,'IE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(217,49,'IM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(218,49,'JE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(219,49,'LV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(220,49,'LT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(221,49,'NO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(222,49,'SJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(223,49,'SE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(224,49,'GB');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(50,3,'Southern Europe','#dbffd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(225,50,'AL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(226,50,'AD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(227,50,'BA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(228,50,'HR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(229,50,'GI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(230,50,'GR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(231,50,'IT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(232,50,'MK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(233,50,'MT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(234,50,'ME');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(235,50,'PT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(236,50,'SM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(237,50,'RS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(238,50,'SI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(239,50,'ES');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(240,50,'TR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(241,50,'VA');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(51,3,'Western Europe','#d1d0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(243,51,'AT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(244,51,'BE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(245,51,'FR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(246,51,'DE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(247,51,'LI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(248,51,'LU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(249,51,'MC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(250,51,'NL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(251,51,'CH');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(52,3,'Australia and New Zealand','#ffd0f1');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(252,52,'AU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(253,52,'CX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(254,52,'CC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(255,52,'NZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(256,52,'NF');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(53,3,'Melanesia','fcb0e6');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(257,53,'FJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(258,53,'NC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(259,53,'PG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(260,53,'SB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(261,53,'VU');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(54,3,'Micronesia','#95a3fa');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(262,54,'GU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(263,54,'KI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(264,54,'MH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(265,54,'FM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(266,54,'NR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(267,54,'MP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(268,54,'PW');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(55,3,'Polynesia','#95faaa');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(269,55,'AS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(270,55,'CK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(271,55,'PF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(272,55,'HI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(273,55,'NU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(274,55,'PN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(275,55,'WS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(276,55,'TK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(277,55,'TO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(278,55,'TV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(279,55,'WF');

INSERT IGNORE INTO `geoscheme` (`id`,`name`,`default`) VALUES
(4,'Default',1);

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(56,4,'USA','#ffd0d0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(280,56,'US');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(57,4,'Canada','#ffd0e8');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(281,57,'CA');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(58,4,'Central America','#ffd0fa');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(282,58,'BZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(283,58,'CR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(284,58,'SV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(285,58,'GT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(286,58,'HN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(287,58,'MX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(288,58,'NI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(289,58,'PA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(290,58,'AI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(291,58,'AG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(292,58,'AW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(293,58,'BS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(294,58,'BB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(295,58,'AN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(296,58,'VG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(297,58,'KY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(298,58,'CU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(299,58,'CW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(300,58,'DM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(301,58,'DO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(302,58,'GD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(303,58,'GP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(304,58,'HT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(305,58,'JM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(306,58,'MQ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(307,58,'MS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(308,58,'PR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(309,58,'BL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(310,58,'KN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(311,58,'LC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(312,58,'MF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(313,58,'VC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(314,58,'SX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(315,58,'TT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(316,58,'TC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(317,58,'VI');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(59,4,'Southern America','#f6d0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(318,59,'AR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(319,59,'BO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(320,59,'BV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(321,59,'BR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(322,59,'CL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(323,59,'CO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(324,59,'EC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(325,59,'FK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(326,59,'GF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(327,59,'GY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(328,59,'PY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(329,59,'PE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(330,59,'GS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(331,59,'SR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(332,59,'UY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(333,59,'VE');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(60,4,'Australia and Oceania','#e1d0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(334,60,'AU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(335,60,'CX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(336,60,'CC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(337,60,'NZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(338,60,'NF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(339,60,'FJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(340,60,'NC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(341,60,'PG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(342,60,'SB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(343,60,'VU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(344,60,'GU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(345,60,'KI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(346,60,'MH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(347,60,'FM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(348,60,'NR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(349,60,'MP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(350,60,'PW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(351,60,'AS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(352,60,'CK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(353,60,'PF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(354,60,'HI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(355,60,'NU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(356,60,'PN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(357,60,'WS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(358,60,'TK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(359,60,'TO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(360,60,'TV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(361,60,'WF');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(61,4,'Africa','#d0e1ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(362,61,'BI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(363,61,'KM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(364,61,'DJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(365,61,'ER');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(366,61,'ET');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(367,61,'KE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(368,61,'MG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(369,61,'MW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(370,61,'MU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(371,61,'YT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(372,61,'MZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(373,61,'RE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(374,61,'RW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(375,61,'SC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(376,61,'SO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(377,61,'SS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(378,61,'TZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(379,61,'UG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(380,61,'ZM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(381,61,'ZW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(382,61,'AO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(383,61,'CM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(384,61,'CF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(385,61,'TD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(386,61,'CD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(387,61,'GQ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(388,61,'GA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(389,61,'CG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(390,61,'ST');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(391,61,'DZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(392,61,'EG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(393,61,'LY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(394,61,'MA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(395,61,'SD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(396,61,'TN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(397,61,'EH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(398,61,'BW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(399,61,'LS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(400,61,'NA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(401,61,'ZA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(402,61,'SZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(403,61,'BJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(404,61,'BF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(405,61,'CV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(406,61,'CI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(407,61,'GM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(408,61,'GH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(409,61,'GN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(410,61,'GW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(412,61,'LR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(413,61,'ML');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(414,61,'MR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(415,61,'NE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(416,61,'NG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(417,61,'SH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(418,61,'SN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(419,61,'SL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(420,61,'TG');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(62,4,'Europe','#d0f0ff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(421,62,'BY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(422,62,'BG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(423,62,'CZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(424,62,'HU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(425,62,'PL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(426,62,'MD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(427,62,'RO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(428,69,'RU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(429,62,'SK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(430,62,'UA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(431,62,'AX');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(432,62,'DK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(433,62,'EE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(434,62,'GG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(435,62,'IS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(436,62,'IE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(437,62,'IM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(438,62,'JE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(439,62,'LV');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(440,62,'LT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(441,62,'NO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(442,62,'SJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(443,62,'SE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(444,62,'GB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(445,62,'AL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(446,62,'AD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(447,62,'BA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(448,62,'HR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(449,62,'GI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(450,62,'GR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(451,62,'IT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(452,62,'MK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(453,62,'MT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(454,62,'ME');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(455,62,'PT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(456,62,'SM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(457,62,'RS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(458,62,'SI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(459,62,'ES');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(460,62,'TR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(461,62,'VA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(462,62,'AT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(463,62,'BE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(464,62,'FR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(465,62,'DE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(466,62,'LI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(467,62,'LU');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(468,62,'MC');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(469,62,'NL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(470,62,'CH');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(63,4,'China','#d0feff');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(471,63,'CN');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(64,4,'Eastern Asia','#d0ffec');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(473,64,'TW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(474,64,'JP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(475,64,'MO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(476,64,'MN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(477,64,'KP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(478,64,'KR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(479,64,'HK');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(65,4,'Southeast Asia','#d7ffd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(480,65,'BN');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(481,65,'KH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(482,65,'ID');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(483,65,'LA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(484,65,'MY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(485,65,'MM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(486,65,'PH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(487,65,'SG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(488,65,'TH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(489,65,'TL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(490,65,'VN');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(66,4,'India','#ecffd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(491,66,'IN');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(67,4,'Middle East','#fbffd0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(492,67,'AF');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(493,67,'PK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(494,67,'AM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(495,67,'AZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(496,67,'GE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(497,67,'BH');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(498,67,'EG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(499,67,'IR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(500,67,'IQ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(501,67,'IL');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(502,67,'JO');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(503,67,'KW');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(504,67,'LB');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(505,67,'OM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(506,67,'PS');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(507,67,'QA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(508,67,'SA');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(509,67,'SY');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(510,67,'TR');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(511,67,'AE');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(512,67,'YE');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(68,4,'Central Asia','#fff7d0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(513,68,'KZ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(514,68,'KG');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(515,68,'TJ');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(516,68,'TM');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(517,68,'UZ');

INSERT IGNORE INTO `geoscheme_region` (`id`,`scheme_id`,`name`,`color`) VALUES
(69,4,'Russian Federation','#ffeed0');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(518,49,'FI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(519,62,'FI');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(520,65,'BD');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(521,65,'LK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(522,65,'BT');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(523,65,'NP');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(524,50,'XK');

INSERT IGNORE INTO `geoscheme_region_country` (`id`,`region_id`,`country_code`) VALUES
(525,62,'XK');