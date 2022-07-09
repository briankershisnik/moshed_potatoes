class Api::MoviesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_movie, only: [:show, :update, :destroy]
  
  def index
    render json: Movie.all
  end

  def show
    render json: @movie
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save 
      render json: @movie 
    else
      render json: { errors: @movie.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: { errors: @movie.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @movie.destroy
    render json: { message: 'Movie Deleted' }
  end

  private
    def movie_params
      params.require(:movie).permit(:title, :desc, :mlink)
    end

    def set_movie
      @movie = Movie.find(params[:id])
    end
end