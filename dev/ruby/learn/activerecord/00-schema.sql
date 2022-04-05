
use ruby;

create table gems (
  id int primary key auto_increment,
  name varchar(50),
  author varchar(50),
  release_date date,
  version varchar(10),
  comment varchar(255)
);
