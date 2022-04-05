require 'Mysql2'

client = Mysql2::Client.new(:host => "localhost", :username => "root", :password => "qaz123ZX", :database => "ruby")

# create table gems (name varchar(50), author varchar(50), release_date date, version varchar(10), comment varchar(10));

sql_insert = "insert into gems values('mysql2', 'Brian Lopez', '2019-11-27', '0.5.3', 'MySQL cli')"

sql = "select * from gems"

res = client.query(sql_insert)
res = client.query(sql)

res.each do |row|
  puts row['name']
  puts row['author']
end
