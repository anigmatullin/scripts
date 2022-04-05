
class Contact

  attr_accessor :name, :surname, :phone, :email

  def initialize(name, surname)
    puts "Constructor"
    @name = name
    @surname = surname
  end

  def full_name()
    return @name + " " + @surname
  end

end

c = Contact.new("Ilon", "Mask")

puts c.full_name()
