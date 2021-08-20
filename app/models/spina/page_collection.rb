module Spina
  class PageCollection < ApplicationRecord
    extend Mobility

    has_many :pages, dependent: :restrict_with_exception

    after_commit :update_pages, on: [:update]

    translates :slug, backend: :jsonb

    def pages
      case order_by
      when "title"
        super.joins(:translations).where(spina_page_translations: {locale: I18n.locale}).order("spina_page_translations.title")
      when "created_at"
        super.order(:created_at)
      else
        super.order(:position)
      end
    end

    def update_pages
      if previous_changes[:slug]
        PageCollectionUpdateJob.perform_later(id)
      end
    end
  end
end