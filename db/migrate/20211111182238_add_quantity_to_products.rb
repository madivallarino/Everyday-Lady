class AddQuantityToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :number, :integer
  end
end
