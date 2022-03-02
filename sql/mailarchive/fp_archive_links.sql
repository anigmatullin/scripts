drop table if exists link_fp_url_forcepoint_archive;

create table link_fp_url_forcepoint_archive (
	id int IDENTITY(1,1) primary key,
	created_at datetime,
	updated_at datetime,

	esgid bigint,
	forcepoint_archive_id int,
	fp_url_id int,

	index cci_link_url_archive clustered columnstore
);

drop table if exists entities;

create table entities (
	id int primary key,
	created_at datetime,
	updated_at datetime,

	name varchar(255),
	tablename varchar(255),

	index cci_entities clustered columnstore
);

 -- insert list of entities

insert into entities (id, name, tablename) values (1, 'Mails from ESG Archive', 'forcepoint_archive');
insert into entities (id, name, tablename) values (2, 'URLs', 'fp_url');
insert into entities (id, name, tablename) values (3, 'URL Domains', 'fp_url_domain');
insert into entities (id, name, tablename) values (4, 'URL Categories', 'fp_url_category');
insert into entities (id, name, tablename) values (5, 'Mail Headers', 'fp_headers');
insert into entities (id, name, tablename) values (6, 'Attachments', 'fp_attachment');
insert into entities (id, name, tablename) values (7, 'Mail Addresses', 'fp_email_addr');
insert into entities (id, name, tablename) values (8, 'Mail Domains', 'fp_email_domain');
insert into entities (id, name, tablename) values (9, 'Mail Addresses from Internal Domains', 'fp_internal_addrs');

insert into entities (id, name, tablename) values (10, 'IP Addrs', 'ip_addr');
insert into entities (id, name, tablename) values (11, 'Cities from GeoIP', 'geoip_cities');
insert into entities (id, name, tablename) values (12, 'Countries from GeoIP', 'geoip_countries');

create table links (
	id bigint IDENTITY(1,1) primary key,
	created_at datetime,
	updated_at datetime,

	left_entity int,
	right_entity int,

	left_id bigint,
	right_id bigint,

	index cci_links clustered columnstore
);
