--retrieving single attribute from the relation
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