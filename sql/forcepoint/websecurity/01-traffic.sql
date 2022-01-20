use wslogdb70;


select 
    record_number,
    source_server_ip,
    incoming_view.date_time,
    incoming_view.bytes_sent,
    incoming_view.bytes_received,
    incoming_view.category,
    category.name,
    incoming_view.disposition_code,
    disposition.description,
    users.user_login_name,
    incoming_view.source_ip,
    incoming_view.destination_ip,
    port,
    incoming_view.url as domain,
    incoming_view.full_url as url,
    incoming_view.hits
 
from dbo.incoming_view, dbo.users, dbo.category, dbo.disposition
 
where
    dbo.incoming_view.user_id = dbo.users.user_id
    and dbo.incoming_view.category = dbo.category.category
    and dbo.incoming_view.disposition_code = dbo.disposition.disposition_code
 
order by record_number
