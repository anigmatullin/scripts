class AbstractLogger

  attr_accessor :name

  def initialize(name)
    @name = name
    puts "From Parent Class"
  end

  def log(msg)
  end

end

class ConsoleLogger < AbstractLogger

  def log(msg)
    puts msg
  end

end

logger = ConsoleLogger.new("log")

logger.log("Hello")
