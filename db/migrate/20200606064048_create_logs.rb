class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.integer :sr
      t.time :aht

      t.timestamps
    end
  end
end
