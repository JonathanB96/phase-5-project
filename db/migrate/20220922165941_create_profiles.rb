class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :firstname
      t.string :lastname
      t.integer :user_id

      t.timestamps
    end
  end
end
