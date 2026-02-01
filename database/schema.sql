CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  salary DECIMAL(10,2),
  role ENUM('HR','EMPLOYEE'),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE payroll (
  id INT PRIMARY KEY AUTO_INCREMENT,
  employee_id INT,
  month VARCHAR(20),
  basic_salary DECIMAL(10,2),
  deductions DECIMAL(10,2),
  net_salary DECIMAL(10,2),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE attendance (
  id INT PRIMARY KEY AUTO_INCREMENT,
  employee_id INT,
  date DATE,
  status ENUM('PRESENT','ABSENT'),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);
