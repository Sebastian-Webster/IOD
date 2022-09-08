create database db1; /*Create a database called db1*/

show databases; /*Show all databases*/

use classicmodels; /* Use classicmodels database*/
show tables; /*Show tables in the database*/

create table db1.customers( /*Create a table*/
	name varchar(255) NOT NULL,
    phone_number int,
    city varchar(100)
)

select * from db1.customers; /*Select all items from db1.customers*/

insert into db1.customers values ("Sebastian",111111,"Auckland"); /*Insert a row into db1.customers*/

insert into db1.customers values ("Sebastian2",null,"Auckland"); /*Insert a row into db1.customers*/

insert into db1.customers(name, phone_number, city) values ("Sebastian3",234234,"Auckland"); /*Explicitly mention what values to set columns*/

insert into db1.customers(name, city) values ("Sebastian4","Auckland"); /*Name will be Sebastian4, phone_number will be null, city will be Auckland*/

set sql_safe_updates=0; /*Disable SQL Safe Updates*/
update db1.customers /*Update db1.customers*/
set phone_number=123456, city="Wellington"  /*Set the phone_number to 123456*/
where name="Sebastian2"; /* Update phone_number to 123456 for every row where name is equal to "Sebastian2"*/

delete from db1.customers where name="Sebastian"; /*Delete every row where name is "Sebastian"*/

delete from db1.customers; /*Delete all rows from the customers table inside of database db1*/

drop table db1.customers; /*Delete the customers table that is inside of the database db1*/

alter table db1.customers add email varchar(255); /*Add an email column to all rows in db1.customers*/

alter table db1.customers drop email; /*Remove email column from all rows in db1.customers*/

create table db1.users(
	ID int NOT NULL PRIMARY KEY,
	name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);

create table db1.posts(
	ID int NOT NULL PRIMARY KEY,
	title varchar(20) NOT NULL,
    body varchar(255) NOT NULL,
    datePosted date,
    PRIMARY KEY (ID),
    FOREIGN KEY (creatorId) REFERENCES users(ID)
);

create table db1.comments(
	ID int NOT NULL PRIMARY KEY,
	body varchar(255) NOT NULL,
    datePosted date,
    PRIMARY KEY (ID),
    FOREIGN KEY (postId) REFERENCES posts(ID),
    FOREIGN KEY (creatorId) REFERENCES users(ID)
);

select * from classicmodels.customers; /*Show all customers from the classicmodels database*/

select distinct state from classicmodels.customers; /*Shows only the DIFFERENT (or distinct) values in state*/

select * from classicmodels.customers where state="NY"; /*Show all customers from the classicmodels database where the column state is "NY"*/

select count(distinct state) from classicmodels.customers; /*Shows the number of different states*/

select * from classicmodels.customers where state="NY" and contactLastName="Lee"; /*Show all customers with contactLastName="Lee" and state="NY"*/

select * from classicmodels.customers where contactLastName="Anderson"; /*Show all customers with contactLastName="Anderson"*/

select customerName from classicmodels.customers; /*Show only customerNames from classicmodels.customers (also shows customerNames even when they're null)*/

select state from classicmodels.customers; /*Show all states from classicmodels.customers*/

select state, contactLastName from classicmodels.customers; /*Show states and contactLastNames from the customers table in the classicmodels database*/

select * from classicmodels.orders;

select * from classicmodels.customers;

select customers.customerName, customers.customerNumber, customers.contactFirstName, customers.contactLastName, orders.orderDate, orders.requiredDate
from classicmodels.customers
inner join classicmodels.orders
on customers.customerNumber = orders.customerNumber;

select customers.customerName, customers.contactFirstName, customers.contactLastName, customers.customerNumber, orders.orderDate, orders.requiredDate
from classicmodels.customers
inner join classicmodels.orders
on orders.orderDate = orders.requiredDate;

select customers.customerName, customers.contactFirstName, customers.contactLastName, customers.customerNumber, orders.orderDate, orders.requiredDate
from classicmodels.customers
right join classicmodels.orders
on orders.orderDate = orders.requiredDate;

select customers.customerName, customers.contactFirstName, customers.contactLastName, customers.customerNumber, orders.orderDate, orders.requiredDate
from classicmodels.customers
left join classicmodels.orders
on orders.orderDate = orders.requiredDate;

select customers.customerName, customers.contactFirstName, customers.contactLastName, customers.customerNumber, orders.orderDate, orders.requiredDate
from classicmodels.customers
cross join classicmodels.orders;

create database testingdb;

CREATE TABLE IF NOT EXISTS testingdb.`tutorials` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#InnoDB is default engine

CREATE TABLE testingdb.users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  email varchar(30) NOT NULL,
  password varchar(255) NOT NULL,
  profileImageKey text,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE testingdb.textposts (
  id int NOT NULL AUTO_INCREMENT,
  creatorId int NOT NULL,
  title varchar(255) NOT NULL,
  description varchar(255),
  PRIMARY KEY (id),
  FOREIGN KEY (creatorId) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE testingdb.comments (
  id int NOT NULL AUTO_INCREMENT,
  userId int NOT NULL,
  postId int NOT NULL,
  body text NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (postId) REFERENCES textposts(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

flush privileges;

select * from testingdb.tutorials;
