module Spina
  class NavigationItem < ApplicationRecord
    belongs_to :navigation, touch: true
    belongs_to :page

    has_ancestry

    scope :main, -> { joins(:page).where(spina_pages: {page_collection_id: nil}) }
    scope :sorted, -> { order('spina_navigation_items.position') }
    scope :live, -> { joins(:page).where(spina_pages: {draft: false, active: true}) }
    scope :in_menu, -> { joins(:page).where(spina_pages: {show_in_menu: true}) }
    scope :active, -> { joins(:page).where(spina_pages: {active: true}) }
    
    class << self
      alias regular_pages main
      alias main_collection main
    end

    validates :page, uniqueness: {scope: :navigation}

    delegate :menu_title, :materialized_path, :draft?, to: :page
  end
end