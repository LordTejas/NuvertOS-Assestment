import pandas as pd
import pymysql

"""
RUN THIS COMMAND TO INSTALL DEPENDENCIES

pip install pymysql pandas
"""

# Connect to the MySQL database
connection = pymysql.connect(
    host='localhost',
    user='root',
    password='Tejas_5225',
    db='nevert_os_chemicals_api'
)

# Load the CSV file into a DataFrame
csv_file = 'chemicals.csv'
df = pd.read_csv(csv_file)

# Prepare the INSERT statement with placeholders
sql = "INSERT INTO chemicals (name, image, description) VALUES (%s, %s, %s)"

# Truncate the database before inserting the same fields
print("[CLEAN] Truncating chemicals table...")
with connection.cursor() as cursor:
    cursor.execute('TRUNCATE TABLE chemicals')
connection.commit()

# Iterate over the rows and execute parameterized INSERT statements
for index, row in df.iterrows():
    compound_name = row.iloc[1]
    compound_description = row.iloc[2]
    image_source = row.iloc[3]

    # Execute the SQL statement using parameterized queries
    print(f"[EXEC] {sql % (compound_name, image_source, compound_description)}")
    with connection.cursor() as cursor:
        cursor.execute(sql, (compound_name, image_source, compound_description))
    connection.commit()
    

# Close the database connection
connection.close()
print("[DONE] Insertion Completed Successfully!")
