-- SHOW all databases and USE task1
SHOW DATABASES;
use mysql;

-- CREATE TABLE maindb
CREATE TABLE maindb (
    ename VARCHAR(50),
    age INT NOT NULL,
    branch VARCHAR(30),
    domain VARCHAR(30),
    experience INT,
    eid INT PRIMARY KEY,
    native VARCHAR(100),
    mobileno BIGINT,
    cname VARCHAR(30)
);

-- CREATE TABLE subdb
CREATE TABLE subdb (
    ename VARCHAR(50),
    age INT NOT NULL,
    branch VARCHAR(30),
    domain VARCHAR(30),
    experience INT,
    eid INT PRIMARY KEY,
    native VARCHAR(100),
    mobileno BIGINT,
    cname VARCHAR(30)
);

-- INSERT INTO maindb
INSERT INTO maindb (ename, age, branch, domain, experience, eid, native, mobileno, cname)
VALUES 
('Panneerselvam', 20, 'CBE', 'IT', 0, 615, 'Salem', 63742484441, 'KT Telematic'),
('Emp1', 20, 'CBE', 'IT', 0, 614, 'Salem', 63742484441, 'KT Telematic'),
('Emp2', 20, 'CBE', 'IT', 0, 613, 'Salem', 63742484441, 'KT Telematic'),
('Emp3', 20, 'CBE', 'IT', 0, 612, 'Salem', 63742484441, 'KT Telematic'),
('Emp4', 20, 'CBE', 'IT', 0, 611, 'Salem', 63742484441, 'KT Telematic');

-- INSERT INTO subdb
INSERT INTO subdb (ename, age, branch, domain, experience, eid, native, mobileno, cname)
VALUES 
('Emp7', 20, 'Slm', 'IT', 0, 610, 'Salem', 63742484441, 'KT Telematic'),
('Emp8', 20, 'Salem', 'Motors', 0, 609, 'Salem', 63742484441, 'KT Telematic'),
('Emp9', 20, 'CBE', 'IT', 0, 608, 'Salem', 63742484441, 'KT Telematic'),
('Emp10', 20, 'Slm', 'Motors', 0, 607, 'Salem', 63742484441, 'KT Telematic'),
('Emp11', 20, 'CBE', 'Sales force', 0, 6016, 'Salem', 63742484441, 'KT Telematic');

-- READ operations
SELECT * FROM maindb;
SELECT * FROM subdb;
SELECT ename, eid FROM maindb WHERE domain = 'IT';
SELECT * FROM maindb ORDER BY eid DESC LIMIT 3;

-- UPDATE operations
UPDATE maindb SET experience = 2 WHERE eid = 615;
UPDATE maindb SET domain = 'Software' WHERE domain = 'IT';

-- DELETE operation
DELETE FROM maindb WHERE eid = 611;

-- JOIN operation
SELECT a.ename, a.domain AS main_domain, b.domain AS sub_domain
FROM maindb a
JOIN subdb b ON a.native = b.native;

-- AGGREGATE operations
SELECT COUNT(*) FROM maindb;
SELECT AVG(age) AS avg_age FROM maindb;
SELECT domain, MAX(experience) FROM maindb GROUP BY domain;

SELECT * FROM subdb WHERE domain = 'IT' AND branch = 'CBE';
SELECT * FROM subdb WHERE branch IN ('CBE', 'Slm');
SELECT * FROM subdb WHERE ename LIKE 'Emp%';
SELECT * FROM maindb WHERE experience BETWEEN 0 AND 2;

SELECT DISTINCT branch FROM maindb;

ALTER TABLE maindb ADD email VARCHAR(100);
ALTER TABLE maindb MODIFY mobileno BIGINT;

SELECT * FROM maindb WHERE eid IN (SELECT eid FROM subdb);
