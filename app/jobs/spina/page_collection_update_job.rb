module Spina
  class PageCollectionUpdateJob < ApplicationJob
    queue_as { Spina.config.queues[:page_updates] }
  
    def perform(page_collection_id)
      Page.where(page_collection_id: page_collection_id).roots.find_each(batch_size: 100) do |page|
        page.save
      end
    end
  end
end
