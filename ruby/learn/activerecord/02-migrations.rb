
require 'active_record'
require './00-dbcon.rb'

class CreateAuthorTable < ActiveRecord::Migration
  def change
  end
end

CreateAuthorTable.migrate(:up)
