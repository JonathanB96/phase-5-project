class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :steps
      t.string :image_url
      t.integer :category_id
      t.integer :user_id
      t.integer :cuisine_id

      t.timestamps
    end
  end
end
