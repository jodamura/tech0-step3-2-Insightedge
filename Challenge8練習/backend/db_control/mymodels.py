from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base
# from datetime import datetime  # この行は削除します

Base = declarative_base()

class Customers(Base):
    __tablename__ = 'customers'
    customer_id = Column(String, primary_key=True)
    customer_name = Column(String)
    age = Column(Integer)
    gender = Column(String)

class Items(Base):
    __tablename__ = 'items'
    item_id = Column(String, primary_key=True)
    item_name = Column(String)
    price = Column(Integer)

class Purchases(Base):
    __tablename__ = 'purchases'
    purchase_id = Column(Integer, primary_key=True, autoincrement=True)
    purchase_name = Column(String, ForeignKey("customers.customer_id"))
    date = Column(DateTime)  # 'datetime' を 'DateTime' に変更

class PurchaseDetails(Base):
    __tablename__ = 'purchase_details'
    purchase_id = Column(Integer, ForeignKey("purchases.purchase_id"), primary_key=True)
    item_name = Column(String, ForeignKey("items.item_id"), primary_key=True)
    quantity = Column(Integer)
