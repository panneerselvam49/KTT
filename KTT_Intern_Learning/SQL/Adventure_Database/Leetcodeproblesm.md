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
insert into departmenthighestsalary values(1, 'joe', 50000, 1),(2, 'jack', 30000, 2), (3, 'panneer', 35000, 4), (4, 'ben', 45000, 1);
INSERT 0 4
leetcode=# select * from departmenthighestsalary;

create table swapsalary 
insert into swapsalary values(1, 'A', 'm', 2500), (2, 'B', 'f', 1500), (3, 'C', 'm', 3500), (4, 'D', 'f', 1000);
update swapsalary set sex=case sex when 'm' then 'f' when 'f' then 'm' end;

create table trianglejudgement(x int, y int, z int);
insert into trianglejudgement values(13,11,10), (12,34,33), (10,45,9), (22,9,7);
(select *, 'Yes' as triangle from trianglejudgement where(x + y > z) AND (y + z > x) and (z + x > y))
union
(select *, 'No' as triangle
from trianglejudgement
where (x + y <= z) or (y + z <= x) or (z + x <= y));

create table risingtemperature(id int unique, recorddate date, temperature int);
insert into risingtemperature values(1, '2015-01-01', 10), (2, '2015-01-02', 15), (3, '2015-01-03', 18), (4, '2015-01-04', 35);
select today.id from risingtemperature yes cross join risingtemperature today where today.recorddate-yes.recorddate=1 and today.temperature>yes.temperature;

create table employees_earning_more_than_managers(id int primary key, name varchar(50), salary int, managerId int);
insert into employees_earning_more_than_managers values(1, 'Joe', 70000, 3), (2, 'Henry', 80000, 4), (3, 'Sam', 60000, null), (4, 'Max', 90000, null);
inner join employees_earning_more_than_managers e2 on e1.id=e2.managerId
where e1.salary<e2.salary;

create table cwno_customers(id int primary key, name varchar(50));
insert into cwno_customers values(1,'Joe'), (2,'Henry'), (3, 'Sam'), (4, 'Max');
select * from(select name as Customers from cwno_customers where id not in(select customerId from cwno_orders))as Customers;


CREATE TABLE game_play_analysis1 (
player_id INT,
device_id INT,
event_date DATE,     
games_played INT,
PRIMARY KEY (player_id, event_date));
insert into game_play_analysis1 values(1, 2, '2016-03-01', 5), (1, 2, '2016-05-02', 6), (2, 3, '2017-06-25', 1), (3, 1, '2016-03-02', 0), (3, 4, '2018-07-03', 5);
select player_id, min(event_date) first_login from game_play_analysis1 group by player_id;

create table employeebonus_employee(empId int, name varchar(50), supervisor int, salary int);
insert into employeebonus_employee values(3, 'Brand', null, 4000), (1, 'John', 3, 1000), (2, 'Dan', 3, 2000),(4,'Thomas',3, 4000);

create table employeebonus_bonus(empId int unique, bonus int);
insert into employeebonus_bonus values(2,500), (4, 2000);

select em.name, bo.bonus from employeebonus_employee as em
left join employeebonus_bonus as bo on em.empId=bo.empId
where bo.bonus<1000 or bonus is null;


create table salesanalysis_product(product_id int primary key, product_name varchar(40), unit_price int);
insert into salesanalysis_product values(1, 'S8' ,1000), (2, 'G4', 800), (3, 'iPhone', 1400);
create table salesanalysis_sales(seller_id int, product_id int, buyer_id int, sales_date date, quantity int, price int);
insert into salesanalysis values(1, 1, 1, '2019-01-21', 2, 2000), (1,2,2,'2019-02-17', 1, 800), (2,2,3,'2019-06-02',1,800),(3,3,4,'2019-05-13',2,2800);
select p.product_id, p.product_name
from salesanalysis_product p join salesanalysis_sales s using(product_id)
group by p.product_id, p.product_name
having min(s.sales_date) >= '2019-01-01' and max(s.sales_date) <= '2019-03-31';


create table activeusers(user_id int, session_id int, activity_date date, activity_type varchar(20));
insert into activeusers values(1,1,'2019-07-20', 'open_session'), (1,1,'2019-07-20','scroll_down'), (1,1,'2019-07-20','end_session'),(2,4,'2019-07-20', 'open_session');
select activity_date as day, count(distinct user_id) as active_users from activeusers where activity_date between '2019-06-28' and '2019-07-27' group by activity_date;


create table artice_views(article_id int, author_id int, viewer_id int, view_date date);
insert into artice_views values(1,3,5,'2019-08-01'), (1,3,6,'2019-08-02'), (2,7,7,'2019-08-01'), (4,7,1,'2019-07-22');
select distinct(viewer_id)as id from artice_views where author_id=viewer_id;


create table reformatdept(id int, revenue int, month varchar(20), primary key(id, month));
insert into reformatdept values(1, 8000, 'Jan'),(2,9000, 'Jan'), (3, 10000, 'Feb'), (1, 7000,'Feb'), (1, 6000, 'Mar');
select id, sum(case when month='Jan' then revenue else null end)as Jan_Revenue,
sum(case when month='Feb' then revenue else null end)as Feb_Revenue,
sum(case when month='Mar' then revenue else null end)as Mar_Revenue,
sum(case when month='Apr' then revenue else null end)as Apr_Revenue,
sum(case when month='May' then revenue else null end)as May_Revenue,
sum(case when month='Jun' then revenue else null end)as Jun_Revenue,
sum(case when month='Jul' then revenue else null end)as Jul_Revenue,
sum(case when month='Aug' then revenue else null end)as Aug_Revenue,
sum(case when month='Sep' then revenue else null end)as Sep_Revenue,
sum(case when month='Oct' then revenue else null end)as Oct_Revenue,
sum(case when month='Nov' then revenue else null end)as Nov_Revenue,
sum(case when month='Dec' then revenue else null end)as Dec_Revenue
from reformatdept group by id;


create table qqp(query_name varchar(40), result varchar(20), position int, rating int);
insert into qqp values('Dog', 'Golden retriever' ,1,5), ('Dog', 'German shepherd', 2, 5), ('Dog', 'Mule' ,200, 1), ('Cat', 'Shirazi', 5, 2), ('Cat', 'Siamese', 3, 3);
select query_name,
round(avg(rating*1.0/position),2) as quality,
round(avg(case when rating < 3 then 1 else 0 end)*100.0,2) as poor_query_percentage
from qqp
group by query_name;


create table averagesellingprice_prices(product_id int, start_date date, end_date date, price int, primary key(product_id, start_date, end_date));
insert into averagesellingprice_prices values(1, '2019-02-17', '2019-02-28', 5),(1, '2019-03-01', '2019-03-22', 20), (2,'2019-02-01', '2019-02-20',15), (2, '2019-02-21', '2019-03-31', 30);

create table averagesellingprice_unitsold(product_id int, purchase_date date, units int);
insert into averagesellingprice_unitsold values(1, '2019-02-25', 100),(1,'2019-03-01', 15), (2, '2019-02-10', 200),(2, '2019-03-22', 30);
select p.product_id, case when sum(u.units) is null then 0 else round(sum(u.units * p.price) / sum(u.units)::numeric, 2) end as average_price
from averagesellingprice_Prices p
left join averagesellingprice_UnitSold u
on u.product_id = p.product_id and u.purchase_date between p.start_date and p.end_date
group by p.product_id;

create table sne_students(student_id int primary key, student_name varchar(50));
insert into sne_students values(1,'Alice'), (2,'Bob'), (13, 'John'), (6,'Alex');

create table subjects(subject_name varchar(40) primary key);
insert into subjects values('Math');
insert into subjects values('Physics');
insert into subjects values('Programming');

create table examinations(student_id int, subject_name varchar(50));
insert into examinations values(1,'Math'), (2,'Physics'), (6,'Physics'),(13,'Programming');
insert into examinations values(1,'Math'), (2,'Physics'), (6,'Physics'),(13,'Programming');

select s.student_id, s.student_name, su.subject_name, count(exam.student_id) attended_exams
from sne_students s
cross join subjects su
left join examinations exam on s.student_id=exam.student_id and su.subject_name=exam.subject_name
group by s.student_id, s.student_name, su.subject_name
order by s.student_id, s.student_name, su.subject_name;


create table orderinaperiod1327_products(product_id int primary key, product_name varchar(50), product_category varchar(50));
insert into orderinaperiod1327_products values(1,'Leetcode Solutions', 'Book'), (2, 'Jewels of stringology', 'Book'), (3, 'HP', 'Laptop'), (4, 'Lenovo', 'Laptop'), (5, 'Leecode kit', 'T-shirt');

create table orders(product_id int, order_date date, unit int);
insert into orders values(1,'2020-02-05',60), (1,'2020-02-10', 70), (2,'2020-01-18', 30), (3, '2020-02-11',2), (4,'2020-03-01',20),(5,'2020-02-25', 50), (5, '2020-02-27',50);
select pro.product_name, sum(ord.unit) as unit from orderinaperiod1327_products pro
inner join orders ord using(product_id)
where to_char(order_date, 'YYYY-MM') = '2020-02'
group by pro.product_name, pro.product_id
having sum(ord.unit)>=100;

create table unique_identifire1378_employees(id int primary key, name varchar(50));
insert into unique_identifire1378_employees values(1, 'Alice'), (7,'Bob'), (11, 'Meir'), (90,'Winstion'), (3, 'Jonathan');

create table unique_identifier1378_employeeuni(id int, unique_id int, primary key(id, unique_id));
insert into unique_identifier1378_employeeuni values(3, 1),(11,2),(90,3);

select emu.unique_id, emp.name from unique_identifire1378_employees as emp
left join unique_identifier1378_employeeuni emu on emu.id=emp.id;


create table toptravellers_users(id int unique, name varchar(40));
insert into toptravellers_users values(1, 'Alice'), (2,'Bob'),(3,'Alex'), (4, 'Donald'),(7, 'Lee'),(13, 'Jonathan'),(19, 'Elvis');

create table toptravellers_rides(id int unique, user_id int, distance int);
insert into toptravellers_rides values(1,1,120), (2,1,317), (3,3,222),(4,7,100), (5,13,312);
select us.name, coalesce(sum(distance),0)as travelled_distance from toptravellers_users us
left join toptravellers_rides ri on us.id=ri.user_id
group by us.id, us.name
order by travelled_distance desc, us.name asc;


create table productbydate(sell_date date, product varchar(50));
insert into productbydate values('2020-05-30', 'Headphone'), ('2020-06-01', 'Pencil'), ('2020-06-02','Mask'), ('2020-05-30','Basketball'), ('2020-06-01', 'Bible'), ('2020-06-02','Mask'), ('2020-05-30', 'T-shirt');
select sell_date, count(distinct product)as num_sold,
string_agg(distinct product, ',' order by product) products from productbydate
group by sell_date
order by sell_date;


create table patientsconditions_patients(patient_id int primary key, patient_name varchar(50), condtitions varchar(50));
insert into patientsconditions_patients values(1, 'Daniel', 'YFEV COUGH'), (2,'Alice','DIAB100 MYOP'), (3,'Bob', 'ACNE DIAB100'), (4,'George', 'ACNE DIAB100'), (5,'Alain','DIAB201');
select * from patientsconditions_patients
where condtitions like '% DIAB1%' or condtitions like 'DIAB1%';


create table visits_1581(visit_id int, customer_id int);
insert into visits_1581 values(1,23),(2,9),(4,30),(5,54),(6,96),(7,54), (8,54);

create table transactions_1581(transaction_id int unique, visit_id int, amount int);
insert into transactions_1581 values(2,5,310), (3,5,300), (9,5,200),(12,1,910),(13,2,970);
select vi.customer_id, count(*)as count_no_trans from visits_1581 as vi
left join transactions_1581 as tra on vi.visit_id=tra.visit_id
where tra.visit_id is null
group by vi.customer_id;


create table users_1633(user_id int, user_name varchar(50));
insert into users_1633 values(6,'Alice');
insert into users_1633 values(2,'Bob');
insert into users_1633 values(7,'Alex');

create table register_1633(contest_id int, user_id int, primary key(contest_id, user_id));
insert into register_1633 values(215, 6),(209, 2), (208, 2), (210, 6),(208,6),(209,7),(209, 6),(215,7),(208,7),(210, 2)(207,2),(210,7);
select contest_id, round(count(distinct user_id)*100.0/(select count(*)from users_1633),2)as percentage
from register_1633
group by contest_id
order by percentage desc, contest_id asc;


create table fixname_1667(user_id int primary key, name varchar(50));
insert into fixname_1667 values(1,'aLice'),(2,'bOB');
select user_id, upper(left(name,1)) || lower(substring(name from 2))as name from fixname_1667 order by user_id;


create table invalidtweets(tweer_id int primary key, content varchar(50));
insert into invalidtweets values(1, 'Let us code'),(2,'More than fifteen chars are here!');
select tweer_id from invalidtweets where length (content)>15;


create table leadsandpartners(date_id date, make_name varchar(50), lead_id int, partner_id int);
insert into leadsandpartners values('2020-12-8', 'toyota', 0, 1),('2020-12-8', 'toyota', 1, 0), ('2020-12-8', 'toyota', 1, 2), ('2020-12-8', 'toyota', 0,2), ('2020-12-8', 'toyota', 0, 1), ('2020-12-7','toyota', 0, 1), ('2020-12-7','honda', 0, 1),('2020-12-7','honda', 2, 1);
select date_id, make_name, count(distinct lead_id)as unique_leads, count(distinct partner_id) as unique_partners from leadsandpartners
group by date_id, make_name;


create table followerscount(user_id int, follower_id int, primary key(user_id, follower_id));
insert into followerscount values(0,1),(1,0),(2,0),(2,1);
select distinct(user_id), count(follower_id)as followers from followerscount group by user_id order by user_id;


create table employees_1741(emp_id int, event_day date, in_time int, out_time int, primary key(emp_id, event_day, in_time));
insert into employees_1741 values(1, '2020-11-28', 4, 32), (1,'2020-11-28', 55, 200),(1,'2020-12-03', 1, 42),(2,'2020-11-28', 3, 33), (2,'2020-12-09', 47, 74);
select event_day as day, emp_id, sum(out_time)-sum(in_time) total_time from employees_1741 group by event_day, emp_id;


create table products_1757(product_id int primary key, low_fats varchar(5), recyclable varchar(5));
insert into products_1757 values(0, 'Y', 'N'), (1, 'Y', 'Y'), (2,'N', 'Y'), (3, 'Y', 'Y'), (4, 'N','N');
select product_id from products_1757 where low_fats='Y' and recyclable='Y';


create table logins_1890(user_id int, time_stamp timestamp, primary key(user_id, time_stamp));
insert into logins_1890 values(6, '2020-06-30 15:06:07'), (6, '2021-04-21 14:06:06'), (6, '2019-03-07 00:18:15'), (8, '2020-02-01 05:10:53'), (8, '2020-12-30 00:46:50'), (2, '2020-01-16 02:49:50'), (14, '2021-01-06 11:59:59');
select user_id, max(time_stamp) as last_stamp from logins_1890 where time_stamp between '2020-01-01 00:00:00' and '2020-12-31 23:59:59'
group by user_id
order by user_id desc;


create table employees_1965(employee_id int unique, name varchar(50));
insert into employees_1965 values(2, 'Crew'),(4,'Haven'),(5,'Kristian');
create table salaries_1965(employee_id int unique, salary int);
insert into salaries_1965 values(5,7071), (1, 22517),(4,63539);
select emp.employee_id from employees_1965 emp
left join salaries_1965 sal on emp.employee_id=sal.employee_id
where sal.employee_id is null
union
select sal.employee_id from salaries_1965 sal
left join employees_1965 emp on emp.employee_id=sal.employee_id
where emp.employee_id is null
order by employee_id asc;


create table employees_1978(employee_id int primary key, name varchar(50), manager_id int, salary int);
insert into employees_1978 values(3, 'Mila', 9, 60301), (12, 'Antonella', null, 31000), (13, 'Emery', null, 67084),(1, 'Kalel',11, 21241), (9, 'Mikaela', null, 50937), (11, 'Joziah', 6, 28485);
select employee_id from employees_1978 where manager_id not in(select employee_id from employees_1978)and salary<30000 order by employee_id;


create table teacher_2356(teacher_id int, subject_id int, dept_id int, primary key(subject_id, dept_id));
insert into teacher_2356 values(1,2,3),(1,2,4), (1,3,3),(2,1,1), (2,2,1),(2,3,1),(2,4,1);
select teacher_id, count(distinct subject_id)as cnt from teacher_2356 group by teacher_id;


create table employee_184(id int, name varchar(60), salary int, departmentId int);
insert into employee_184 values(1,'Joe', 70000, 1),(2, 'Jim', 90000, 1),(3, 'Henry', 80000,2),(4, 'Sam',60000, 2),(5, 'Max', 90000, 1);
create table department(id int primary key, name varchar(50));
insert into department_184 values(1, 'IT'),(2,'Sales');
select dept.name as Department, emp.name AS Employee, emp.salary AS Salary
from employee_184 emp
join department_184 dept on emp.departmentId = dept.id
join (select departmentId,
        max(salary) as max_salary from employee_184 group by departmentId
)as dept_max
    on emp.departmentId = dept_max.departmentId
    and emp.salary = dept_max.max_salary;


create table employee_570(id int primary key, name varchar(60), department varchar(40), managerId int);
insert into employee_570 values(101, 'John', 'A', null), (102, 'Dan', 'A', 101),(103, 'James','A', 101),(104,'Amy', 'A', 101), (105, 'Anne', 'A',101),(106, 'Ron', 'B', 101);
select em.name from employee_570 em
inner join employee_570 e1 on em.id=e1.managerId
group by em.id, em.name
having count(em.id)>=5;


create table users_1158(user_id int primary key, join_date date, favorite_brand varchar(30));
insert into users_1158 values(1,'2018-01-01', 'Lenovo'), (2,'2018-02-09','Samsung'),(3,'2018-01-19', 'LG'), (4, '2018-05-21', 'HP');

create table orderes_1158(order_id int primary key, order_date date, item_id int, buyer_id int, seller_id int);
insert into orderes_1158 values(1,'2019-08-01',4,1,2),(2,'2018-08-02',2,1,3),(3,'2019-08-03',3,2,3), (4,'2018-08-04', 1,4,2),(5,'2018-08-04',1,3,4),(6,'2019-08-05',2,2,4);

create table items(item_id int primary key, item_brand varchar(40));
insert into items_1158 values(1,'Samsung'),(2,'Lenovo'),(3,'LG'), (4,'HP');
select u.user_id as buyer_id, u.join_date, count(o.order_id)as orders_in_2019 from users_1158 u
left join orders_1158 o on u.user_id=o.buyer_id and date_part('year',o.order_date)=2019
group by u.user_id, u.join_date
order by u.user_id asc;


create table logs_180(id int primary key, num varchar(40));
insert into logs_180 values(1,1),(2,1),(3,1),(4,2),(5,1),(6,2),(7,2);
 select distinct l1.num as ConsecutiveNums from logs_180 l1
join logs_180 l2 on l2.id=l1.id+1 and l2.num=l1.num
join logs_180 l3 on l3.id=l2.id+1 and l3.num=l2.num;


create table customers_1045(customer_id int, product_key int);
insert into customers_1045 values(1,5),(2,6),(3,5),(3,6),(1,6);
select customer_id from customers_1045 cus
join product_1045 pro on cus.product_key=pro.product_key
group by customer_id
having count(distinct cus.product_key)=(select count(distinct product_key)from product_1045);


create table trips_262(id int primary key, client_id int, driver_id int, city_id int, status varchar(30), request_at varchar(40));
insert into trips_262 values(1,1,10,1,'completed', '2013-10-01'),(2,2,11,1,'cancelled_by_driver','2013-10-01'),(3,3,12,6,'completed','2013-10-01'),(4,4,13,6,'cancelled_by_client','2013-10-01'),(5,1,10,1,'completed','2013-10-02'),(6,2,11,6,'completed','2013-10-02'),(7,3,12,6,'completed','2013-10-02'),(9,3,10,12,'completed','2013-10-03'),(10,4,13,12,'cancelled_by_driver','2013-10-03');
create table users(user_id int primary key, banned varchar(40), role varchar(40));
insert into users values(1,'No', 'client'),(2,'Yes', 'client'), (3,'No','client'),(4,'No','client'),(10,'No','driver'), (12,'No','driver'),(13,'No', 'driver');
with not_banned as (
    select user_id from users_262
    where banned = 'No'
)
select
    request_at as Day, 
    round(
        sum(case when status like 'cancelled%' then 1.00 else 0 end) / count(*), 
        2
    ) as "Cancellation Rate"
from trips_262
where
    client_id in (select user_id from not_banned)
    and driver_id in (select user_id from not_banned)
    and request_at between '2013-10-01' and '2013-10-03'
group by request_at;


create table insurance_585(pid int primary key, tiv_2015 float, tiv_2016 float, lat float, lon float);
insert into insurance_585 values(1,10,5,10,10), (2,20,20,20,20),(3,10,30,20,20),(4,10,40,40,40);
select round(sum(tiv_2016)::numeric,2)tiv_2016 from insurance_585
where (tiv_2015)in(select tiv_2015 from insurance_585 group by tiv_2015 having count(*)>1) and(lat, lon)in(select lat,lon from insurance_585 group by lat, lon having count(*)=1);


create table requestaccepted_602(requester_id int, accepter_id int, accept_date date, primary key(requester_id, accepter_id));
insert into requestaccepted_602 values(1,2,'2016/06/03'),(1,3,'2016/06/08'),(2,3,'2016/06/08'),(3,4,'2016-06-09');
select id, count(*) as num
from (
    SELECT requester_id as id from requestaccepted_602
    union all
    select accepter_id as id from requestaccepted_602
) AS all_friends
group by id
order by num desc
limit 1;


create table seales_1070(sales_id int, product_id int, year int, quantity int, price int);
insert into sales_1070 values(1,100,2008,10,5000),(2,100,2009,12,5000),(7,200,2011,15,9000);
create table product(product_id int, product_name varchar(50));
insert into product_1070 values(100,'Nokia'),(200,'Apple'),(300, 'Samsung');
select
    s.product_id,
    s.year AS first_year,
    s.quantity,
    s.price
from
    sales_1070 s
where
    s.year = (
        select min(s2.year)
        from sales_1070 s2
        where s2.product_id = s.product_id
    ); 


create table products(product_id int, new_price int, change_date date, primary key(product_id, change_date));
insert into products_1164 values(1,20,'2019-08-14'),(2,50,'2019-08-14'),(1,30,'2019-08-15'),(1,35,'2019-08-16'),(2,65,'2019-08-17'),(3,20,'2019-08-18');
select distinct product_id, 10 as price from products_1164 where product_id not in(select distinct product_id from products_1164 where change_date <='2019-08-16' )
union
select product_id, new_price as price from products_1164 where (product_id,change_date) in (select product_id , max(change_date) as date from Products_1164 where change_date <='2019-08-16' group by product_id);


create table queue_1204(person_id int, person_name varchar(50), weight int, turn int);
insert into queue_1204 values(5,'Alice', 250, 1),(4,'Bob',175,5),(3,'Alex',350,2),(6,'John Cena',400,3),(1,'Winston', 500, 6),(2,'Marie', 200, 4);
select person_name from(select person_name,turn, sum(weight)over(order by turn)total_weight from queue_1204)temp
where total_weight<=1000
order by turn desc
limit 1;


create table users_1587(account int primary key, name varchar(50));
insert into users_1587 values(900001,'Alice'), (900002,'Bob'), (900003,'Charlie');
create table transactions_1587(trans_id int primary key, account int, amount int, transacted_on date);
insert into transactions_1587 values(1,900001,7000, '2020-08-01'),(2,900001,7000,'2020-09-01'),(3,90001, -3000, '2020-09-02'),(4,900002,1000,'2020-09-12'),(5,900003,6000,'2020-08-07'),(6,900003,6000,'2020-09-07'),(7,900003,-4000,'2020-09-11');
select name,sum(amount) AS balance from transactions_1587 t
inner join users_1587 u using(account)
group by name
having sum(amount) > 10000;


create table seat_626(id int primary key, student varchar(50));
insert into seat_626 values(1,'Abbot'),(2,'Doris'),(3,'Emerson'),(4,'Green'),(5,'Jeames');
select(
  case when id % 2 = 1 and  id = (select max(id) from Seat_626) then id
  when id % 2 = 1 then id + 1
  when id % 2 = 0 then id - 1
  end ) as id, student
from Seat_626
order by id;


 create table validemail_1517(user_id int primary key, name varchar(50), mail varchar(50));
 insert into validemail_1517 values(1,'Winston', 'winston@leetcode.com'), (2,'Jonathan','jonathanisgreat'),(3,'Annabelle','bella-@leetcode.com'),(4, 'Sally','sally.come@leetcode.com'),(5,'Marwan','quarz#2020@leetcode.com'),(6,'David','david69@gmail.com'),(7,'Shapiro','.shapo@leetcode.com');
 select * from validemail_1517 where mail ~'^[a-zA-Z]+[a-zA-Z0-9_.-]*@leetcode\.com$';


 create table delivery_1174(delivery_id int, customer_id int, order_date date, customer_pref_delivery_date date);
 insert into delivery_1174 values(1,1,'2019-08-01','2019-08-02'),(2,2,'2019-08-02','2019-08-02'),(3,1,'2019-08-11','2019-08-12'),(4,3,'2019-08-24', '2019-08-24'),(5,3,'2019-08-21','2019-08-22'),(6,2,'2019-08-11','2019-08-13'),(7,4,'2019-08-09', '2019-08-09');
 select round (avg(case when order_date = customer_pref_delivery_date then 1
 else 0 end)*100, 2) as immediate_percentage
 from delivery_1174
 where (customer_id, order_date) in (
                 select customer_id,
                     min(order_date)
                     from delivery_1174
                     group by customer_id
 );


 create table stocks_1393(stock_name varchar(50), operation varchar(50), operation_day int, price int);
 insert into stocks_1393 values('Leetcode', 'Buy',1,1000),('Corona Masks','Buy',2,10),('Leetcode','Sell',5,9000),('Hanbags','Buy',17,30000),('Corona Masks', 'Sell', 3,1010),('Corona Masks', 'Buy', 4,1000),('Corona Masks', 'Sell', 5,500),('Handbags','Sell',29,7000),('Corona Masks', 'Sell',10,10000);
 select stock_name,sum(case when operation = 'Sell' then price else -price end) as capital_gain_loss from stocks_1393 group by stock_name;


 create table transactions_1193(id int primary key, country varchar(40), state varchar(20), amount int, trans_date date);
 insert into transactions_1193 values(121, 'US', 'approved', 1000, '2018-12-18'), (122,'US', 'declined', 2000, '2018-12-19'),(123, 'US', 'approved', 2000, '2019-01-01'),(124, 'DE', 'approved', 2000, '2019-01-07');
  select TO_CHAR(trans_date,'YYYY-MM') as month,
        country,
        count(id) as trans_count,
        sum(case when state='approved' then 1 else 0 end) as approved_count,
        sum(amount) as trans_total_amount,
        sum(case when state='approved' then amount else 0 end) as approved_total_amount
from transactions_1193
group by month, country
order by month;


create table products_1795(product_id int primary key, store1 int, store2 int, store3 int)
insert into products_1795 values(0,95,100,105), (1,70,null, 80);
select product_id, store1 as store from products_1795 where store1 is not null union select product_id, store2 as store from products_1795 where store2 is not null union select product_id, store3 as store from products_1795 where store3 is not null;


create table employee_1789(employee_id int, department_id int, primary_flag varchar(20), primary key(employee_id, department_id));
insert into employee_1789 values(1,1,'N'),(2,1,'Y'),(2,2,'N'),(3,3,'N'),(4,2,'N'),(4,3,'Y'),(4,4,'N');
select employee_id, department_id from employee_1789 where primary_flag='Y' or employee_id in(select employee_id from employee_1789 group by employee_id having count(employee_id)=1);


create table accounts_1907(account_id int primary key, income int);
insert into accounts_1907 values(3,108939),(2,12747),(8,87709),(6,91796);
select d.category, coalesce(f.accounts_count, 0) accounts_count from (select case when income < 20000 then 1 when income <= 50000 then 2 else 3 end as bucket_id, count(account_id) accounts_count from accounts_1907 group by case when income < 20000 then 1 when income <= 50000 then 2 else 3 end) f right join (values(1, 'Low Salary'), (2, 'Average Salary'), (3, 'High Salary')) d(bucket_id, category) on d.bucket_id = f.bucket_id;


create table activity_550(player_id int, device_id int, event_date date, games_played int, primary key(player_id, event_date));
insert into activity_550 values(1,2,'2016-03-01',5),(1,2,'2016-03-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07--3',5);
select round(1.0 * count(player_id) / (select count(distinct player_id)from activity_550), 2) as fraction
from activity_550
where (player_id, event_date)in (
    select player_id, min(event_date) + 1 from activity_550 group by player_id
);


create table signups_1934(user_id int unique, time_stamp timestamp);
insert into signups_1934 values(3,'2020-03-21 10:16:13'),(7,'2020-01-04 13:57:59'),(2,'2020-07-29 23:09:44'),(6,'2020-12-09 10:39:37');
create table confirmations_1934(user_id int, time_stamp timestamp,action varchar(20));
insert into confirmation_1934 values(1,'2021-01-06 03:30:46','timeout'),(3,'2021-07-14 14:00:00','timeout'),(7,'2021-06-12 11:57:29','confirmed'),(7,'2021-06-13 12:58:28','confirmed'),(7,'2021-06-14 13:59:27','confirmed'),(2,'2021-01-22 00:00:00','confirmed'),(2,'2021-02-28 23:59:59','timeout');
select s.user_id, round(coalesce(sum(case when c.action='confirmed' then 1 else 0 end)*1.0 / nullif(count(c.action),0),0),2) confirmation_rate from signups_1934 s
left join confirmation_1934 c on s.user_id=c.user_id
group by s.user_id;


create table employees_1731(employee_id int unique, name varchar(50), reports_to int, age int);
insert into employees_1731 values(9,'Hercy',null,43),(6,'Alice',9,41),(4,'Bob',9,36),(2,'Winston',null,37);
select e.employee_id, e.name, count(em.employee_id)reports_count, round(avg(em.age))average_age from employees_1731 e
join employees_1731 em on e.employee_id=em.reports_to
group by e.employee_id, e.name
order by e.employee_id;


create table customer(customer_id int, name varchar(50), visited_on date, amount int);
INSERT INTO customer_1321 (customer_id, name, visited_on, amount) VALUES
(1, 'Jhon', '2019-01-01', 100),(2, 'Daniel', '2019-01-02', 110),(3, 'Jade', '2019-01-03', 120),(4, 'Khaled', '2019-01-04', 130),(5, 'Winston', '2019-01-05', 110),(6, 'Elvis', '2019-01-06', 140),(7, 'Anna', '2019-01-07', 150),(8, 'Maria', '2019-01-08', 80),(9, 'Jaze', '2019-01-09', 110),(1, 'Jhon', '2019-01-10', 130),(3, 'Jade', '2019-01-10', 150);
with last_6_days as (
    select distinct visited_on
    from customer_1321
    order by visited_on asc offset 6
)
leetcode-# select c1.visited_on, sum(c2.amount) as amount, round(sum(c2.amount) / 7., 2)  as average_amount from last_6_days as c1
inner join customer_1321 as c2 on c2.visited_on BETWEEN c1.visited_on - 6 and c1.visited_on
group by c1.visited_on;


create table activity(machine_id int, process_id int, activity_type varchar(10), timestamp float);
insert into activity_1661 (machine_id, process_id, activity_type, timestamp) VALUES
(0, 0, 'start', 0.712),
(0, 0, 'end', 1.520),
(0, 1, 'start', 3.140),
(0, 1, 'end', 4.120),
(1, 0, 'start', 0.550),
(1, 0, 'end', 1.550),
(1, 1, 'start', 0.430),
(1, 1, 'end', 1.420),
(2, 0, 'start', 4.100),
(2, 0, 'end', 4.512),
(2, 1, 'start', 2.500),
(2, 1, 'end', 5.000);
select  machine_id,
        round(avg(case when activity_type = 'start' then -timestamp else timestamp end)::decimal * 2 , 3) as processing_time
from activity_1661 group by machine_id
order by machine_id asc;


create table movies_1341(movie_id int primary key, title varchar(20));
insert into movies_1341 values(1,'Avengers'),(2,'Frozon 2'),(3,'Joker');
create table users_1341(user_id int primary key, name varchar(50));
insert into users_1341 values(1,'Daniel'),(2,'Monica'),(3,'Maria'),(4,'James');
create table movierating_1341(movie_id int, user_id int, rating int, created_at date, primary key(movie_id, user_id));
insert into movierating_1341 (movie_id, user_id, rating, created_at) VALUES
(1, 1, 3, '2020-01-12'),
(1, 2, 4, '2020-02-11'),
(1, 3, 2, '2020-02-12'),
(1, 4, 1, '2020-01-01'),
(2, 1, 5, '2020-02-17'),
(2, 2, 2, '2020-02-01'),
(2, 3, 2, '2020-03-01'),
(3, 1, 3, '2020-02-22'),
(3, 2, 4, '2020-02-25');

with movierating_in_february_2020 as (
    select *
    from movieRating_1341
    where TO_CHAR(created_at, 'yyyy-mm') = '2020-02'
),
movie_title as (
    select title
    from movierating_in_february_2020
    inner join movies_1341 using(movie_id)
    group by movie_id, title
    order by avg(rating) desc,title asc limit 1
),
user_name_who_has_rated_the_greatest_number_of_movies as (
    select name from movieRating_1341
    inner join users_1341
    using(user_id) group by user_id, name
    order by count(movie_id) desc,name asc limit 1
)
select name as results from user_name_who_has_rated_the_greatest_number_of_movies
union all select title from movie_title;



```