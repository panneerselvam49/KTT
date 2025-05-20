```
sql

create database leetcode
create table biggestsinglenumber(num int)
insert into biggestsinglenumber(num) values(1),(2),(5),(3),(7),(4), (6);
with single_number as(
    select myn.num from mynumbers myn group by num having count(num)=1
)
select max(num) as num from single_number;

create table secondhighestsalary(id int primary key, salary int);

insert into secondhighestsalary(1,500),(2,200), (3,800), (4,300), (5,500);

-- Write your PostgreSQL query statement below
select max(salary)as SecondHighestSalary from employee where salary not in(select max(salary)from employee); 


create table duplicateEmail(id int primary key, email varchar(50));
insert into duplicateemail values(1, 'panneer21@gmail.com'), (2, 'aksash48@gmail.com'), (3, 'panneer21@gmail.com'), (4, 'barath33@gmail.com'), (5, 'charlie@gmail.com');
select distinct p1.email from duplicateemail p1 inner join duplicateemail p2 on p1.email=p2.email and p1.id<>p2.id;


create table departmenthighestsalary(id int primary key, name varchar(100), salary int, departmentId int);
CREATE TABLinsert into departmenthighestsalary values(1, 'joe', 50000, 1),(2, 'jack', 30000, 2), (3, 'panneer', 35000, 4), (4, 'ben', 45000, 1);
INSERT 0 4
leetcode=# select * from departmenthighestsalary;

```