```sql
retrieving single attribute from the relation
select s_id from advisor; 

--retrieving data from database without duplicate data
select distinct s_id from advisor; 

select all s_id from advisor; --both the first and this query are same but is mostly used in set operations

select s_id*3 from advisor; --multiply each record in the table with 3 times and also possible to all arithmetic operations

select * from advisor where s_id='59455'; --retrieving data from database using where clause

select * from classroom where building='Power' and room_number='972'; --retrieving data from database it should satisfy the both condition and also can able to perform not, or

select * from classroom where capacity>=10; --retrieving data from database with the condition where the capacity attribute greater than or equal to 10 also perform operation like less <, <=, >, >=, <> or !=, =

select  building, advisor.s_id
from classroom, advisor
where classroom.room_number=advisor.s_id;


select instructor.*
from instructor, teaches
where instructor.id=teaches.id;

select dept_name as "departmant" from instructor limit 4;

select i.dept_name, s.course_id
from instructor as i, teaches as s;

select dept_name||course_id as departmentnamewithnumber from instructor, teaches limit 4;

//From database where the course_id grater than 500 because the course_id is varchar
select * from teaches where course_id >='500';

//course_id greater than 500 and semester also be Spring
select * from teaches where id>='2000' and semester='Spring';

//pattern string matching returns where semester starts with 'Spr'
 select * from teaches where semester like 'Spr%';

//pattern string matching returns where semester ends with 'll'
select * from teaches where semester like '%ll';

//retrieve all the attributes where the building name is like Taylor no matter where it may be either starting, ending, middle
select * from section where building like '%Taylor%';

//character matching
select * from section where building like '__l__';

//order by year descending default would be ascending
select * from section order by year desc;

//order by multiple attributes
select * from section order by year desc, room_number asc;

//set operation using union
(select course_id
 from section
 where semester = 'Fall' and year= 2017)
 union
 (select course_id
 from section
 where semester = 'Spring' and year= 2018);

//set operation using union all
(select course_id
 from section
 where semester = 'Fall' and year= 2017)
 union all
 (select course_id
 from section
 where semester = 'Spring' and year= 2018);

//set operation using intersect
 (select course_id
 from section
 where semester = 'Fall' and year= 2017)
 intersect
 (select course_id
 from section
 where semester = 'Spring' and year= 2018);

//set operation using intersect all
 (select course_id
 from section
 where semester = 'Fall' and year= 2017)
 intersect all
 (select course_id
 from section
 where semester = 'Spring' and year= 2018);

//set operation using expect
 (select course_id
 from section
 where semester = 'Fall' and year= 2017)
 except
 (select course_id
 from section
 where semester = 'Spring' and year= 2018);


//set operation using expect all
 (select course_id
 from section
 where semester = 'Fall' and year= 2017)
 except all
 (select course_id
 from section
 where semester = 'Spring' and year= 2018);

//to check null values
select name from instructor
where salary is null;

//to omit null value
select name from instructor
where salary is not null;

//to count the no of name in name attribute
select count(name) from instructor;

//sum the name
select sum(start_hr) from time_slot;

//max start time
select max(start_hr) from time_slot;

//min start time
select min(start_hr) from time_slot;

//group by with aggregate
select year, count(semester)
from section
group by year
order by count desc;

//group by with having count clause
select year, count(semester)
from section
group by year
having count(year)>=10
order by count desc;

//group by with average salary using having clause
select deptname,avg(salary)asavgsalary
from instructor
group by deptname
having avg(salary)>42000;

//Nested queries
select distinct course_id from section where semester='Fall' and year=2017 and course_id in (select course_id from section where semester='Spring' and year=2018);

//to find the minimum credit according to each department_name with id grater than 5000
select dept_name, total_cred from student where tot_cred=(select min(tot_cred) from student where id>='5000');

//using some
select name from instructor where salary>some (select salary from instructor where dept_name='Physics');

//using all
select name from instructor where salary>all(select salary from instructor where dept_name='Physics');

//checking absents of duplicate tuples
select course_id
from section as S
where semester = 'Fall' and year= 2017 and
exists (select *
from section as T
where semester = 'Spring' and year= 2018 and
S.course_id= T.course_id);

//checking for not existing data
select S.ID, S.name
from student as S
where not exists ((select course_id
from course
where dept name = 'Biology')
except
(select T.course_id
from takes as T
where S.ID = T.ID));

//absence of duplicate tuples
select T.course_id
from course as T
where unique (select R.course_id
from section as R
where T.course id= R.course_id and
R.year = 2017);

//check unique attributes
select T.course_id
from course as T
where unique (select R.course_id
from section as R
where T.course id= R.course_id and
R.year = 2017);

//not unique attributes 
select T.course_id
from course as T
where not unique (select R.course_id
from section as R
where T.course id= R.course_id and
R.year = 2017);

//sub query from clause
select dept_name, avg_salary
from(select dept_name, avg(salary) as avg_salary from instructor group by dept_name) where avg_salary>42000;

select dept_name, avg_salary from(select dept_name, avg(salary) from instructor group by dept_name)as dept_avg(dept_name, avg_salary) where avg_salry>42000;

//with clause
select max_budget(value)as(select max(budget) from department)select budget from department, max_budget where department.budget=max_budget.value;

//scalar subqueries
select dept_name,(select count(*)from instructor where department.dept_name=instructor.dept_name)as total_instructor from department;

//modifications on tables
update takes set grade='A+' where id='24932';

//delete from relation
delete from takes where course_id='559';

//inserting new record
insert into takes(id, course_id, sec_id, semester, year, grade) values('1212', '3434', '3', 'Fall', '2004, 'A);

//natural join
select * from takes natural join teaches limit 10;

//name of student along with title who's taken course with two different table takes and course
select name, title
from student natural join takes, course
where takes.course_id = course.course_id;

//inner join
select student.ID as ID, name, dept name, tot_cred,
course_id, sec_id, semester, year, grade
from student join takes on student.ID = takes.ID;

//left join
select * from student left join takes on student.ID = takes.ID;

//right join
select * from takes right join student on takes.ID = student.ID;

//inner join other example
select takes.semester, takes.year from takes inner join teaches on takes.course_id=teaches.course_id limit 4;

//inner join used along with group by
select count(takes.semester), takes.year from takes left join teaches on takes.course_id=teaches.course_id group by takes.year;

//two inner joins are used
select i.id, i.name, i.dept_name from instructor as i inner join course as c on i.dept_name=c.dept_name inner join classroom on c.credits=classroom.capacity limit 3;

select course_id, min(grade) from takes where grade=(select min(grade)from takes) group by course_id;

select course_id, max(sec_id)from teaches group by course_id;

select course_id, max(sec_id)from teaches where sec_id >=(select max(sec_id)from teaches where semester='Fall') group by course_id;

select st.name, st.id from student as st inner join section on st.id=section.course_id limit 3;

//to find maximum budget
select * from department where budget=(select max(budget)from department);

//Leetcode 1757 recyclable and low fat products
select product_id from products where low_fats='Y' and recyclable='Y';

//Leetcode 584 find customer referee
select name from customer where referee_id!=2 or referee_id is null;

//Leetcode 595 big countries
select name,population, area from world where area>=3000000 or population>=25000000;

//Leetcode 1148 articel view 1
select distinct(viewer_id) as id from views
where author_id=viewer_id;

//Leecode 1683 invalid tweets
select tweet_id from tweets where length(content)>15;

//Leetcode 1378 replace employee id with unique identifier
select emu.unique_id, emp.name from employees as emp
left join employeeuni emu on emu.id=emp.id;

//1068 product sales analysis 1
select pr.product_name, sa.year, sa.price from product as pr
inner join sales sa on pr.product_id=sa.product_id;

//197 rising temperature
select today.id from weather yes cross join weather today
where today.recorddate-yes.recorddate=1
and today.temperature>yes.temperature;

//1581 customers who visited but did not make any transactions
select vi.customer_id, count(*)as count_no_trans from visits as vi
left join transactions as tra on vi.visit_id=tra.visit_id
where tra.visit_id is null
group by vi.customer_id;


//607 Sales person
select sp.name from salesperson sp
where sales_id not in(
    select sales_id from orders o 
    inner join company c on c.com_id=o.com_id and c.name='RED'
)

//620 not boring movies
select * from cinema where id%2!=0 and description not in('boring') order by rating desc;

//570 managres with at least 5 direct reports
select em.name from employee em
inner join employee e1 on em.id=e1.managerId
group by em.id, em.name
having count(em.id)>=5;

//577 employee bonus
select em.name, bo.bonus from employee as em
left join bonus as bo on em.empId=bo.empId
where bo.bonus<1000 or bonus is null;

//to find the latest employeepayhisory on humanresources schema on Adventureworks 
 with payhistory as (
 select *,
 row_number() over (
 partition by businessentityid
 order by ratechangedate desc
 ) as latestpay
 from humanresources.employeepayhistory
 where businessentityid in (122, 132, 142)
 select *
 from ranked_payhistory
 where latestpay = 1;

```