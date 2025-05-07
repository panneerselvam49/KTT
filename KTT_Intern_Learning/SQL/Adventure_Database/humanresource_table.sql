select * from production.culture;

select * from production.culture where cultureid='';

select * from production.billofmaterials;

select count(unitmeasurecode)as mcode, unitmeasurecode from production.billofmaterials
group by unitmeasurecode
order by mcode desc;

select count(distinct unitmeasurecode) from production.billofmaterials;

select count(perassemblyqty) from production.billofmaterials where perassemblyqty>=10.00;

select * from production.product where color='Black';

select count(distinct safetystocklevel) from production.product;

select count(style) from production.product;

select count(*) from production.product;

select count(style) from production.product where style is null;

select count(*) from production.product where style is null;

select * from production.product where name ilike '% %';

select * from production.product where name not ilike '% %';

select count(distinct productnumber) from production.product;

begin;
savepoint a;
update production.product
set makeflag=false
where productid=318;
rollback to a;

savepoint b;
update production.product
set finishedgoodsflag=true
where productid=318;
rollback to b;
rollback;

select * from production.product;

update production.product
set color='Blue'
where productid=1;

select * from production.product where productid=1;

create user panneer with password 'paneer@123';
GRANT USAGE ON SCHEMA production TO panneer;
grant select, update, delete, insert on production.product to panneer;

revoke usage on schema production from panneer;
revoke select, update, delete, insert on production.product from panneer;

select count(*) from production.product where class is null;
select count(style) from production.product where class is not null;
