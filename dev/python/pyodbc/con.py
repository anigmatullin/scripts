import pyodbc

server = '192.168.1.204'
database = 'master'
username = 'sa'
password = 'P@ssw0rd'

con = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = con.cursor()

cursor.execute("SELECT @@version as ver")
row = cursor.fetchone()
while row:
    print(row.ver)
    row = cursor.fetchone()
