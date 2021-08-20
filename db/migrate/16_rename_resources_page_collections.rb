class RenameResourcesPageCollections < ActiveRecord::Migration[6.1]
  def change
    rename_table :spina_resources, :spina_page_collections
    rename_column :spina_pages, :resource_id, :page_collection_id
  end
end
