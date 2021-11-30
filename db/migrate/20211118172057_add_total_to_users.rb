class AddTotalToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :totals, :string, array:true, default: []
  end
end
