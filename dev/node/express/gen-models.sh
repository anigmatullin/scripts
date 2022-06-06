npx sequelize-cli model:generate \
    --name Connection \
    --attributes \
    dt:date,uuid:string,encoding:string,hello_name:string


npx sequelize-cli model:generate \
    --name Transaction \
    --attributes \
    dt:date,uuid:string,encoding:string,sender:string,rcpt_list:string,rcpt_count_accept:integer,rcpt_count_tempfail:integer,rcpt_count_reject:integer


npx sequelize-cli model:generate \
    --name Delivery \
    --attributes \
    dt:date,uuid:string,sender:string,rcpt_list:string,rcpt_domain:string,rcpt_accepted:integer


npx sequelize-cli model:generate \
    --name Header \
    --attributes \
    mail_id:integer,name:string,value:string


npx sequelize-cli model:generate \
    --name MailAddr \
    --attributes \
    mail_id:integer,name:string,email:string


npx sequelize-cli model:generate \
    --name linkAddrTransaction \
    --attributes \
    MailAddrId:integer,TransactionId:integer


npx sequelize-cli model:generate \
    --name BlockMD5 \
    --attributes \
    md5:string,comment:string
