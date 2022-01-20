select
          l.record_number,
          CONVERT(DATETIME,  l.date_time AT TIME ZONE 'Ekaterinburg Standard Time'  AT TIME ZONE 'UTC') as dt,
		  l.user_id,
		  users.user_login_name as username,
          dbo.inttoip(l.source_server_ip_int) as source_server_ip,
          dbo.inttoip(l.source_ip_int) as src_ip,
          dbo.inttoip(l.destination_ip_int) as dst_ip,
		  l.port dst_port,
          l.protocol_id,
          l.category as cat_id,
		  category.name as cat_name,
          wse_urls.name as domain,
          l.full_url as url,
          l.bytes_sent,
          l.bytes_received,
          l.disposition_code as action_id,
		  disposition.description as action_name,
          l.hits,
          l.wse_client_hostname_id,
          l.ua_id,
          l.casb_id,
          l.policy_name,
          l.wse_user_role_id

from
	log_details l, users, category, disposition, wse_urls

where
	l.user_id = users.user_id and
	l.category = category.category and
	l.disposition_code = disposition.disposition_code and
	l.url_id = wse_urls.wse_url_id

order by
	record_number
