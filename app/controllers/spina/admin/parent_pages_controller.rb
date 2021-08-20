module Spina::Admin
  class ParentPagesController < AdminController
    
    def index
      @page_collection = Spina::PageCollection.find_by(id: params[:page_collection_id])
      @pages = Spina::Page.where(page_collection: @page_collection).sorted.includes(:translations)
    end
    
  end
end