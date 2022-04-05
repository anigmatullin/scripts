use eq;

create table forcepoint_bcc (

id int IDENTITY(1,1) primary key,

created_at datetime,
updated_at datetime,

smtp_id varchar(64),
message_id varchar(255),
sender varchar(255),
subject varchar(512),
count_attachments int,

index cci_forcepoint_bcc clustered columnstore
);

