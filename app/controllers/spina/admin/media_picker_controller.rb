module Spina
  module Admin
    class MediaPickerController < AdminController
      before_action :set_media_folders

      def show
        @images = Image.where(media_folder: @media_folder).page(params[:page])
        @selected_images = Image.where(id: selected_ids)

        if selected_ids.any?
          @images = @images.order(Arel.sql("CASE WHEN id IN(#{selected_ids.join(', ')}) THEN 0 ELSE 1 END, created_at DESC"))
        end

        respond_to do |format|
          format.html { render layout: false }
          format.js { render :infinite_scroll if params[:page].present? }
        end
      end

      def select
        if params[:multiple]
          @images = Image.where(id: params[:image_ids].split("-"))
        else 
          @image = Image.find(params[:image_id])
        end
      end

      private

        def set_media_folders
          @media_folders = MediaFolder.order(:name).joins(:images).uniq
          @media_folder = MediaFolder.find(params[:media_folder_id]) if params[:media_folder_id].present?
        end

        def selected_ids
          params[:selected_ids].present? ? params[:selected_ids].map(&:to_i) : []
        end
        helper_method :selected_ids

    end
  end
end
