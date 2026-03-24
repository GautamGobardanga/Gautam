CREATE DATABASE onlineExam;
USE onlineExam;
CREATE TABLE theory(
id INT IDENTITY(1,1) PRIMARY KEY,
question NVARCHAR(500),
img NVARCHAR(200),
option1 NVARCHAR(200),
option2 NVARCHAR(200),
option3 NVARCHAR(200),
option4 NVARCHAR(200),
answer NVARCHAR(200)
);
CREATE TABLE Student (
    id INT IDENTITY(1,1) PRIMARY KEY,
    studentName NVARCHAR(100),
    roll NVARCHAR(50),
    email NVARCHAR(100),
    trade NVARCHAR(100),
    session NVARCHAR(200),

);