
use eq;

drop table if exists forcepoint_archive;

create table forcepoint_archive (

id int IDENTITY(1,1) primary key,

created_at datetime,
updated_at datetime,

arrival_time datetime,

path varchar(64),
full_path varchar(1024),
smtp_id varchar(64),
esg_id bigint,
message_id varchar(255),
sender varchar(255),
recipients varchar(255),
subject varchar(512),
count_attachments int,

sender_ip varchar(64),
sender_sport int,
sender_ptr varchar(255),
sender_helo varchar(255),

true_source_ip varchar(64),

reason varchar(255),
spamscore numeric(6,2),
esg_virus_id int,
esg_virus_name varchar(255),
esg_connection_id bigint,

spf_result int,
dkim_result int,
dmarc_result int,
batv_result int,

sbl_result int,
xbl_result int,
pbl_result int,

index cci_forcepoint_archive clustered columnstore
);

drop table if exists fp_url;

create table fp_url (
	id int IDENTITY(1,1) primary key,
	created_at datetime,
	updated_at datetime,

	cat_id int,
	cat_name varchar(255),
	url nvarchar(4000),
	text varchar(255),

	index cci_fp_urls clustered columnstore
);



drop table if exists fp_url_domain;

create table fp_url_domain (
	id int IDENTITY(1,1) primary key,
	created_at datetime,
	updated_at datetime,
	domain varchar(255),

	index cci_fp_url_domain clustered columnstore
);


create table fp_url_category (
	id int IDENTITY(1,1) primary key,
	created_at datetime,
	updated_at datetime,

	cat_id int,
	cat_name nvarchar(255),

	index cci_fp_url_domain clustered columnstore
);


select * from forcepoint_archive;
select * from fp_url;

-- truncate table forcepoint_archive;
