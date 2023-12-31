import mysql.connector
from mysql.connector import errorcode

# Obtain connection string information from the portal

config = {
    'host':'tech0-5th-fumi-japaneast.mysql.database.azure.com',
    'user':'obatasan',
    'password':'tech0-techtech',
    'database':'sobata',
    'ssl_ca':'C:/Users/sobata/ssl/DigiCertGlobalRootCA.crt.pem'
}
# Construct connection string

try:
    conn = mysql.connector.connect(**config)
    print("Connection established")
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with the user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)
else:
    cursor = conn.cursor()

# Drop previous table of same name if one exists
cursor.execute("DROP TABLE IF EXISTS GenMission;")
cursor.execute("DROP TABLE IF EXISTS Child;")
cursor.execute("DROP TABLE IF EXISTS Characters;")
cursor.execute("DROP TABLE IF EXISTS Mission;")
cursor.execute("DROP TABLE IF EXISTS Map;")
cursor.execute("DROP TABLE IF EXISTS User;")
print("Finished dropping table (if existed).")

# Create table
cursor.execute("CREATE TABLE User (UserID INT PRIMARY KEY, Username VARCHAR(255),Email VARCHAR(255),EncryptedPassword VARCHAR(255),SignupDate DATETIME,LastLogin DATETIME,PostCode VARCHAR(10),Address VARCHAR(255),LifeStyle VARCHAR(255));")
print("Finished creating User table.")

cursor.execute("CREATE TABLE Map (MapID INT PRIMARY KEY, MapPlace VARCHAR(255));")
print("Finished creating Map table.")

cursor.execute("CREATE TABLE Mission (MissionID INT PRIMARY KEY, MissionName VARCHAR(255), MissionModel VARCHAR(255));")
print("Finished creating Mission table.")

cursor.execute("CREATE TABLE Characters (CharacterID INT PRIMARY KEY, CharacterName VARCHAR(255));")
print("Finished creating Character table.")

cursor.execute("CREATE TABLE Child (ChildID INT PRIMARY KEY, UserID INT, ChildAge INT, ChildGender VARCHAR(10), ChildDetail TEXT, FOREIGN KEY (UserID) REFERENCES User(UserID));")
print("Finished creating Child table.")

cursor.execute("CREATE TABLE GenMission (GenMissionID INT PRIMARY KEY, UserID INT, GenMissionRequest TEXT, GenMissionResponse TEXT, MissionID INT, MapID INT, ChildID INT, CharacterID INT, MissionTime DATETIME, Language VARCHAR(50),  \
    FOREIGN KEY (MissionID) REFERENCES Mission(MissionID), FOREIGN KEY (MapID) REFERENCES Map(MapID), FOREIGN KEY (ChildID) REFERENCES Child(ChildID), FOREIGN KEY (CharacterID) REFERENCES Characters(CharacterID), FOREIGN KEY (UserID) REFERENCES User(UserID));")
print("Finished creating GenMission table.")














