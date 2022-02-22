drop table test01;
create table test01
(
	id int
);


insert into test01(id) values(1);
select * from test01;
alter table test01 add name varchar(10) not null;

-- Msg 4901, Level 16, State 1, Line 10
-- ALTER TABLE only allows columns to be added that can contain nulls,
-- or have a DEFAULT definition specified, or the column being added is an identity or timestamp column,
-- or alternatively if none of the previous conditions are satisfied the table must be empty to allow addition of this column. Column 'name' cannot be added to non-empty table 'test01' because it does not satisfy these conditions.



truncate table test01; alter table test01 add name1 varchar(10) not null;
alter table test01 add name2 varchar(10) default '-';
alter table test01 add name3 varchar(10);

