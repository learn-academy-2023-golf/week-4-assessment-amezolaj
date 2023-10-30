# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'
def even_or_odd number
    if number %2 == 0
        return "#{number} is even"
    elsif number %2 == 1
        return "#{number} is odd"
    end
end
p even_or_odd(reposts1)    
p even_or_odd(reposts2)
p even_or_odd(reposts3)
# Pseudo code:
# created a method called even_or_odd
# created a conditional statement evaluating if the number is divisble by 2 with no remainder (%) the number is even and repeated the step for odd

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels string
    string.delete'aeiou'.capitalize
end       

p remove_vowels beatles_album1
p remove_vowels beatles_album2
p remove_vowels beatles_album3

# Pseudo code:
# created a method called remove_vowels
# used .delete to take out any vowels that were in the string
# used .capitalize to capitalize the first letter so it can remove tha A
# output is a string with no vowels

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome string
     if string.capitalize == string.reverse.capitalize
        "#{string} is a palindrome"
     else
        "#{string} is not a palindrome"
     end
 end
p palindrome palindrome_test_case1
p palindrome palindrome_test_case2
p palindrome palindrome_test_case3

# Pseudo code:
# created a method called palindrome
# used a conditional to determine if the string == to a string when its reversed 
# used . capitalize so it would include the uppercsed letters
# outout is if a string is a palindrome or not