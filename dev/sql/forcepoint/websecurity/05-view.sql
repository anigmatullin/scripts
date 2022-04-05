create view traffic_web as

select
          l.record_number as id,
		  l.date_time as dt_local,
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
		  v_risk_class.name as risk_class,
          wse_urls.name as domain,
          l.full_url as url,
          l.bytes_sent,
          l.bytes_received,
          l.disposition_code as action_id,
		  disposition.description as action_name,

		  l.ua_id,
		  ua_catalog.user_agent,
		  ua_catalog.ua_browser,
		  ua_catalog.browser_version,
		  ua_catalog.ua_os,
		  ua_catalog.os_version,
		  ua_catalog.ua_device,
		  ua_catalog.device_version,

		  l.casb_id,
		  casb_catalog.app_name as casb_app,
		  casb_catalog.app_desc,
		  casb_catalog.risk_value,
		  casb_catalog.app_risk,

		  casb_catalog.category,
		  casb_catalog.location,
		  casb_catalog.provider,
		  casb_catalog.risk_factor,
		  casb_catalog.service_type,
		  casb_catalog.term_condition,
		  casb_catalog.web_site,
		  
          l.hits,
          l.policy_name,
          l.wse_user_role_id

from
	log_details l, users, category, disposition, wse_urls, v_risk_class, ua_catalog, casb_catalog

where
	l.user_id = users.user_id and
	l.category = category.category and
	l.disposition_code = disposition.disposition_code and
	l.url_id = wse_urls.wse_url_id and
	l.category = v_risk_class.category_id and
	l.ua_id = ua_catalog.ua_id and
	l.casb_id = casb_catalog.casb_id

