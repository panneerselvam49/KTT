select * from sales.currency;

select sum(storeid), customerid from sales.customer where customerid=territoryid
group by customerid;

select * from sales.customer where customerid=territoryid;

select * from sales.salesreason;

select count(salesreasonid) as reasoncount, reasontype from sales.salesreason
group by reasontype
order by reasoncount desc;

select * from sales.salestaxrate;

select * from sales.salestaxrate where salestaxrateid = taxtype;

select count(salestaxrate), name from sales.salestaxrate
group by name;

select count(distinct businessentityid) from sales.store
group by salespersonid;

begin;
select * from sales.salestaxrate where salestaxrateid=7;
update sales.salestaxrate
set taxrate=11
where salestaxrateid=7;
savepoint a;
update sales.salestaxrate
set name='Canada'
where taxtype=3;
rollback to a;

CREATE or replace FUNCTION add_num(a integer, b integer)
RETURNS integer AS $$
BEGIN
    RETURN a + b;
END;
$$ LANGUAGE plpgsql;

select add_num(salestaxrateid, taxtype) from sales.salestaxrate;
