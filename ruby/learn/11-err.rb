
begin

  file = File.open("nosuchfile.txt", "r")
  puts file
  file.close()

rescue StandardError => e

  puts "File Not Found"
  puts e

end
