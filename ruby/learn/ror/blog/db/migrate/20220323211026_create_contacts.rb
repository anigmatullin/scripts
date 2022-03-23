class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :lastname
      t.string :email
      t.string :phone
      t.string :org

      t.timestamps
    end
  end
end
