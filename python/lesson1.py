#print("Hello, Python!")

#name = input("What is your name? ")
#print(f"Nice to meet you, {name}!")


name = "Joy Doe"
age = 20
temparature = 98.6
bool = True
wala = None

#print(name)
#print(age)
#print(temparature)
#print(bool)
#print(wala)

#print(type(name))
#print(type(age))
#print(type(temparature))
#print(type(bool))
#print(type(wala))

#ageTwo = str(age)
#print(type(ageTwo))

#nameTwo = int(name)
#print(type(nameTwo))

while True:
    student_name = input("Student name: ").strip().upper()
    if student_name:
        break
    print("Error: Student name is required.")

Gsubject1 = int(input("Grade in Subject 1 : "))   
Gsubject2 = int(input("Grade in Subject 2 : "))  
Gsubject3 = int(input("Grade in Subject 3 : "))  
average = (int(Gsubject1) + int(Gsubject2) + int(Gsubject3)) / 3 
attendance = int(input("Attendance percentage: "))

if average >= 90 and attendance >= 85:
    Status = "With Honors"
elif average >= 75 and attendance >= 75:
    Status = "Pass"
else:
    Status = "Fail"

print(f"Student Name: {student_name}")
print(f"Average Grade: {average:.2f}")
print(f"Attendance: {attendance}%")
print(f"Status: {Status}")



