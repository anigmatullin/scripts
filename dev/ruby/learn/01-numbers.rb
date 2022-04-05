#!/usr/bin/ruby

msg = "Salam Aleikum!\n"
city = "Ufa"

print msg
print "Hello from #{city}\n"

puts "Wa Aleikum Assalam"

puts "Hi"


# vars
pi = 3.1415
bool = true
smth  = nil

puts pi
puts !bool
puts smth
puts pi

puts msg

puts msg[1, 3]
puts msg.index("a")

puts "msg.index"
puts 2**5

puts Math.sqrt(pi.ceil())

puts pi.abs()


s = gets.chomp()

puts s + " - that was your text!"
