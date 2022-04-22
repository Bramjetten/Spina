module Spina
  module Admin
    class SearchPagesController < AdminController
      
      def index
        @pages = Spina::Page.sorted.joins(:translations).includes(:translations).where(resource_id: params[:resource_id]).where(spina_page_translations: {locale: I18n.locale}).where("spina_page_translations.title ILIKE ?", "%#{params[:query]}%").page(params[:page])
      end
      
    end
  end
end