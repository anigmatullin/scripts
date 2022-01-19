
USE [wslogdb70]
GO

/****** Object:  View [dbo].[log_details]    Script Date: 1/19/2022 11:15:49 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

create view [dbo].[log_details] as 


select record_number,date_time,user_id,category,disposition_code,protocol_id,url_id,port,source_server_ip_int,destination_ip_int,source_ip_int,keyword_id,file_type_id,file_path_id,extension_id,cast(hits as bigint) as hits,cast(bytes_sent as bigint) as bytes_sent,cast(bytes_received as bigint) as bytes_received,full_url, NULL browse_time , source_ip_bin, destination_ip_bin,transaction_id,wse_client_hostname_id,ua_id,hybrid ,casb_id,policy_name,wse_user_role_id  from wslogdb70_2.dbo.log_details

union all  

select record_number,date_time,user_id,category,disposition_code,protocol_id,url_id,port,source_server_ip_int,destination_ip_int,source_ip_int,keyword_id,file_type_id,file_path_id,extension_id,cast(hits as bigint) as hits,cast(bytes_sent as bigint) as bytes_sent,cast(bytes_received as bigint) as bytes_received,full_url, NULL browse_time , source_ip_bin, destination_ip_bin,transaction_id,wse_client_hostname_id,ua_id,hybrid ,casb_id,policy_name,wse_user_role_id   from wslogdb70_1.dbo.log_details 

GO


