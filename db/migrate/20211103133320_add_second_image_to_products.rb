class AddSecondImageToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :back_image, :string
  end
end
