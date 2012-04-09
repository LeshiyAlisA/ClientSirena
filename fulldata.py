# coding=utf-8
__author__ = 'leshiy'

import psycopg2
import random

def returnNumberdoc():
    return str(random.randrange(1000, 9988)) + ' ' + str(random.randrange(100000, 998899))


def returnData():
    return str(random.randrange(1, 28)) + '.' + str(random.randrange(1, 12)) + '.' + str(random.randrange(2000, 2012))


def returnAddress():
    return "г. " + random.sample(town_name, 1)[0] + " ул. " + random.sample(street_name, 1)[0] + " д. " + str(
        random.randrange(100)) + " кв. " + str(random.randrange(100))


def returnPhone():
    return "+" + str(random.randrange(1, 9)) + "(" + str(random.randrange(900, 980)) + ") " + str(
        random.randrange(100, 989)) + " " + str(random.randrange(10, 99)) + " " + str(random.randrange(10, 99))

conn = psycopg2.connect('host = localhost dbname = mydb user = postgres password = 1297536')

cur = conn.cursor()

last_name = ('Иванов', 'Васильев', 'Петров', 'Смирнов', 'Михайлов', 'Фёдоров', 'Соколов', 'Попов', 'Андреев', 'Яковлев')
first_name = ('Александр', 'Алексей', 'Сергей', 'Андрей', 'Дмитрий', 'Михаил', 'Павел', 'Илья', 'Константин', 'Виктор')
middle_name = ('Александрович', 'Алексеевич', 'Сергеевич', 'Андреевич', 'Дмитриевич', 'Михаилович', 'Павлович', 'Ильич',
               'Константинович', 'Викторович')

company_name = ("ООО Рога и копыта", "ООО Семеро смелых", "ЗАО Братство рыжих")
department_name = ("Отдел кадров", "Совет деректоров", "Бухгалтерия")
town_name = ("Москва", "Нью Васюки", "Орел", "Курск")
street_name = ("Мира", "Московская", "Проспект победы", "Тверская")
doc_name = ("Права", "Паспорт")

for i in range(100000):
    cur.execute(
        'INSERT INTO "BP_people" ("company", "department", "tubNum", "lastName", "firstName", "middleName", "passport", "numberPassport", "datePassport", "address", "phone") VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        , (
        random.sample(company_name, 1)[0], random.sample(department_name, 1)[0], str(i), random.sample(last_name, 1)[0],
        random.sample(first_name, 1)[0],
        random.sample(middle_name, 1)[0], random.sample(doc_name, 1)[0], returnNumberdoc(), returnData(),
        returnAddress(),
        returnPhone()))
    print i

conn.commit()
cur.close()
conn.close()
