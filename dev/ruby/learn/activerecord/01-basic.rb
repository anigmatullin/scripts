
require 'active_record'
require './00-dbcon.rb'

# ActiveRecord::Base.establish_connection(
#   adapter: 'mysql2',
#   host: 'localhost',
#   username: 'root',
#   password: 'qaz123ZX',
#   database: 'ruby'
# )

class RubyGem < ActiveRecord::Base
  self.table_name = "gems"
  self.primary_key = "id"
end

RubyGem.columns.each { |column|
  puts (column.name.to_s + ":" + column.type.to_s)
}

RubyGem.new { |g|
  g.name = "Mysql2"
  g.author = "Brian Lopez"
  g.release_date = "2019-11-27"
  g.version = "0.5.3"
  g.comment = "Mysql Client"
}.save

records = RubyGem.all

records.each { |r|
  puts r.name
}
