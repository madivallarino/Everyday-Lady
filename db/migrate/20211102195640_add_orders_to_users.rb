class AddOrdersToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :orders, :string, array:true, default: []
  end
end
