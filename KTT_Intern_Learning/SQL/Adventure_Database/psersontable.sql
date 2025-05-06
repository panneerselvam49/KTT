select * from purchasing.purchaseorderdetail;

select * from purchasing.purchaseorderheader;

select * from purchasing.shipmethod;

select name from purchasing.vendor;

select purchaseorderid, orderdate from purchasing.purchaseorderheader;

select * from purchasing.purchaseorderdetail
where orderqty=purchaseorderid;

select * from purchasing.purchaseorderdetail
where orderqty>3 and productid >100;

select * from purchasing.purchaseorderdetail
where purchaseorderdetailid=1201 or purchaseorderid=2;

update purchasing.purchaseorderdetail
set rejectedqty=1.00
where purchaseorderid=1;

delete from purchasing.purchaseorderdetail
where orderdetaild=2;

select * from purchasing.purchaseorderdetail where purchaseorderid=1;

select * from purchasing.purchaseorderdetail
where purchaseorderid!=1;

select * from purchasing.purchaseorderdetail where purchaseorderid in(1,2,3);

select * from purchasing.purchaseorderdetail order by purchaseorderid asc;

select * from purchasing.purchaseorderdetail order by purchaseorderid desc;

select purchaseorderid, sum(purchaseorderdetailid)as totalorderid from purchasing.purchaseorderdetail
group by purchaseorderid having sum(purchaseorderdetailid)>200;

select * from purchasing.purchaseorderdetail;

select count(orderqty) from purchasing.purchaseorderdetail;

select sum(productid) from purchasing.purchaseorderdetail;

select min(productid) from purchasing.purchaseorderdetail;

select max(productid) from purchasing.purchaseorderdetail;

select avg(productid) from purchasing.purchaseorderdetail;

select * from humanresources.employee;

select duedate, orderqty from purchasing.purchaseorderdetail
inner join humanresources.employee on purchasing.purchaseorderdetail.purchaseorderid=humanresources.employee.businessentityid;

select a.addressid, a.city
from person.address a
left join humanresources.employee e on a.addressid = e.businessentityid;
