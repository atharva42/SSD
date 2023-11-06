# Lab Activity 2
## Question 1
### Overview

1. At first the input and output files are opened using open() function and this function returns a int variable called file descripter which is stored in an int variable for future use.
2. ERROR handling cases are also written that displays the error on the screen and terminates the program if anything goes wrong.
3. using lseek() function the size of input file is calculated and a random buffer size is also alloted to a variable "buffer_size" and another variable "data_left" counts the data left to read.
4. A while loop is created and inside it using read() function data of "buffer_size" is read and reversed using a while loop and then written into another file. 
5. "data_left" variable is updated at end and the cycle i repeated until "data_left" becomes 0 or less.
6. The files are then closed using close().

### Execution.
```bash
g++ 2023201065_q
./a.out input_file_name
``` 

### Assumptions

1. This program assumes that a name of input file is given 
from command line.
2. The path or valid name of input file must be given.




# Lab Activity 2
## Question 2
### Overview.

1. The file gives out the name of file which has the permissions 0721 or 0723 or 0727


### Execution.
```c++
chmod +x 2023201065_q3.sh
./2023201065_q3.sh input_file_path 
``` 

### Assumptions

1. This program assumes that a name of input file is given 
from command line.
2. The path or valid name of input file must be given.





# Lab Activity 2
## Question 3
### Overview

1. The code is written in three parts in single .cpp file. 
2. First part creates a structure "file_s" so that the permissions of output file can be read. This is done because the <sys/stat.h> library states to do.
3. Then the directory given in command line is also checked for its existence.
4. In the second part of code the contents of input file and output file are matched to check if they are equal.
5. The output file is read into an array of name "buff"  while input file is read into another array "buff2".
6. Then the output file is reversed and compared with input file.
7. Here every character matches and the length of character in both files are compared.
8. Now few if-else statements are used to check for all file permission for user, group and others and the results are displayed on screen.
9. Now another structure is created just like before but this time for directory that I created earlier and its file permissions are checked and the results are displayed on the screen.


### Execution.
```c++
chmod +x 2023201065_q3.sh
./2023201065_q3.sh
``` 


### Assumptions


1. The path or valid name of input file must be given.
