

select * from [esglogdb76].[dbo].[esg_detail_quarantine_message]

where queue_name_id = 9
and path = 'AA1CA73C834BA79C2C548'

-- where subject = 'Lock in Your Home Warranty Price on Cyber Monday!'

order by date_time desc


-- truncate table [esglogdb76_1].[dbo].[esg_detail_quarantine_message];

