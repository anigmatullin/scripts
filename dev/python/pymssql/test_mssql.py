#! env python3

import os
import pymssql  
from dotenv import load_dotenv

# keep secrets in .env!
load_dotenv()

user = os.getenv("DBUSER")
passwd = os.getenv("DBPASS")
host = os.getenv("HOST")
db = os.getenv("DB")


conn = pymssql.connect(server=host, user=user, password=passwd, database='master')
if not conn:
    print('connection problem - check .env')
    exit()

cursor = conn.cursor(as_dict=True)

cursor.execute('SELECT @@version as ver')
for row in cursor:
    print("Version=%s" % (row['ver']))

conn.close()

print("Salam Aleikum!")
