
path = "file.txt"

File.open(path, "a") do |file|
  file.write("\nHello")
end
