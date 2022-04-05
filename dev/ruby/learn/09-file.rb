
File.open("file.txt", "r") do |file|
  puts file
  s = file.read()
  puts s
end

#puts file -- error, this var is undefined

File.open("file.txt", "r") do |file|
  arr = file.readlines()
  for line in arr
    puts line
  end
end


file = File.open("file.txt", "r")
puts file
file.close()
