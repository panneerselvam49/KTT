select * from olympics;

select id, countries from olympics
where countries='IND' and year=2000 and sex='M' and season='Summer'
order by id desc;

select * from olympics
where medal='Gold' and noc='IND' and sport='Hockey';

update olympics
set season='Winter'
where id=118553;

select * from olympics where id=118553;
select * from olympics where id=118552;

alter table olympics rename noc to countries;

select * from olympics;

select * from olympics limit 4;

select * from olympics limit 5 offset 100000;

delete from olympics
where id=50603;

select * from olympics where id=50603;

select count(distinct countries) from olympics;

select countries,year, count(medal) as medals from olympics
group by countries, year
order by medals desc;

select * from olympics
order by name desc;

select count(*) from olympics
where name ilike 'A%';

select name, countries, games, year, sport, medal from olympics
left join noc_region on olympics.countries=noc_region.NOC;

select name, countries, city, games, year, sport, medal from olympics
inner join noc_region on olympics.team=noc_region.region
where name like '%a%' 
order by year desc;

select count(name) from olympics where name like 'a%';

select * from olympic_medals;

create index nameindex on olympics(medal);

select * from olympics where medal='Gold';

select medal_type, city from olympic_medals
left join olympics on olympic_medals.discipline=olympics.sport;

select medal_type, city from olympic_medals
right join olympics on olympic_medals.discipline=olympics.sport;

select medal_type, city, gender, country from olympic_medals
inner join olympics on olympic_medals.discipline=olympics.sport;

select medal_type, city from olympic_medals
full join olympics on olympic_medals.discipline=olympics.sport;

SELECT m.medal_code, m.country, o.event, o.country_long
FROM olympic_medals m, olympic_medals o
where o.country!=m.country;

select * from olympics where medal='Gold';

alter table olmpics rename to olympics;

select team, count(countries) from olympics
where sport='Judo'
group by team;

select medal, count(distinct city) from olympics
where medal='Gold'
group by medal;

begin;
update olympics
set sport='Cricket'
where id=4;
savepoint a;

update olympics
set name='Panneer'
where id=45;
savepoint b;

select * from olympics where id=4;
select * from olympics where id=4;